import * as fs from "fs/promises"
import path from "path"

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
    await fs.rename(
      path.resolve(__dirname, "../", newFilePath),
      path.resolve(__dirname, "../uploads/", whatToUpdate, fileToUpdate)
    )
    const pathToReturn = path.resolve("/uploads/", whatToUpdate, fileToUpdate)
    return pathToReturn
  }
  return ""
}
