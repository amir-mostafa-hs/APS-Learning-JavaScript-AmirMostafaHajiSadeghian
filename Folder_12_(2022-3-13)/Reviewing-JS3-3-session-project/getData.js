const { default: axios } = require("axios");

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

async function getData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// getData("https://jsonplaceholder.typicode.com/users");

// console.log(module.exports);

module.exports.getData = getData;

// console.log(module.exports);

const log = (text) => console.log(text);

module.exports.log = log;
