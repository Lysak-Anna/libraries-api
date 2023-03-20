const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middlewares/validateBody");
const {
  getLibrariesController,
  getCategoriesController,
  addLibraryController,
} = require("../../controllers/librariesController");
const controllerWrapper = require("../../helpers/controllerWrapper");
router.get("/", controllerWrapper(getLibrariesController));
router.get("/categories", controllerWrapper(getCategoriesController));
router.post("/", validateBody, controllerWrapper(addLibraryController));

module.exports = router;
