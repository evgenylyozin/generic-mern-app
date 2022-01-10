import express from "express"
import logger from "morgan"
import cors from "cors"
import {
  uploadImagesGridfs,
  uploadAudioGridfs,
  uploadVideoGridfs,
  noUpload,
  uploadAudio,
  uploadImages,
  uploadVideo
} from "./multer/multer-setup"

/*
 *ROUTERS
 *Data is stored in mongodb
 */
import jsonCRUDRouter from "./routes/json-crud"
// Files stored with no db
import imagesCRUDnoDBRouter from "./routes/images-crud-no-db"
import audioCRUDnoDBRouter from "./routes/audio-crud-no-db"
import videoCRUDnoDBRouter from "./routes/video-crud-no-db"
// Files stored in mongodb gridfs
import imagesCRUDGridFSRouter from "./routes/images-crud-gridfs"
import audioCRUDGridFSRouter from "./routes/audio-crud-gridfs"
import videoCRUDGridFSRouter from "./routes/video-crud-gridfs"

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/uploads", express.static("uploads"))

app.use("/api/json", noUpload.none(), jsonCRUDRouter)

app.use("/api/files/images", uploadImages.single("image"), imagesCRUDnoDBRouter)
app.use("/api/files/audio", uploadAudio.single("audio"), audioCRUDnoDBRouter)
app.use("/api/files/video", uploadVideo.single("video"), videoCRUDnoDBRouter)

app.use(
  "/api/files/gridfs/images",
  uploadImagesGridfs.single("image"),
  imagesCRUDGridFSRouter
)
app.use(
  "/api/files/gridfs/audio",
  uploadAudioGridfs.single("audio"),
  audioCRUDGridFSRouter
)
app.use(
  "/api/files/gridfs/video",
  uploadVideoGridfs.single("video"),
  videoCRUDGridFSRouter
)

app.listen("5000", () => {
  "Backend listens on port 5000"
})
