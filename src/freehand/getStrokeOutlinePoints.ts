import type { StrokeOptions, StrokePoint } from "./types";
import { Vec } from "./Vec";

const { PI } = Math;

// Browser strokes seem to be off if PI is regular, a tiny offset seems to fix it
const FIXED_PI = PI + 0.0001;

/**
 * @internal
 */
export function getStrokeOutlineTracks(
  strokePoints: StrokePoint[],
  options: StrokeOptions = {},
): { left: Vec[]; right: Vec[] } {
  const { size = 16, smoothing = 0.5 } = options;

  // We can't do anything with an empty array or a stroke with negative size.
  if (strokePoints.length === 0 || size <= 0) {
    return { left: [], right: [] };
  }

  const firstStrokePoint = strokePoints[0];
  const lastStrokePoint = strokePoints[strokePoints.length - 1];

  // The total length of the line
  const totalLength = lastStrokePoint.runningLength;

  // The minimum allowed distance between points (squared)
  const minDistance = Math.pow(size * smoothing, 2);

  // Our collected left and right points
  const leftPts: Vec[] = [];
  const rightPts: Vec[] = [];

  // Previous vector
  let prevVector = strokePoints[0].vector;

  // Previous left and right points
  let pl = strokePoints[0].point;
  let pr = pl;

  // Temporary left and right points
  let tl = pl;
  let tr = pr;

  // Keep track of whether the previous point is a sharp corner
  // ... so that we don't detect the same corner twice
  let isPrevPointSharpCorner = false;

  /*
    Find the outline's left and right points

    Iterating through the points and populate the rightPts and leftPts arrays,
    skipping the first and last pointsm, which will get caps later on.
  */

  let strokePoint: StrokePoint;

  for (let i = 0; i < strokePoints.length; i++) {
    strokePoint = strokePoints[i];
    const { point, vector } = strokePoints[i];

    /*
      Handle sharp corners

      Find the difference (dot product) between the current and next vector.
      If the next vector is at more than a right angle to the current vector,
      draw a cap at the current point.
    */

    const prevDpr = strokePoint.vector.dpr(prevVector);
    const nextVector = (
      i < strokePoints.length - 1 ? strokePoints[i + 1] : strokePoints[i]
    ).vector;
    const nextDpr =
      i < strokePoints.length - 1 ? nextVector.dpr(strokePoint.vector) : 1;

    const isPointSharpCorner = prevDpr < 0 && !isPrevPointSharpCorner;
    const isNextPointSharpCorner = nextDpr !== null && nextDpr < 0.2;

    if (isPointSharpCorner || isNextPointSharpCorner) {
      // It's a sharp corner. Draw a rounded cap and move on to the next point
      // Considering saving these and drawing them later? So that we can avoid
      // crossing future points.

      if (
        nextDpr > -0.62 &&
        totalLength - strokePoint.runningLength > strokePoint.radius
      ) {
        // Draw a "soft" corner
        const offset = prevVector.clone().mul(strokePoint.radius);
        const cpr = prevVector.clone().cpr(nextVector);

        if (cpr < 0) {
          tl = Vec.Add(point, offset);
          tr = Vec.Sub(point, offset);
        } else {
          tl = Vec.Sub(point, offset);
          tr = Vec.Add(point, offset);
        }

        leftPts.push(tl);
        rightPts.push(tr);
      } else {
        // Draw a "sharp" corner
        const offset = prevVector.clone().mul(strokePoint.radius).per();
        const start = Vec.Sub(strokePoint.input, offset);

        for (let step = 1 / 13, t = 0; t < 1; t += step) {
          tl = Vec.RotWith(start, strokePoint.input, FIXED_PI * t);
          leftPts.push(tl);

          tr = Vec.RotWith(start, strokePoint.input, FIXED_PI + FIXED_PI * -t);
          rightPts.push(tr);
        }
      }

      pl = tl;
      pr = tr;

      if (isNextPointSharpCorner) {
        isPrevPointSharpCorner = true;
      }

      continue;
    }

    isPrevPointSharpCorner = false;

    if (strokePoint === firstStrokePoint || strokePoint === lastStrokePoint) {
      const offset = Vec.Per(vector).mul(strokePoint.radius);
      leftPts.push(Vec.Sub(point, offset));
      rightPts.push(Vec.Add(point, offset));

      continue;
    }

    /*
      Add regular points

      Project points to either side of the current point, using the
      calculated size as a distance. If a point's distance to the
      previous point on that side greater than the minimum distance
      (or if the corner is kinda sharp), add the points to the side's
      points array.
    */

    const offset = Vec.Lrp(nextVector, vector, nextDpr)
      .per()
      .mul(strokePoint.radius);

    tl = Vec.Sub(point, offset);

    if (i <= 1 || Vec.Dist2(pl, tl) > minDistance) {
      leftPts.push(tl);
      pl = tl;
    }

    tr = Vec.Add(point, offset);

    if (i <= 1 || Vec.Dist2(pr, tr) > minDistance) {
      rightPts.push(tr);
      pr = tr;
    }

    // Set variables for next iteration
    prevVector = vector;

    continue;
  }

  /*
    Return the points in the correct winding order: begin on the left side, then
    continue around the end cap, then come back along the right side, and finally
    complete the start cap.
  */

  return {
    left: leftPts,
    right: rightPts,
  };
}
