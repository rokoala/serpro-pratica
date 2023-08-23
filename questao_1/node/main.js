import FonteArquivo from "./FonteArquivo.js";

const main = async () => {
  const fonteArquivo = new FonteArquivo("db.txt");
  await fonteArquivo.init();
  while (fonteArquivo.possuiDado()) {
    console.log(fonteArquivo.proximoDado());
  }
};

main();
