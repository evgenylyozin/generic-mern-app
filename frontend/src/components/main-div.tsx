import React, { useState } from "react"
import styled from "styled-components"

import { SwitchFormsDiv } from "./switch-forms-div"
import { FormDiv } from "./form-div"
import { DataDiv } from "./data-div"

const StyledMainDiv = styled.div`
  width: 100%;
  border-radius: 25px;
  display: grid;
  grid-area: main;
  background-color: #b4cfe8;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 100px auto auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". switch ."
    ". formdiv ."
    ". data .";
`

export const MainDiv = () => {
  const [mode, setMode] = useState("one")
  const [thereIsNewData, setThereIsNewData] = useState(true)
  return (
    <StyledMainDiv>
      <SwitchFormsDiv
        mode={mode}
        setMode={setMode}
        setThereIsNewData={setThereIsNewData}
      />
      <FormDiv mode={mode} setThereIsNewData={setThereIsNewData} />
      <DataDiv
        setThereIsNewData={setThereIsNewData}
        mode={mode}
        thereIsNewData={thereIsNewData}
      />
    </StyledMainDiv>
  )
}
