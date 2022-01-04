import express from "express"
const router = express.Router()

router.get("/", (req, res) => res.send("<h1>Home</h1>"))

export default router
