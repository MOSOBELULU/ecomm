import mongoose from "mongoose";

// console.log("DB_URI from env:", process.env.DB_URI)

// const MONGO_URI = process.env.DB_URI;

// if (!MONGO_URI) {
//   throw new Error(" MongoDB connection string is missing in environment variables");
// }

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.connect(process.env.DB_URI);

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Reduced timeout to 5s
    });

    console.log(" MongoDB Connected Successfully");
  } catch (error) {
    console.error(" MongoDB Connection Error:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default dbConnect;
