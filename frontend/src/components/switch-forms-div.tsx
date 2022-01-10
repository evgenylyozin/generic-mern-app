import React from "react"
import styled from "styled-components"
import { Switch } from "./switch"

const StyledSwitchFormsDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "one two three";
  grid-area: switch;
  align-items: center;
  justify-items: center;
`

export const SwitchFormsDiv = ({
  mode,
  setMode,
  setThereIsNewData
}: {
  mode: string
  setMode: React.Dispatch<React.SetStateAction<string>>
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <StyledSwitchFormsDiv>
      <Switch
        gridarea="one"
        setMode={setMode}
        turnedOn={mode === "one" ? true : false}
        setThereIsNewData={setThereIsNewData}
      />
      <Switch
        gridarea="two"
        setMode={setMode}
        turnedOn={mode === "two" ? true : false}
        setThereIsNewData={setThereIsNewData}
      />
      <Switch
        gridarea="three"
        setMode={setMode}
        turnedOn={mode === "three" ? true : false}
        setThereIsNewData={setThereIsNewData}
      />
    </StyledSwitchFormsDiv>
  )
}
