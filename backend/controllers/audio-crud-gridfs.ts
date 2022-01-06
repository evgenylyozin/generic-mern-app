import {
  SERVER_ERROR,
  OK,
  CREATED,
  NOT_FOUND,
  BAD_REQUEST
} from "../utils/status-codes"
import { Request, Response } from "express"
import { audioBucket, mongoose } from "../mongoose/mongoose-connect"
import { ZERO } from "../utils/common-constants"

export const getAudio = async (req: Request, res: Response) => {
  try {
    const files = await audioBucket.find({}).toArray()
    return res.status(OK).json(files)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}

export const getOneAudio = async (req: Request, res: Response) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id)
    const file = await audioBucket.find({ _id: id }).toArray()
    if (file.length > ZERO) {
      await audioBucket.openDownloadStream(id).pipe(res)
      return res.status(OK)
    }
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The audio file you are trying to fetch is not found"
    })
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
  return res.status(CREATED).json(req.file)
}

export const deleteAudio = async (req: Request, res: Response) => {
  const id = new mongoose.Types.ObjectId(req.params.id)
  try {
    const file = await audioBucket.find({ _id: id }).toArray()
    if (file.length > ZERO) {
      await audioBucket.delete(id)
      return res.status(OK).json(`Audio file under id: ${id} was deleted.`)
    }
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The audio file you are trying to delete is not found"
    })
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}
