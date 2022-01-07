import React from "react"
import styled from "styled-components"

const StyledFormHeader = styled.h1`
  width: 100%;
  grid-area: header;
  background-color: yellow;
`

export const FormHeader = ({ mode }: { mode: string }) => {
  return <StyledFormHeader>Header</StyledFormHeader>
}
