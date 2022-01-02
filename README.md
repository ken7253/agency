# Ventriloquy

"Ventriloquy" is a dictionary-based standard output library.

## docs

- [for Japanese](./README_JP.md)

## How to use

### Installing the library

### Creating a dictionary file

#### dictionary.js

```js:dictionary.js
const dictionary {
  error: {
    prefix: "ERROR", // <string>
    text: 'This is a test error message.', // <string>
  },
  log: {...},
}
export default dictionary:
```

If you want to use the preset function, you need to define a dictionary file in advance.  
There are no naming rules, but it is recommended to save the file as a separate file for ease of maintenance.

```js
// import library and dictionary.
import Speak from 'ventriloquy';
import defineMessage from './dictionary';

// Pass a dictionary file as an argument.
const speak = new Speak(defineMessage);

speak.error('TEST_ERROR_MESSAGE');
// console => [ERROR] This is a test error message.
```

## LICENSE

[MIT](./LICENSE)
