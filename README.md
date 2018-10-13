# webpack-babel-boilerplate

Basic project config with Babel, React & ESlint. Initialy based on [tkers/pixi-babel](https://github.com/tkers/pixi-babel)

## Setup

Clone the repository:

```bash
git clone https://github.com/BernardJeremy/webpack-babel-boilerplate.git
```

Install the (dev)dependencies:

```bash
npm install
```

## File structure

Static assets are located in the `static/` folder, these files are not modified
during the build step, only copied in the build folder.

JavaScript (ES6) files are located in the `src/` folder. They are transpiled
with [Babel](https://babeljs.io) and bundled with [Webpack](http://webpack.github.io), using `src/index.js` as the entry point. The resulting bundle is exported to `app.bundle.js` in the build folder, `dist/`

In this boilerplate, the `static/index.html` file loads the `app.bundle.js` bundle.

## Development

Start the development server (with hot reloading enabled):

```bash
npm run start
```

After the initial build, navigate to **[localhost:8080](http://localhost:8080)**.

*(Any changes you make to the source code files will automatically trigger a
rebuild and reload the page.)*

## Building

To build the application and optimise for production:

```bash
npm run build
```

This will copy all build artifacts to the `dist/` folder.

## Running in production

You can build a production-ready bundle and serve it directly with one single command:

```bash
npm run start:prod
```

This will build you app onto the `dist/` folder and serve it via `http-server` module, on port 8080.

## Docker

This boilerplate comes with a ready-to-use Dockerfile, by default for production use :

```
docker build -t webpack-babel-boilerplate .
docker run -d -p 8080:8080 webpack-babel-boilerplate
```
