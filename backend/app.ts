import express from "express"
import logger from "morgan"

// To handle multipart/form-data
import multer from "multer"
// To handle form-data with only fields with string values
const noUpload = multer()

// To handle image uploads
import {
  imagesFileFilter,
  imagesStorage
} from "./multer-storages/images-storage"

const uploadImages = multer({
  fileFilter: imagesFileFilter,
  storage: imagesStorage
})

// To handle audio uploads
import { audioFileFilter, audioStorage } from "./multer-storages/audio-storage"

const uploadAudio = multer({
  fileFilter: audioFileFilter,
  storage: audioStorage
})

// To handle video uploads
import { videoFileFilter, videoStorage } from "./multer-storages/video-storage"

const uploadVideo = multer({
  fileFilter: videoFileFilter,
  storage: videoStorage
})

import jsonCRUDRouter from "./routes/json-crud"
import imagesCRUDnoDBRouter from "./routes/images-crud-no-db"
import audioCRUDnoDBRouter from "./routes/audio-crud-no-db"
import videoCRUDnoDBRouter from "./routes/video-crud-no-db"

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/json", noUpload.none(), jsonCRUDRouter)
app.use("/api/files/images", uploadImages.single("image"), imagesCRUDnoDBRouter)
app.use("/api/files/audio", uploadAudio.single("audio"), audioCRUDnoDBRouter)
app.use("/api/files/video", uploadVideo.single("video"), videoCRUDnoDBRouter)

app.listen("5000", () => {
  "Backend listens on port 5000"
})
