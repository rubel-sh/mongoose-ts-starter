import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// Schema
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    nationality: { type: String, required: false },
});

// Model
const User = model<IUser>("User", userSchema);

export default User;
