import React from "react"
import styled from "styled-components"

const StyledSwitch = styled("div")<{ gridarea: string }>`
  grid-area: ${(props) => props.gridarea};
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 100%;
`

export const Switch = ({
  gridarea,
  setMode
}: {
  gridarea: string
  setMode: React.Dispatch<React.SetStateAction<string>>
}) => {
  const clickOnSwitchHandler = () => {
    setMode(gridarea)
  }
  return <StyledSwitch gridarea={gridarea} onClick={clickOnSwitchHandler} />
}
