import * as yup from "yup"

export const SimpleSchema = yup
  .object({
    name: yup.string().max(50).required(),
    surname: yup.string().max(50).required()
  })
  .required()

// To validate images upon upload
const ValidImageTypes = ["image/jpg", "image/jpeg", "image/png"]
export const ImageValidationSchema = yup
  .object()
  .shape({
    image: yup
      .mixed()
      .required("Provide a file")
      .test(
        "fileSize",
        "Image is too big (less than 50 mb is required)",
        (value: File[]) => value && value[0].size <= 50000000
      )
      .test(
        "fileType",
        "Image should be in jpg or png format",
        (value: File[]) => value && ValidImageTypes.includes(value[0].type)
      )
  })
  .required()

// To validate audio upon upload
const ValidAudioTypes = ["audio/mpeg", "audio/wave"]
export const AudioValidationSchema = yup
  .object()
  .shape({
    audio: yup
      .mixed()
      .required("Provide a file")
      .test(
        "fileSize",
        "Audio file is too big (less than 50 mb is required)",
        (value: File[]) => value && value[0].size <= 50000000
      )
      .test(
        "fileType",
        "Audio file should be in mp3 or wav format",
        (value: File[]) => value && ValidAudioTypes.includes(value[0].type)
      )
  })
  .required()

// To validate video upon upload
const ValidVideoTypes = ["video/mpeg", "video/mp4"]
export const VideoValidationSchema = yup
  .object()
  .shape({
    video: yup
      .mixed()
      .required("Provide a file")
      .test(
        "fileSize",
        "Video is too big (less than 50 mb is required)",
        (value: File[]) => value && value[0].size <= 50000000
      )
      .test(
        "fileType",
        "Video should be in mp4 format",
        (value: File[]) => value && ValidVideoTypes.includes(value[0].type)
      )
  })
  .required()
