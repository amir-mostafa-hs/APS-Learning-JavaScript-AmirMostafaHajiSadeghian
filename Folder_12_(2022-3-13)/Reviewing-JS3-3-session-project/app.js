const { getData } = require("./getData");
const fileSystem = require("fs");

// data.getData("https://jsonplaceholder.typicode.com/users");

// getData("https://jsonplaceholder.typicode.com/users");

async function createJsonFile(jsonData) {
  try {
    fileSystem.mkdirSync("dataFolder");
    fileSystem.writeFileSync("dataFolder/data.json", JSON.stringify(jsonData));
  } catch (error) {
    console.error(error.message);
  }
}

getData("https://jsonplaceholder.typicode.com/users").then(data => createJsonFile(data))