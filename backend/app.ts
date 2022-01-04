import express from "express"
import logger from "morgan"

import indexRouter from "./routes/index"
import usersRouter from "./routes/users"

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", indexRouter)
app.use("/users", usersRouter)

app.listen("5000", () => {
  "Backend listens on port 5000"
})
