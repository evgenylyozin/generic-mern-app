import React from "react"
import styled from "styled-components"

const StyledDataDiv = styled.div`
  width: 100%;
  grid-area: data;
  background-color: blue;
`

export const DataDiv = ({ mode }: { mode: string }) => {
  return <StyledDataDiv></StyledDataDiv>
}
