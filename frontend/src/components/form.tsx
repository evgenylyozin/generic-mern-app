import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  width: 100%;
  grid-area: form;
  display: flex;
  flex-direction: column;
`
const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 16px;
  grid-area: label;
`

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". label input .";
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const StyledInput = styled.input`
  height: 50px;
  border-radius: 12px;
  border-width: 0;
  grid-area: input;
  padding-left: 20px;
`

const StyledFileInput = styled.input`
  grid-area: input;
  padding-left: 20px;
`

const StyledButton = styled.div`
  width: 150px;
  height: 50px;
  background-color: #84a5cd;
  border-radius: 12px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  align-self: center;
  margin-bottom: 30px;
`
const JsonForm = () => {
  return (
    <StyledForm>
      <FormGroup>
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledInput type="text" placeholder="name" id="name" />
      </FormGroup>
      <FormGroup>
        <StyledLabel htmlFor="surname">Surname:</StyledLabel>
        <StyledInput type="text" placeholder="surname" id="surname" />
      </FormGroup>
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  )
}
const FilesForm = () => {
  return (
    <StyledForm>
      <FormGroup>
        <StyledLabel htmlFor="image">Image:</StyledLabel>
        <StyledFileInput
          type="file"
          id="image"
          accept="image/png, image/jpg, image/jpeg"
        />
      </FormGroup>

      <StyledButton>Submit</StyledButton>
      <FormGroup>
        <StyledLabel htmlFor="audio">Audio:</StyledLabel>
        <StyledFileInput
          type="file"
          id="audio"
          accept="audio/mpeg, audio/wave"
        />
      </FormGroup>
      <StyledButton>Submit</StyledButton>
      <FormGroup>
        <StyledLabel htmlFor="video">Video:</StyledLabel>
        <StyledFileInput
          type="file"
          id="video"
          accept="video/mpeg, video/mp4"
        />
      </FormGroup>
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  )
}

export const Form = ({ mode }: { mode: string }) => {
  return <>{mode === "one" ? <JsonForm /> : <FilesForm />}</>
}
