import express from "express"
import {
  deleteVideo,
  getVideo,
  postVideo,
  putVideo
} from "../controllers/video-crud-no-db-ts"

const router = express.Router()

router.get("/", getVideo)

router.post("/", postVideo)

router.delete("/:id", deleteVideo)

router.put("/:id", putVideo)

export default router
