const fs = require("fs");
const colors = require('colors');

const mult = (base, hasta) => {
  let out = " " ;
  let console = "";

  for (let i = 1; i <= hasta; i++) {
    console += `${base} ${colors.random('x')} ${i} = ${colors.strikethrough(base * i)}\n`;
    out += `${base} x ${i} = ${base * i}\n`;
  }

  return {out, console};
};

const saveFile = async (base = 5, listar, hasta = 10) => {
  if (listar) {
    console.log('======================'.america);
    console.log(`   Tabla del: `, colors.magenta.underline(base));
    console.log("======================".random);
  }

  try {
    const result = mult(base, hasta);
    if (listar) {
      console.log(result.console);
    }

    fs.writeFileSync(`./out/tabla-${base}.txt`, result.out);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw err;
  }
};

module.exports = { saveFile };
