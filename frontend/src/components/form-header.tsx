import React from "react"
import styled from "styled-components"

const StyledFormHeader = styled.h1`
  width: 30%;
  grid-area: header;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  justify-self: center;
  margin-bottom: 30px;
`

export const FormHeader = ({ mode }: { mode: string }) => {
  const getRightHeader = () => {
    switch (mode) {
      case "one":
        return "Test CRUD operations with JSON data"
      case "two":
        return "Test CRUD operations on files (files are stored on the backend server)"
      case "three":
        return "Test CRUD operations on files (files are stored as binary data in mongodb gridfs)"
    }
  }
  return <StyledFormHeader>{getRightHeader()}</StyledFormHeader>
}
