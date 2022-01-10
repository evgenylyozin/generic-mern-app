import multer from "multer"
import path from "path"
import { Request } from "express"
import { FIFTY_MB } from "../../utils/common-constants"

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
  if (
    file.mimetype === "audio/mpeg" ||
    file.mimetype === "audio/wave" ||
    file.size > FIFTY_MB
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
