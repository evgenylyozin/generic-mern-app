import { GridFsStorage } from "multer-gridfs-storage"

export const imagesGridfsStorage = new GridFsStorage({
  file: (req, file) =>
    new Promise((resolve) => {
      const filename = file.originalname
      const fileInfo = {
        bucketName: "imagesBucket",
        filename
      }
      resolve(fileInfo)
    }),
  url: "mongodb://root:password@mongodb:27017/"
})
