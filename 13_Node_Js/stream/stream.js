const fs = require("fs");

const reader = fs.createReadStream("data.txt", { encoding: "utf-8" });
const writer = fs.createWriteStream("output.txt");

reader.on("data", (chunk) => {
  console.log("Recevid chunk of data");
  writer.write(chunk);
});


