const Library = require("./schemas/libraries");

const getLibraries = async ({ page, limit }) => {
  return Library.find()
    .select({ __v: 0 })
    .skip(page * limit - limit)
    .limit(limit);
};
const getCategories = async () => {
  const categories = await Library.find().select("category -_id");
  return (uniqueCategories = [
    ...new Set(categories.map((item) => item.category)),
  ]);
};
const createLibrary = async ({ category, label, description }) => {
  return Library.create({ category, label, description });
};
module.exports = {
  getLibraries,
  getCategories,
  createLibrary,
};
