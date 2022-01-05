import multer from "multer"
import path from "path"
import { Request } from "express"

export const audioStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/audio/")
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase()
    callback(null, `${file.fieldname}_${Date.now()}${extension}`)
  }
})

export const audioFileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype === "audio/mpeg" || file.mimetype === "audio/wave") {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
