const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const resource = new Schema({
  category: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Resource = mongoose.model("resource", resource);
module.exports = Resource;
