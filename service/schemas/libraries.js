const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const library = new Schema({
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

const Library = mongoose.model("library", library);
module.exports = Library;
