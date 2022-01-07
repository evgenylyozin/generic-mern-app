import React from "react"
import styled from "styled-components"

const StyledFormSubheader = styled.h2`
  width: 100%;
  grid-area: subheader;
  background-color: orange;
`

export const FormSubheader = ({ mode }: { mode: string }) => {
  return <StyledFormSubheader>Subheader</StyledFormSubheader>
}
