import * as fs from "fs/promises"
import path from "path"
import { ONE, TWO, ZERO } from "./common-constants"
const createNewFileName = (file: string) => {
  // [image, jpg]
  const fileNameAsArray = file.split(".")
  fileNameAsArray[TWO] = String(Date.now())
  const newFileName = fileNameAsArray[ZERO].concat(
    fileNameAsArray[TWO],
    ".",
    fileNameAsArray[ONE]
  )
  return newFileName
}

export const updateTheFile = async (
  whatToUpdate: string,
  newFilePath: string,
  idOfReplaced: string
) => {
  const files = await fs.readdir(
    path.resolve(__dirname, "../uploads/", whatToUpdate)
  )
  const fileToUpdate = files.find((file) => file === idOfReplaced)
  if (fileToUpdate) {
    await fs.rm(
      path.resolve(__dirname, "../uploads/", whatToUpdate, fileToUpdate)
    )
    const newFileName = createNewFileName(fileToUpdate)
    await fs.rename(
      path.resolve(__dirname, "../", newFilePath),
      path.resolve(__dirname, "../uploads/", whatToUpdate, newFileName)
    )
    const pathToReturn = path.resolve("/uploads/", whatToUpdate, newFileName)
    return pathToReturn
  }
  return ""
}
