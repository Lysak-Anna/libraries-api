const {
  getResources,
  createResource,
  getCategories,
} = require("../service/resourcesService");

const getResourcesController = async (req, res) => {
  let { page = 1, limit = 50 } = req.query;
  limit = +limit > 50 ? 50 : +limit;
  const resources = await getResources({ page, limit });
  res.json({
    status: "success",
    code: 200,
    data: {
      resources,
    },
  });
};
const getCategoriesController = async (req, res) => {
  const categories = await getCategories();
  res.json({
    status: "success",
    code: 200,
    data: {
      categories,
    },
  });
};
const addResourceController = async (req, res) => {
  const { category, label, description } = req.body;
  const resource = await createResource({ category, label, description });
  res.json({
    code: 201,
    message: "Created",
    data: {
      resource,
    },
  });
};

module.exports = {
  getResourcesController,
  getCategoriesController,
  addResourceController,
};
