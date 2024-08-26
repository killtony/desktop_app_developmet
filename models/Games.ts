import mongoose, { Schema, model } from "mongoose";

export interface GamesDocument {
  _id: string;
 user_id:String;
 tilt_score:String;
 game_time:String;
 game_performance:String;
 servey:String;
 roles:String;
}

const GamesSchema = new Schema < GamesDocument > ({
  user_id: {
    type: String,
    required: true
  },
  tilt_score: {
    type: String,
    required: true
  },
  game_time: {
    type: String,
    required: true
  },
  game_performance: {
    type: String,
    required: true
  },
  servey:{
    type:String,
    required:true
  },
  roles:{
    type:String,
    required:true
  }
},
{
  timestamps: true,
}
);

const Games = mongoose.models?.Games || model < GamesDocument > ('Games', GamesSchema);
export default Games;
