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

export const getVideo = async (req: Request, res: Response) => {
  try {
    const files = await fs.readdir(path.resolve(__dirname, "../uploads/video"))
    const pathsArray = files.map((file) => `uploads/video/${file}`)
    return res.status(OK).json(pathsArray)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}

export const postVideo = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(BAD_REQUEST).json({
      code: BAD_REQUEST,
      message: "The file you tried to upload is not in mpeg or avi format"
    })
  }
  return res.status(CREATED).json(req.file.path)
}

export const deleteVideo = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const files = await fs.readdir(path.resolve(__dirname, "../uploads/video"))
    const fileToDelete = files.find((file) => file === id)
    if (fileToDelete) {
      await fs.rm(path.resolve(__dirname, "../uploads/video", fileToDelete))
      return res.status(OK).json(fileToDelete)
    }
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The video file you are trying to delete is not found"
    })
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}

export const putVideo = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(BAD_REQUEST).json({
      code: BAD_REQUEST,
      message: "The file you tried to upload is not in mpeg or avi format"
    })
  }
  const { id } = req.params
  try {
    const pathToUpdatedVideo = await updateTheFile("video", req.file.path, id)
    if (pathToUpdatedVideo) {
      return res.status(OK).json(pathToUpdatedVideo)
    }
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The audio file you are trying to update is not found"
    })
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}
