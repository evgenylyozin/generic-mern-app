import React from "react"
import styled from "styled-components"
import {
  DeleteButton,
  UpdateButton
} from "./generic-styled-components/styled-button"
import { StyledInput } from "./generic-styled-components/styled-input"

const StyledUserCard = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 45%;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1.5fr 1fr 1.5fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . ."
    ". name name name ."
    ". . . . ."
    ". surname surname surname ."
    ". . . . ."
    ". update . delete ."
    ". . . . .";
`

const NameInput = styled(StyledInput)`
  grid-area: name;
  margin-bottom: 0px;
  background-color: #84a5cd;
  color: white;
`

const SurnameInput = styled(StyledInput)`
  grid-area: surname;
  margin-bottom: 0px;
  background-color: #84a5cd;
  color: white;
`
export const UserCard = ({
  user
}: {
  user: {
    _id: number
    name: string
    surname: string
  }
}) => {
  return (
    <StyledUserCard>
      <NameInput defaultValue={user.name} />
      <SurnameInput defaultValue={user.surname} />
      <UpdateButton>Update</UpdateButton>
      <DeleteButton>Delete</DeleteButton>
    </StyledUserCard>
  )
}
