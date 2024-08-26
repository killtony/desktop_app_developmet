"use server"
import { connectDB } from "@/lib/mongodb";
import Games from "@/models/Games";
import bcrypt from "bcryptjs";
import { json } from "stream/consumers";

export const game_result_r = async (values: any) => {
  const { user_id, tilt_score, game_time, game_performance, servey,roles } = values;
  console.log(servey);
  
  try {
    await connectDB();
    const games = new Games({
        user_id:user_id,
        tilt_score:tilt_score,
        game_time:game_time,
        game_performance:game_performance,
        servey:servey,
        roles:roles,
    });
    
    await games.save();

  } catch (e) {
    console.log(e);
  }
}
export const get_servey_history = async (user_id:any, count:number) =>{
  try {
    await connectDB();
    const serveydata= await Games.find({ user_id:user_id}).sort({ $natural : -1 }).limit(count);
    return JSON.parse(JSON.stringify(serveydata))

  } catch (e) {
    console.log(e);
  }
}
export const get_average_score = async (user_id:any, count:number) =>{
  try {
    await connectDB();
    const serveydata= await Games.find({ user_id:user_id},{"tilt_score": true }).sort({ $natural : -1 }).limit(count);
    // const serveydata= await Games.find({ user_id:user_id}).sort({ $natural : -1 }).limit(count);
    const scorelist=JSON.parse(JSON.stringify(serveydata))
    let averagescore=0;
    for (const item in scorelist){
      // console.log(scorelist[item].tilt_score);
      averagescore=averagescore+Number(scorelist[item].tilt_score)
    }
    console.log(averagescore/count);
    
    return averagescore/count

  } catch (e) {
    console.log(e);
  }
}
