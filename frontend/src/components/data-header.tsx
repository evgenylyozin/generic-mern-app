import React from "react"
import styled from "styled-components"

const StyledDataHeader = styled.h1`
  width: 30%;
  grid-area: header;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  justify-self: center;
  margin-bottom: 30px;
`

export const DataHeader = ({ mode }: { mode: string }) => {
  const getRightHeader = () => {
    switch (mode) {
      case "one":
        return "All submitted users"
      case "two":
        return "All submitted files"
      case "three":
        return "All submitted files"
    }
  }
  return <StyledDataHeader>{getRightHeader()}</StyledDataHeader>
}
