import dotenv from "dotenv";
dotenv.config(".env"); // Load .env
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: "food-delivery" });
    console.log("MongoDB Connected");

    const existingAdmin = await userModel.findOne({
      email: "admin@gmail.com",
    });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
    } else {
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashedPassword = await bcrypt.hash("admin123", salt);

      const adminUser = new userModel({
        name: "admin",
        email: "admin@gmail.com",
        password: hashedPassword,
        role: "admin",
      });

      await adminUser.save();
      console.log("✅ Admin created: admin@example.com / admin123");
    }

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    mongoose.connection.close();
  }
};

createAdmin();
