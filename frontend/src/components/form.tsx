import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  width: 100%;
  grid-area: form;
  background-color: purple;
`

const JsonForm = () => {
  return (
    <StyledForm>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="surname" />
      <button type="submit">Submit</button>
    </StyledForm>
  )
}
const FilesForm = () => {
  return (
    <StyledForm>
      <input type="file" accept="image/png, image/jpg, image/jpeg" />
      <button type="submit">Submit</button>
      <input type="file" accept="audio/mpeg, audio/wave" />
      <button type="submit">Submit</button>
      <input type="file" accept="video/mpeg, video/mp4" />
      <button type="submit">Submit</button>
    </StyledForm>
  )
}

export const Form = ({ mode }: { mode: string }) => {
  return <>{mode === "one" ? <JsonForm /> : <FilesForm />}</>
}
