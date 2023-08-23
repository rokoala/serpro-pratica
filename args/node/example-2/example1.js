const main = () => {
  const data = [];
  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i];
    data.push(arg);
  }
  console.log(data);
};

main();
