# node-window-polyfill

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

## Usage

import it in global file, or in evry file 
where the source code require window object.

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

And the version in old ES:
```javascript
require('node-window-polyfill').register();
```

## What is polyfilled?

- usage of `window` in the code or libraries
- `window.setTimeout`
- `window.clearTimeout`
- `window.WebSocket` - version from global object 
- `window.ArrayBuffer` - version from global object only
- `window.addEventListener` - empty function
- `window.navigator` - `{ onLine: true }`
- `window.isNodeJS` - to check if polyfill were aplied
- `window.localStorage` - in memory storage
- `global.WebSocket` - using [ws](https://www.npmjs.com/package/ws) if the right flag is not set
- if the above functions/properties are already set in the `global` then they will be taken into the account

## Test

To configure developlemnt environment and run the tests, 
first clone the repository:

```
git clone https://github.com/tgorka/node-window-polyfill.git
```

then (once you have yarn and node installed) install dependencies

```
yarn
```

We can run tests and we're ready for the development.

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
