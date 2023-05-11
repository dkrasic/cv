const positionService = require("../services/positionService");

const getAllPositions = (req, res) => {
  positionService
    .getAllPositions()
    .then((allPositions) => {
      console.log("[controller] all positions: ", allPositions);
      res.send({ status: "OK", data: allPositions });
    })
    .catch((error) => {
      console.log("[controller] error: ", error);
    });
};

const getOnePosition = (req, res) => {
  positionService.getOnePosition().then((positions) => {
    res.send("Get an existing position");
  });
};

const createNewPosition = (req, res) => {
  const { title, description, startDate, endDate } = req.body;
  if (!title || description === undefined || !startDate || !endDate) return;

  positionService
    .createNewPosition({
      title,
      description,
      startDate,
      endDate,
    })
    .then((newPosition) => {
      console.log("[controller] new position: ", newPosition);
      res.status(201).send({ status: "OK", data: newPosition });
    })
    .catch((error) => {
      console.log("[controller] error: ", error);
    });
};

const updateOnePosition = (req, res) => {
  if (!req.params.positionId) res.send("ID is not defined.");

  positionService
    .updateOnePosition(req)
    .then((updatedPosition) => {
      console.log("[controller] updated position: ", updatedPosition);
      res.status(201).send({ status: "OK", data: updatedPosition });
    })
    .catch((error) => {
      console.log("[controller] error: ", error);
    });
};

const deleteOnePosition = (req, res) => {
  positionService.deleteOnePosition();
  res.send("Delete an existing position");
};

module.exports = {
  getAllPositions,
  getOnePosition,
  createNewPosition,
  updateOnePosition,
  deleteOnePosition,
};
