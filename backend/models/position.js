const mongodb = require("mongodb");
const { getDb } = require("../utils/database");

class Position {
  constructor(title, description, startDate, endDate, id) {
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this._id = id;
  }

  createNew() {
    const db = getDb();
    return db
      .collection("positions")
      .insertOne(this)
      .then((result) => {
        console.log("[model] creating result: ", result);
        return result;
      })
      .catch((error) => {
        console.log("[model] creating error: ", error);
      });
  }

  update() {
    const db = getDb();
    return db
      .collection("positions")
      .updateOne({ _id: this._id }, { $set: this })
      .then((result) => {
        console.log("[model] updating result: ", result);
        return result;
      })
      .catch((error) => {
        console.log("[model] updating error: ", error);
      });
  }

  static getAll() {
    const db = getDb();
    return db
      .collection("positions")
      .find()
      .toArray()
      .then((positions) => {
        console.log("positions: ", positions);
        return positions;
      })
      .catch(() => {
        console.log("error: ", error);
      });
  }

  static findById(positionId) {
    const db = getDb();
    return db
      .collection("positions")
      .find({ _id: new mongodb.ObjectId(positionId) })
      .next()
      .then((position) => {
        console.log("position: ", position);
      })
      .catch(() => {
        console.log("error: ", error);
      });
  }

  static delete(positionId) {
    const db = getDb();
    return db
      .collection("positions")
      .delete({ _id: new mongodb.ObjectId(positionId) })
      .next()
      .then((position) => {
        console.log("position: ", position);
      })
      .catch(() => {
        console.log("error: ", error);
      });
  }
}

module.exports = Position;
