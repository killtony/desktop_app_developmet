"use server"
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { json } from "stream/consumers";

export const register = async (values: any) => {
  const { email, password, name } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: 'Email already exists!'
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const tilt_scores = 0;
    const logs = "";
    const user = new User({
      name,
      email,
      tilt_scores:0,
      logs:"asdf",
      password: hashedPassword,
    });
    console.log(user);
    
    await user.save();

  } catch (e) {
    console.log(e);
  }
}
export const get_user = async (values: any) => {
  const { email} = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    return JSON.parse(JSON.stringify(userFound))
  } catch (e) {
    console.log(e);
  }
}