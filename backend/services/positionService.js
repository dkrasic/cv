const mongodb = require("mongodb");

const Position = require("../models/position");

const getAllPositions = () => {
  const allPositions = Position.getAll();
  console.log("[service] allPositions: ", allPositions);
  return allPositions;
};

const getOnePosition = () => {
  return;
};

const createNewPosition = ({ title, description, startDate, endDate }) => {
  const createdPosition = new Position(title, description, startDate, endDate);
  console.log("[service] new position: ", createdPosition);
  return createdPosition.createNew();
};

const updateOnePosition = (req) => {
  const { title, description, startDate, endDate } = req.body;
  const id = req.params.positionId;

  const updatedPosition = new Position(
    title,
    description,
    startDate,
    endDate,
    new mongodb.ObjectId(id)
  );
  console.log("[service] updated position: ", updatedPosition);
  return updatedPosition.update();
};

const deleteOnePosition = () => {
  return;
};

module.exports = {
  getAllPositions,
  getOnePosition,
  createNewPosition,
  updateOnePosition,
  deleteOnePosition,
};
