import React from "react"
import styled from "styled-components"

const StyledSwitch = styled("div")<{ gridarea: string; turnedOn: boolean }>`
  grid-area: ${(props) => props.gridarea};
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.turnedOn ? "#84A5CD" : "white")};
  border-radius: 100%;
  cursor: pointer;
`

export const Switch = ({
  gridarea,
  setMode,
  turnedOn
}: {
  gridarea: string
  setMode: React.Dispatch<React.SetStateAction<string>>
  turnedOn: boolean
}) => {
  const clickOnSwitchHandler = () => {
    setMode(gridarea)
  }
  return (
    <StyledSwitch
      gridarea={gridarea}
      onClick={clickOnSwitchHandler}
      turnedOn={turnedOn}
    />
  )
}
