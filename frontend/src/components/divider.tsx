import React from "react"
import styled from "styled-components"

const StyledDivider = styled.div`
  width: 60%;
  margin-left: 20%;
  background-color: white;
  height: 1px;
  grid-area: divider;
  margin-bottom: 30px;
`

export const Divider = () => {
  return <StyledDivider></StyledDivider>
}
