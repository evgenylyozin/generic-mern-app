import express from "express"
import {
  deleteVideo,
  getVideo,
  postVideo,
  getOneVideo
} from "../controllers/video-crud-gridfs"

const router = express.Router()

router.get("/", getVideo)

router.get("/:id", getOneVideo)

router.post("/", postVideo)

router.delete("/:id", deleteVideo)

export default router
