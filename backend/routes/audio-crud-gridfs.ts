import express from "express"
import {
  deleteAudio,
  getAudio,
  postAudio,
  getOneAudio
} from "../controllers/audio-crud-gridfs"

const router = express.Router()

router.get("/", getAudio)

router.get("/:id", getOneAudio)

router.post("/", postAudio)

router.delete("/:id", deleteAudio)

export default router
