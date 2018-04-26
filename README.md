# node-window-polyfill

[![Version npm](https://img.shields.io/npm/v/node-window-polyfill.svg)](https://www.npmjs.com/package/node-window-polyfill)

Polyfill for the problem `window is not defined` in node.js.
It's inserting window object on globals 
and inputing all needed sub-elements 
with requiring web sockets dependency.

## Installation

Yarn
```
yarn add node-window-polyfill
```

Npm
```
npm install node-window-polyfill
```

### Requirements 
Minimum ES5.

To use it in different environment it's required to clone and build it with the proper flag.

## Usage

Import it in global file, or in every file 
where the source code requires the `window` object.

```typescript
import nodeWindowPolyfill from "node-window-polyfill";

nodeWindowPolyfill.register();
```

For shorter import that will call register directrly
```typescript
import "node-window-polyfill/register";
```

If you don't want to import 'ws' module and just create empty objects:
```typescript
import nodeWindowPolyfill from "node-window-polyfill";

nodeWindowPolyfill.register(false);
```

And the version previous ES versions:
```javascript
require('node-window-polyfill').register();
```

## What is polyfilled?

- usage of `window` in the code or libraries
- `window.setTimeout` - default `setTimeout` node function
- `window.clearTimeout` - default `clearTimeout` node function
- `window.WebSocket` - version from global object 
- `window.ArrayBuffer` - version from global object only
- `window.addEventListener` - empty void function
- `window.navigator` - `{ onLine: true }`
- `window.isNodeJS` - to check if polyfills were aplied
- `window.localStorage` - in memory storage
- `global.WebSocket` - using [ws](https://www.npmjs.com/package/ws) if the right flag is not set
- if the above functions/properties are already set in the `global` object then they will be taken into the account

## Configure

To configure development environment and run the tests, 
first clone the repository:

```
git clone https://github.com/tgorka/node-window-polyfill.git
```

then (once you have `yarn` and node installed) install dependencies

```
yarn
```

## Build

To build the distribution and types

```
yarn build
```

The distribution is in the `dist` folder and types in the `types` folder.

To change defauld ES standard use `--target` flag. Ex.:
```
yarn build -target es3
```

## Test

After configuring we can run tests.

```
yarn test
```

We can use debug information logging with setting up env variable

```
DEBUG=nodeWindowPolyfill-* yarn test
```

## Author
Tomasz Górka <http://tomasz.gorka.org.pl>

## License
&copy; 2018 Tomasz Górka

MIT licensed.
