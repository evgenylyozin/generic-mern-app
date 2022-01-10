export type SimpleInputs = {
  name: string
  surname: string
}

export type AudioFiles = {
  audio: File
}

export type ImageFiles = {
  image: File
}

export type VideoFiles = {
  video: File
}

export type User = {
  _id: number
  name: string
  surname: string
}

export type GridfsFile = {
  chunkSize: number
  contentType: string
  filename: string
  length: number
  uploadDate: string
  _id: string
}
