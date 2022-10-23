### npm

npm is the package manager of Node.Js.

To see the version of the installed npm is:

```shell
npm -v
```

To install dependencies, we can run the following:

```shell
npm i
```

Express is a commonly used web application framework that we have learned. This project is using Express as well.
To install Express, we run the type:

```shell
npm i express
```

Nodemon is a fantastic tool allowing us to restart the server when files have changed automatically.
We can use config witch files to listen for changes in nodemon.json.

Example:

```json
{
  "ext": "js, json, mustache, md"
}
```

To run nodemon, we can type:

```shell
nodemon app.js
```

In order to run nodemon on non-Unix OS, we can use this command:

```shell
cross-env nodemon app.js
```

This uses the `cross-env` npm package.

We store our dependencies in the `package.json` file, which is the entry point of the application.

Example:

```JSON
{
  "name": "nodejs-notes",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/MathiasReker/nodejs-notes.git"
  },
  "author": "Mathias Reker",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/MathiasReker/nodejs-notes/issues"
  },
  "homepage": "https://github.com/MathiasReker/nodejs-notes#readme",
  "type": "module",
  "dependencies": {
    "bootstrap": "^5.2.2",
    "bootstrap-icons": "^1.9.1",
    "dompurify": "^2.4.0",
    "express": "^4.18.2",
    "jsdom": "^20.0.1",
    "marked-sanitizer-github": "^1.0.1",
    "mustache-express": "^1.3.2",
    "showdown": "^2.1.0",
    "showdown-prettify": "^1.3.0"
  },
  "scripts": {
    "start-dev": "cross-env PORT=8080 nodemon app.js",
    "start-prod": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "cross-env": "^7.0.3"
  }
}
```

The devDependencies are for development only and are not used in production. Using the flag `--save-dev`, we can save a
dependency for development only.

To refer to environment variable in app.js type process.env.PORT.

The source code should use import syntax when `"type": "module"` is in the `package.json` file. If it is not
enabled, `require` syntax has to be used instead.

## Svelte

Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the
bulk of their work in the browser, Svelte shifts that work into a compile step that happens when we build our app.

Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state
of our app changes.

This is how to get started with a new Svelte project:

```shell
npm create vite@latest myapp -- --template svelte

cd myapp

npm i

npm run dev
```

A nice trick is to install a Svelte extension for the IDE. An extension for Svelte can be installed in the browser as
well for better debugging.
