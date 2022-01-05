import mongoose from "mongoose"

mongoose
  .connect("mongodb://root:password@mongodb:27017/")
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => {
    console.log("Connection to mongodb failed:", error)
  })

export default mongoose
