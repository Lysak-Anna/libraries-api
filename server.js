const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const uriDb = process.env.DB_HOST;

async function startServer() {
  try {
    await mongoose.connect(uriDb);
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (err) {
    console.log(`Error connecting to database: ${err.message}`);
    process.exit(1);
  }
}

startServer();
