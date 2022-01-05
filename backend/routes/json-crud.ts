import express from "express"
import {
  deleteUser,
  getUsers,
  patchUser,
  postUser,
  putUser
} from "../controllers/json-crud"

const router = express.Router()

router.get("/", getUsers)

router.post("/", postUser)

router.delete("/:id", deleteUser)

router.put("/:id", putUser)

router.patch("/:id", patchUser)

export default router
