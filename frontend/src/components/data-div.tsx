import React from "react"
import styled from "styled-components"
import { ActualDataDiv } from "./actual-data-div"
import { DataHeader } from "./data-header"
import { Divider } from "./divider"

const StyledDataDiv = styled.div`
  width: 100%;
  grid-area: data;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 0px 0px;
  grid-template-areas:
    "divider"
    "header"
    "data";
`

export const DataDiv = ({ mode }: { mode: string }) => {
  return (
    <StyledDataDiv>
      <Divider />
      <DataHeader mode={mode} />
      <ActualDataDiv mode={mode} />
    </StyledDataDiv>
  )
}
