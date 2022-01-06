import express from "express"
import {
  deleteImage,
  getImages,
  postImage,
  getOneImage
} from "../controllers/images-crud-gridfs"

const router = express.Router()

router.get("/", getImages)

router.get("/:id", getOneImage)

router.post("/", postImage)

router.delete("/:id", deleteImage)

export default router
