import {
  SERVER_ERROR,
  OK,
  CREATED,
  NOT_FOUND,
  BAD_REQUEST
} from "../utils/status-codes"
import { Request, Response } from "express"
import { videoBucket, mongoose } from "../mongoose/mongoose-connect"
import { ZERO } from "../utils/common-constants"

export const getVideo = async (req: Request, res: Response) => {
  try {
    const files = await videoBucket.find({}).toArray()
    return res.status(OK).json(files)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}

export const getOneVideo = async (req: Request, res: Response) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id)
    const file = await videoBucket.find({ _id: id }).toArray()
    if (file.length > ZERO) {
      await videoBucket.openDownloadStream(id).pipe(res)
      return res.status(OK)
    }
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The video file you are trying to fetch is not found"
    })
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
      message: "The file you tried to upload is not in avi or mpeg format"
    })
  }
  return res.status(CREATED).json(req.file)
}

export const deleteVideo = async (req: Request, res: Response) => {
  const id = new mongoose.Types.ObjectId(req.params.id)
  try {
    const file = await videoBucket.find({ _id: id }).toArray()
    if (file.length > ZERO) {
      await videoBucket.delete(id)
      return res.status(OK).json(`Video file under id: ${id} was deleted.`)
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
