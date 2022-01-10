import multer from "multer"
import path from "path"
import { Request } from "express"
import { TWO_HUNDRED_MB } from "../../utils/common-constants"

export const videoStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/video/")
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase()
    callback(null, `${file.fieldname}_${Date.now()}${extension}`)
  }
})

export const videoFileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (
    file.mimetype === "video/x-msvideo" ||
    file.mimetype === "video/mpeg" ||
    file.mimetype === "video/mp4" ||
    file.size > TWO_HUNDRED_MB
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
