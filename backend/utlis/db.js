import mongoose from "mongoose";

const dbCon = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);

    // VERY IMPORTANT in Kubernetes
    process.exit(1);
  }
};


export default dbCon;