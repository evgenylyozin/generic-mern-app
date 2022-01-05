import express from "express"
import {
  deleteAudio,
  getAudio,
  postAudio,
  putAudio
} from "../controllers/audio-crud-no-db-ts"

const router = express.Router()

router.get("/", getAudio)

router.post("/", postAudio)

router.delete("/:id", deleteAudio)

router.put("/:id", putAudio)

export default router
