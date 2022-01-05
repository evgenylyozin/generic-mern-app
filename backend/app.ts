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

import jsonCRUDRouter from "./routes/json-crud"
import imagesCRUDnoDBRouter from "./routes/images-crud-no-db"

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/json", noUpload.none(), jsonCRUDRouter)
app.use("/api/files/images", uploadImages.single("image"), imagesCRUDnoDBRouter)

app.listen("5000", () => {
  "Backend listens on port 5000"
})
