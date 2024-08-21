import mongoose, { Schema, model } from "mongoose";

export interface GamesDocument {
  _id: string;
 user_id:String;
 tilt_score:String;
 game_time:String;
 game_performance:String;

}

const UserSchema = new Schema < GamesDocument > ({
  email: {
    type: String,
    unique: true,
    // required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email is invalid",
    ],
  },
  password: {
    type: String,
    // required: true
  },
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  tilt_scores: {
    type: Number,
    // required: true
  },
  logs: {
    type: String,
    // required: true
  }
},
{
  timestamps: true,
}
);

const User = mongoose.models?.User || model < GamesDocument > ('User', UserSchema);
export default User;
