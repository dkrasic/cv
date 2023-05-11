const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db; // has underscore because it is private and used only in this file

const mongoConnect = (callback) => {
  const username = "danilokrasic"; // set it as an env variable
  const password = "danilokrasic1992"; // set it as an env variable
  MongoClient.connect(
    `mongodb+srv://${username}:${password}@cvcluster1.h1rar60.mongodb.net/?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected to the DB successfully!");
      _db = client.db();
      callback();
    })
    .catch((error) => {
      console.log("Error when connecting to the DB: ", error);
      throw error;
    });
};

const getDb = () => {
  if (_db) return _db;
  throw "No database found";
};

module.exports = {
  mongoConnect,
  getDb,
};
