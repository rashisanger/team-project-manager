const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to MongoDB using URI from .env
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${ conn.connection.host } `);
  } catch (error) {
    console.error("MongoDB Connection Failed:");
    console.error(error.message);

    // Stop server if DB connection fails
    process.exit(1);
  }
};

module.exports = connectDB;

