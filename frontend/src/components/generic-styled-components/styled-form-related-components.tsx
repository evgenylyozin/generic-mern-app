import styled from "styled-components"
export const GroupOfForms = styled.div`
  width: 100%;
  display: flex;
  grid-area: form;
  flex-direction: column;
`
export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  grid-area: form;
  flex-direction: column;
`

export const DisplayFileStyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-area: form;
  grid-template-columns: 1fr 3fr 3fr 3fr 1fr;
  grid-template-rows: 10px auto 25px 35px 10px 35px 10px;
  grid-template-areas:
    ". . . . ."
    ". file file file ."
    ". input input input ."
    ". error error error ."
    ". . . . ."
    ". update . delete ."
    ". . . . .";
`

export const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 16px;
  grid-area: label;
`

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  grid-template-rows: auto 40px;
  grid-template-areas:
    ". label input ."
    ". . error .";
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
export const CardFormGroup = styled(FormGroup)`
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: 10px auto 35px;
  grid-template-areas:
    ". . . ."
    ". input input ."
    ". error error .";
  margin-bottom: 0px;
`

export const CardButtonsGroup = styled.div`
  display: grid;
  grid-template-columns: 10px 100px 10px 100px 10px;
  grid-template-rows: 10px auto 10px;
  grid-template-areas:
    ". . . . ."
    ". update . delete ."
    ". . . . .";
  align-content: center;
  justify-content: center;
  align-items: center;
`
