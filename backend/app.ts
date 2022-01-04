import express from "express"
import logger from "morgan"

// To handle multipart/form-data
import multer from "multer"
const upload = multer()

import jsonCRUDRouter from "./routes/json-crud"

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// To work only with text form-data
app.use(upload.none())

app.use("/api/json", jsonCRUDRouter)

app.listen("5000", () => {
  "Backend listens on port 5000"
})
