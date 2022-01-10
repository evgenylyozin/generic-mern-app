import React from "react"
import { FilesInGridfsDataDiv } from "./data-divs/files-in-gridfs-data-div"
import { FilesOnBackendDataDiv } from "./data-divs/files-on-backend"
import { UsersDataDiv } from "./data-divs/users-data-div"

export const ActualDataDiv = ({
  mode,
  thereIsNewData,
  setThereIsNewData
}: {
  mode: string
  thereIsNewData: boolean
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const returnCorrectDataDiv = () => {
    switch (mode) {
      case "one":
        return (
          <UsersDataDiv
            setThereIsNewData={setThereIsNewData}
            thereIsNewData={thereIsNewData}
          />
        )
      case "two":
        return (
          <FilesOnBackendDataDiv
            setThereIsNewData={setThereIsNewData}
            thereIsNewData={thereIsNewData}
          />
        )
      case "three":
        return (
          <FilesInGridfsDataDiv
            setThereIsNewData={setThereIsNewData}
            thereIsNewData={thereIsNewData}
          />
        )
    }
  }
  return <>{returnCorrectDataDiv()}</>
}
