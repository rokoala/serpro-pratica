import FonteDeDados from "./FontesDeDados.js";
import fs from "fs/promises";

class FonteArquivo extends FonteDeDados {
  constructor(endereco) {
    super();
    this.endereco = endereco;
    this.index = 0;
    this.data = [];
  }
  async init() {
    try {
      const data = await fs.readFile(this.endereco, "utf8");
      this.data = data.split(" ");
    } catch (err) {
      console.log(err);
    }
  }
  possuiDado() {
    return this.index < this.data.length;
  }
  proximoDado() {
    const nextData = this.data[this.index];
    this.index++;
    return nextData;
  }
}

export default FonteArquivo;
