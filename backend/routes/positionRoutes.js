const express = require("express");

const positionController = require("../controllers/positionController");

const router = express.Router();

router.get("/", positionController.getAllPositions);

router.get("/:positionId", positionController.getOnePosition);

router.post("/", positionController.createNewPosition);

router.patch("/:positionId", positionController.updateOnePosition);

router.delete("/:positionId", positionController.deleteOnePosition);

module.exports = router;
