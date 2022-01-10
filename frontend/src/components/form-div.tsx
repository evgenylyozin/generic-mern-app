import React from "react"
import styled from "styled-components"
import { Form } from "./form"
import { FormHeader } from "./form-header"
import { FormSubheader } from "./form-subheader"

const StyledFormDiv = styled.div`
  width: 100%;
  grid-area: formdiv;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 0px 0px;
  grid-template-areas:
    "header"
    "subheader"
    "form";
`

export const FormDiv = ({
  mode,
  setThereIsNewData
}: {
  mode: string
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <StyledFormDiv>
      <FormHeader mode={mode} />
      <FormSubheader mode={mode} />
      <Form mode={mode} setThereIsNewData={setThereIsNewData} />
    </StyledFormDiv>
  )
}
