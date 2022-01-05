import {
  SERVER_ERROR,
  OK,
  CREATED,
  NOT_FOUND,
  BAD_REQUEST
} from "../utils/status-codes"
import { Request, Response } from "express"
import * as fs from "fs/promises"
import path from "path"
import { updateTheFile } from "../utils/updateFileNoDB"

export const getAudio = async (req: Request, res: Response) => {
  try {
    const files = await fs.readdir(path.resolve(__dirname, "../uploads/audio"))
    const pathsArray = files.map((file) => `uploads/audio/${file}`)
    return res.status(OK).json(pathsArray)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}

export const postAudio = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(BAD_REQUEST).json({
      code: BAD_REQUEST,
      message: "The file you tried to upload is not in mp3 or wav format"
    })
  }
  return res.status(CREATED).json(req.file.path)
}

export const deleteAudio = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    let files = await fs.readdir(path.resolve(__dirname, "../uploads/audio"))
    const fileToDelete = files.find((file) => file === id)
    if (fileToDelete) {
      await fs.rm(path.resolve(__dirname, "../uploads/audio", fileToDelete))
      files = await fs.readdir(path.resolve(__dirname, "../uploads/audio"))
      return res.status(OK).json(files)
    }
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The audio file you are trying to delete is not found"
    })
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: "Something unexpected happened"
    })
  }
}

export const putAudio = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(BAD_REQUEST).json({
      code: BAD_REQUEST,
      message: "The file you tried to upload is not in mp3 or wav format"
    })
  }
  const { id } = req.params
  try {
    const pathToUpdatedAudio = await updateTheFile("audio", req.file.path, id)
    if (pathToUpdatedAudio) {
      return res.status(OK).json(pathToUpdatedAudio)
    }
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The audio file you are trying to update is not found"
    })
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: "Something unexpected happened"
    })
  }
}
