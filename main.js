var Base16 = null;
if (process.versions.node >= "6.4.0") {
    Base16 = require("./src/Base16");
}
else {
    Base16 = require("./lib/Base16");
}
module.exports = Base16;