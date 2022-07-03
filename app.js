const argv = require("./config/yargs.js")
const { saveFile } = require("./helpers/multiply.js");

require('colors');

console.clear();

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 0] = arg3.split('=');

saveFile(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.zebra, "creado"))
  .catch((err) => console.log(err));
