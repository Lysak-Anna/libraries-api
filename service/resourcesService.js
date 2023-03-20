const Resource = require("./schemas/resources");

const getResources = async ({ page, limit }) => {
  return Resource.find()
    .select({ __v: 0 })
    .skip(page * limit - limit)
    .limit(limit);
};
const getCategories = async () => {
  const categories = await Resource.find().select("category -_id");
  return (uniqueCategories = [
    ...new Set(categories.map((item) => item.category)),
  ]);
};
const createResource = async ({ category, label, description }) => {
  return Resource.create({ category, label, description });
};
module.exports = {
  getResources,
  getCategories,
  createResource,
};
