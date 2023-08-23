import readline from "readline";

const main = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  rl.question("What's your name ?", (answer) => {
    console.log(`your answer is: ${answer}`);
    rl.close();
  });

  rl.on("line", (line) => {
    console.log(line);
  });

  rl.once("close", () => {
    console.log("end");
  });
};

main();
