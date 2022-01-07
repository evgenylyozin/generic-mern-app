import React from "react"
import styled from "styled-components"

const StyledFormSubheader = styled.h2`
  width: 40%;
  grid-area: subheader;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  justify-self: center;
  margin-bottom: 30px;
`

export const FormSubheader = ({ mode }: { mode: string }) => {
  const getRightSubheader = () => {
    switch (mode) {
      case "one":
        return "Create a user"
      case "two":
        return "Choose files"
      case "three":
        return "Choose files"
    }
  }
  return <StyledFormSubheader>{getRightSubheader()}</StyledFormSubheader>
}
