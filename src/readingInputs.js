const fs = require("fs");

// creating a function to read the txt file and convert it into and array
const readfileExportArray = async (file_name) => {
  let _filepath = `${__dirname}\\${file_name}`;
  _filepath = _filepath.replace("src", "test");
  fs.readFile(_filepath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = data.split(`\n`);
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].replace("\r", "");
    }
    console.log(JSON.stringify(data));
    return data;
  });
};

readfileExportArray("lowestStartingStairs2.txt");

module.exports = {
  readfileExportArray,
};
