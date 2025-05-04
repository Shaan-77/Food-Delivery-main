import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, { dbName: "food-delivery" })
    .then(() => console.log("DB Connected"));
};
