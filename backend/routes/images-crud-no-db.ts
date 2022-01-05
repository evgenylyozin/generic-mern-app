import express from "express"
import {
  deleteImage,
  getImages,
  postImage,
  putImage
} from "../controllers/images-crud-no-db"

const router = express.Router()

router.get("/", getImages)

router.post("/", postImage)

router.delete("/:id", deleteImage)

router.put("/:id", putImage)

export default router
