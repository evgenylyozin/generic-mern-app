import express from "express"

import { data } from "../data"

const router = express.Router()

// Available status codes
const OK = 200
const SERVER_ERROR = 500

router.get("/", (req, res) => {
  try {
    return res.status(OK).json(data)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: "Something unexpected happened"
    })
  }
})

router.post("/", (req, res) => {
  try {
    // To make id property to be of number type
    const newUser = {
      ...req.body,
      id: Number(req.body.id)
    }
    const newUsers = [...data].concat(newUser)
    return res.status(OK).json(newUsers)
  } catch (error) {
    return res.status(SERVER_ERROR).json({
      code: SERVER_ERROR,
      message: "Something unexpected happened"
    })
  }
})

export default router
