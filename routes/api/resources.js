const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middlewares/validateBody");
const {
  getResourcesController,
  getCategoriesController,
  addResourceController,
} = require("../../controllers/resourcesController");
const controllerWrapper = require("../../helpers/controllerWrapper");
router.get("/", controllerWrapper(getResourcesController));
router.get("/categories", controllerWrapper(getCategoriesController));
router.post("/", validateBody, controllerWrapper(addResourceController));

module.exports = router;
