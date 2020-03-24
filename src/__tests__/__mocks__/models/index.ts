import * as mongoose from "mongoose";
import { UserSchema } from "../../../models/userModel";

export const User = mongoose.model("User", UserSchema);
