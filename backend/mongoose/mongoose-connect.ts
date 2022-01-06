import mongoose from "mongoose"
import { GridFSBucket } from "mongodb"
const FIRST_IN_ARRAY = 0

mongoose
  .connect("mongodb://root:password@mongodb:27017/")
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => {
    console.log("Connection to mongodb failed:", error)
  })

// Setting up gridfs buckets
let imagesBucket: GridFSBucket
let audioBucket: GridFSBucket
let videoBucket: GridFSBucket

mongoose.connection.on("connected", () => {
  const { db } = mongoose.connections[FIRST_IN_ARRAY]
  imagesBucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "imagesBucket"
  })
  audioBucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "audioBucket"
  })
  videoBucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "videoBucket"
  })
})

export { mongoose, imagesBucket, audioBucket, videoBucket }
