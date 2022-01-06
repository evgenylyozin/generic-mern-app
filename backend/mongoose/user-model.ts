import { mongoose } from "./mongoose-connect"

const userSchema = new mongoose.Schema({
  name: String,
  surname: String
})

export const User = mongoose.model("User", userSchema)
