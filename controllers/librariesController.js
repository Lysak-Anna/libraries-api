const {
  getLibraries,
  createLibrary,
  getCategories,
} = require("../service/librariesService");

const getLibrariesController = async (req, res) => {
  let { page = 1, limit = 50 } = req.query;
  limit = +limit > 50 ? 50 : +limit;
  const libraries = await getLibraries({ page, limit });
  res.json({
    status: "success",
    code: 200,
    data: {
      libraries,
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
const addLibraryController = async (req, res) => {
  const { category, label, description } = req.body;
  const library = await createLibrary({ category, label, description });
  res.json({
    code: 201,
    message: "Created",
    data: {
      library,
    },
  });
};

module.exports = {
  getLibrariesController,
  getCategoriesController,
  addLibraryController,
};
