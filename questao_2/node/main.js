import readline from "node:readline";
import isPalindrome from "./palindrome.js";

const readInput = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Qual a palavra?\n", (data) => {
      rl.close();
      resolve(data);
    });

    rl.on("line", (data) => {
      console.log(`line: ${data}`);
    });

    rl.once("close", () => {
      console.log("closed");
    });
  });
};

const main = async () => {
  console.log(isPalindrome(await readInput()));
};

main();
