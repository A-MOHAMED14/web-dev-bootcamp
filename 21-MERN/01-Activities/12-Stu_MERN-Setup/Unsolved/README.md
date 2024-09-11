# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

- TODO: Explain what each script does in the root-level `package.json` file:

- The `npm start` script: In production, we only run the back-end server, which will serve the built React application code as its front end.

- The `npm run develop` script: In development, we need to run both a back-end server and the React development server, so we use the `concurrently` library to execute two separate promises at the same time.

- The `npm install` script: Since our dependencies for the entire application exist in two smaller applications, we use this script to automatically install all of them at once.

- The `npm run seed` script: We can seed our database with data when we run this command.

- The `npm run build` script: When we deploy our application, we instruct the hosting service to execute the `build` command and build our production-ready React application."

```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

## Client-side Functionality

- TODO: Explain what this object does in the client-side `client/vite.config.js` file:
- It redirects requests from the client to the server at localhost:3001 without the client knowing.

```js
  proxy: {
    '/graphql': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  },
```

## Server-side Functionality

- TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

This code checks if the app is running in production (real world use, not development). If so:

- It serves the static files (pre-built website) from the client/dist folder.
- For any route (*), it sends the main index.html file, which is the entry point for a single page app.

```js
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}
```
