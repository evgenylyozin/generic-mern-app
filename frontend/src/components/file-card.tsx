import React from "react"
import styled from "styled-components"
import { GridfsFile } from "../types-schemas/input-types"
import { AudioForm } from "./audio-form"
import { ImagesForm } from "./images-form"
import { VideoForm } from "./video-form"

const StyledFileCard = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 45%;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0px 0px;
  grid-template-areas: "form";
`

export const FileCard = ({
  file,
  type,
  setThereIsNewData
}: {
  file: string | GridfsFile
  type: string
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const returnAppropriateFileDisplay = () => {
    switch (type) {
      case "image":
        return (
          <StyledFileCard>
            <ImagesForm
              setThereIsNewData={setThereIsNewData}
              display={true}
              file={file}
            />
          </StyledFileCard>
        )
      case "audio":
        return (
          <StyledFileCard>
            <AudioForm
              setThereIsNewData={setThereIsNewData}
              display={true}
              file={file}
            />
          </StyledFileCard>
        )
      case "video":
        return (
          <StyledFileCard>
            <VideoForm
              setThereIsNewData={setThereIsNewData}
              display={true}
              file={file}
            />
          </StyledFileCard>
        )
    }
  }
  return <>{returnAppropriateFileDisplay()}</>
}
