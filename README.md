# Base16.js
Encoding And Decoding Text Using Only 16 Characters

# Installation
Base16.js requires installation through `npm`, so you need to install `npm` in case it's not already installed.

From your terminal, navigate to your folder project and run the following command:

`npm install base16.js`

And that's all!

# Test
To run the tests, execute `npm run test` in your project folder.

# Usage
To use the library you must `require` it in your code:

```
const Base16 = require("base16.js");
```

To encode your text content, use the `Encode()` method:

```
let encoded = Base16.Encode("Hello World!, This is a test.");
console.log(encoded); // Outputs 48656c6c6f20576f726c64212c2054686973206973206120746573742e
```

To decode an encoded text, use the `Decode()` method:

```
let decoded = Base16.Decode("48656c6c6f20576f726c64212c2054686973206973206120746573742e");
console.log(decoded); // Outputs Hello World!, This is a test.
```