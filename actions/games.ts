"use server"
import { connectDB } from "@/lib/mongodb";
import Games from "@/models/Games";
import bcrypt from "bcryptjs";
import { json } from "stream/consumers";

export const game_result_r = async (values: any) => {
  const { user_id, tilt_score, game_time, game_performance, servey } = values;
  console.log(servey);
  
  try {
    await connectDB();
    const games = new Games({
        user_id:user_id,
        tilt_score:tilt_score,
        game_time:game_time,
        game_performance:game_performance,
        servey:servey
    });
    
    await games.save();

  } catch (e) {
    console.log(e);
  }
}
