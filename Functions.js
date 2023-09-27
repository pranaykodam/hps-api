const fs = require("fs");

const filterValve = async (id) => {
  let rawdata = await fs.readFileSync("hps-data.json");
  let data = await JSON.parse(rawdata);
  let newData = await data.map((item) => {
    if (id === item.id) {
      console.log("id", id);
      item.btnStatus = !item.btnStatus;
    }
    return item;
  });
  console.log("newData", newData);
  await fs.writeFileSync("hps-data.json", JSON.stringify(newData));
};

module.exports = { filterValve };
