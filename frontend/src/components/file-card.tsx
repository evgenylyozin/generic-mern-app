import React from "react"
import styled from "styled-components"
import {
  DeleteButton,
  StyledButton,
  UpdateButton
} from "./generic-styled-components/styled-button"
import {
  StyledAudio,
  StyledImg,
  StyledVideo
} from "./generic-styled-components/styled-file-displays"
import { PickFileInput } from "./generic-styled-components/styled-file-input"

const StyledFileCard = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 45%;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.5fr 5fr 0.5fr 1fr 0.5fr 1fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . ."
    ". file file file ."
    ". . . . ."
    ". pick pick update ."
    ". . . . ."
    ". delete . . ."
    ". . . . .";
`

export const FileCard = ({ file, type }: { file: string; type: string }) => {
  const returnAppropriateFileDisplay = () => {
    switch (type) {
      case "image":
        return (
          <StyledFileCard>
            <StyledImg src={file} alt="alt" />
            <PickFileInput
              type="file"
              accept="image/png, image/jpg, image/jpeg"
            />
            <UpdateButton>Update</UpdateButton>
            <DeleteButton>Delete</DeleteButton>
          </StyledFileCard>
        )
      case "audio":
        return (
          <StyledFileCard>
            <StyledAudio controls src={file} />
            <PickFileInput type="file" accept="audio/mpeg, audio/wave" />
            <UpdateButton>Update</UpdateButton>
            <DeleteButton>Delete</DeleteButton>
          </StyledFileCard>
        )
      case "video":
        return (
          <StyledFileCard>
            <StyledVideo controls src={file} />
            <PickFileInput type="file" accept="video/mpeg, video/mp4" />
            <UpdateButton>Update</UpdateButton>
            <DeleteButton>Delete</DeleteButton>
          </StyledFileCard>
        )
    }
  }
  return <>{returnAppropriateFileDisplay()}</>
}
