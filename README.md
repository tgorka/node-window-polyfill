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

## Author
Tomasz Górka <http://tomasz.gorka.org.pl>

## License
&copy; 2018 Tomasz Górka

MIT licensed.
