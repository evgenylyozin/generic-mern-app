import { SERVER_ERROR, OK, CREATED, NOT_FOUND } from "../utils/status-codes"
import { Request, Response } from "express"
import { User } from "../mongoose/user-model"

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find({})
    return res.status(OK).json(allUsers)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}

export const postUser = async (req: Request, res: Response) => {
  try {
    const newUser = new User({ ...req.body })
    const savedUser = await newUser.save()
    return res.status(CREATED).json(savedUser)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const userToDelete = await User.findOne({ _id: id })
    // Just to keep the logic complete
    if (userToDelete) {
      await User.findOneAndDelete({ _id: id })
      return res.status(OK).json(userToDelete)
    }

    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The user you are trying to delete is not found"
    })
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const oldUser = User.findOne({ _id: id })
  if (!oldUser) {
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The user you are trying to update is not found"
    })
  }
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    )
    return res.status(OK).json(updatedUser)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}

export const patchUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const oldUser = User.findOne({ _id: id })
  if (!oldUser) {
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The user you are trying to update is not found"
    })
  }
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    )
    return res.status(OK).json(updatedUser)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: error
    })
  }
}
