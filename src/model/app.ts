import { createEvent, createStore, restore } from "effector";
import { Party } from "../types.ts";
import { db } from "../DB.ts";

const URL_ROOM_NAME = (() => {
  const search = window.location.search.slice(1);
  if (search) return search;
  
  // For GitHub Pages: extract ID from pathname like /scribble/some-id
  const pathname = window.location.pathname;
  const basePath = '/scribble/';
  if (pathname.startsWith(basePath)) {
    const id = pathname.slice(basePath.length);
    return id || '';
  }
  
  return '';
})();

export const $roomId = createStore(URL_ROOM_NAME);
const { $allParties } = createParties();
export { $allParties };

function createParties() {
  const allPartiesLoaded = createEvent<Party[]>();
  const $allParties = restore(allPartiesLoaded, []);

  // $allParties.watch((allParties) => {
  //   console.log("allParties", allParties);
  // });

  db.subscribeQuery({ party: {} }, (resp) => {
    if (resp.error) console.error(resp.error);
    if (resp.data) allPartiesLoaded(resp.data.party as Party[]);
  });

  return { $allParties };
}
