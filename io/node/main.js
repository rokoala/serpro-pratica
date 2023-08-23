import fs from "fs";
import fs2 from "fs/promises";

const readFile = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    //console.log(data)
  });
};

const writeFile = (path, data) => {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

const main = async () => {
  readFile("input.txt");

  try {
    writeFile("output.txt", await fs2.readFile("input.txt", "utf8"));
    await fs2.writeFile("output2.txt", await fs2.readFile("input.txt", "utf8"));
  } catch (err) {
    console.error(err);
  }
};
main();
