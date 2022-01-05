import { SERVER_ERROR, OK, CREATED, NOT_FOUND } from "../utils/status-codes"
import { Request, Response } from "express"
import { data } from "../data"

const FIRST_IN_ARRAY = 0

export const getUsers = (req: Request, res: Response) => {
  try {
    return res.status(OK).json(data)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: "Something unexpected happened"
    })
  }
}

export const postUser = (req: Request, res: Response) => {
  try {
    // To make id property to be of number type
    const newUser = {
      ...req.body,
      id: Number(req.body.id)
    }
    const newUsers = [...data].concat(newUser)
    return res.status(CREATED).json(newUsers)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: "Something unexpected happened"
    })
  }
}

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const userToDelete = [...data].find((user) => user.id === Number(id))
    // Just to keep the logic complete
    if (userToDelete) {
      const newUsers = [...data].filter((user) => user.id !== Number(id))
      console.log(newUsers)
      return res.status(OK).json(userToDelete)
    }

    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The user you are trying to delete is not found"
    })
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: "Something unexpected happened"
    })
  }
}

export const putUser = (req: Request, res: Response) => {
  const { id } = req.params
  const oldUser = [...data].find((user) => user.id === Number(id))
  if (!oldUser) {
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The user you are trying to update is not found"
    })
  }
  const newUser = {
    ...req.body,
    id: Number(req.body.id)
  }
  try {
    const newUsers = [...data].map((user) => {
      if (user.id === Number(id)) {
        return newUser
      }
      return user
    })
    console.log(newUsers)
    return res.status(OK).json(newUsers[FIRST_IN_ARRAY])
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: "Something unexpected happened"
    })
  }
}

export const patchUser = (req: Request, res: Response) => {
  const { id } = req.params
  const oldUser = [...data].find((user) => user.id === Number(id))
  if (!oldUser) {
    return res.status(NOT_FOUND).json({
      code: NOT_FOUND,
      message: "The user you are trying to update is not found"
    })
  }
  const newUser = {
    ...oldUser,
    ...req.body,
    id: Number(id)
  }
  try {
    const newUsers = [...data].map((user) => {
      if (user.id === Number(id)) {
        return newUser
      }
      return user
    })
    console.log(newUsers)
    return res.status(OK).json(newUsers[FIRST_IN_ARRAY])
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: "Something unexpected happened"
    })
  }
}
