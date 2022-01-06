// To handle multipart/form-data
import multer from "multer"

// To handle form-data with only fields with string values
export const noUpload = multer()

// To handle image uploads
import {
  imagesFileFilter,
  imagesStorage
} from "./multer-storages/images-storage"

export const uploadImages = multer({
  fileFilter: imagesFileFilter,
  storage: imagesStorage
})

// To handle audio uploads
import { audioFileFilter, audioStorage } from "./multer-storages/audio-storage"

export const uploadAudio = multer({
  fileFilter: audioFileFilter,
  storage: audioStorage
})

// To handle video uploads
import { videoFileFilter, videoStorage } from "./multer-storages/video-storage"

export const uploadVideo = multer({
  fileFilter: videoFileFilter,
  storage: videoStorage
})

// To save images in mongodb gridfs buckets
import { imagesGridfsStorage } from "./multer-storages/images-gridfs-storage"

export const uploadImagesGridfs = multer({
  fileFilter: imagesFileFilter,
  storage: imagesGridfsStorage
})

// To save audio in mongodb gridfs buckets
import { audioGridfsStorage } from "./multer-storages/audio-gridfs-storage"

export const uploadAudioGridfs = multer({
  fileFilter: audioFileFilter,
  storage: audioGridfsStorage
})
// To save video in mongodb gridfs buckets
import { videoGridfsStorage } from "./multer-storages/video-gridfs-storage"

export const uploadVideoGridfs = multer({
  fileFilter: videoFileFilter,
  storage: videoGridfsStorage
})
