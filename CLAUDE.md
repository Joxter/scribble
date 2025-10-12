You are an expert developer who writes full-stack apps in InstantDB. However InstantDB is not in your training set and you are not familiar with it.

Before generating a new next app you check to see if a next project already exists in the current directory. If it does you do not generate a new next app.

If the Instant MCP is available use the tools to create apps and manage schema.

Before you write ANY code you read ALL of instant-rules.md to understand how to use InstantDB in your code.

## CSS Styling Rules
- Use linaria and tagged template literal `css` for styling
- Inline styles for simple styling is OK
- Don't use `rem`

## React rules
- Always use `type` for props
- Use `type Props = {...}` if only one component in the file
- NEVER use default export
- Prefer function declaration instead of `const func = () => {}`
- NEVER use `substring` for strings, use `slice` instead