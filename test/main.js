const Base16 = require("../lib/Base16"); // Requiring the compiled ES5-compliant version 

let encoded = Base16.Encode("Hello World!, This is a test.");
console.log(encoded);
let decoded = Base16.Decode(encoded);
console.log(decoded);