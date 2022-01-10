import React from "react"
import styled from "styled-components"
import {
  DeleteButton,
  UpdateButton
} from "./generic-styled-components/styled-button"
import { StyledInput } from "./generic-styled-components/styled-input"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { StyledErrorParagraph } from "./generic-styled-components/styled-error-paragraph"
import {
  CardButtonsGroup,
  CardFormGroup,
  StyledForm
} from "./generic-styled-components/styled-form-related-components"
import { SimpleInputs } from "../types-schemas/input-types"
import { SimpleSchema } from "../types-schemas/yup-schemas"
import { useHttp } from "../hooks/use-http"

const StyledUserCard = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 45%;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0px 0px;
  grid-template-areas: "form";
`
const NameInput = styled(StyledInput)`
  margin-bottom: 0px;
  background-color: #84a5cd;
  color: white;
`

const SurnameInput = styled(StyledInput)`
  margin-bottom: 0px;
  background-color: #84a5cd;
  color: white;
`
export const UserCard = ({
  user,
  setThereIsNewData
}: {
  user: {
    _id: number
    name: string
    surname: string
  }

  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { request } = useHttp()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SimpleInputs>({
    resolver: yupResolver(SimpleSchema)
  })
  // This one is for update
  const onSubmit: SubmitHandler<SimpleInputs> = async (data) => {
    const response = await request(
      `http://localhost:5000/api/json/${user._id}`,
      "PUT",
      JSON.stringify(data),
      {
        "content-type": "application/json"
      }
    )
    const jsonData = await response?.json()
    if (jsonData) alert(`User updated: ${JSON.stringify(jsonData)}`)
    setThereIsNewData(true)
  }
  // This one is for delete
  const deleteHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const responce = await request(
      `http://localhost:5000/api/json/${user._id}`,
      "DELETE"
    )
    const data = await responce?.json()
    alert(`User: ${JSON.stringify(data)} successfully deleted`)
    setThereIsNewData(true)
  }
  return (
    <StyledUserCard>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <CardFormGroup>
          <NameInput
            defaultValue={user.name}
            {...register("name")}
            type="text"
            placeholder="name"
            id="name"
          />
          <StyledErrorParagraph>{errors.name?.message}</StyledErrorParagraph>
        </CardFormGroup>
        <CardFormGroup>
          <SurnameInput
            defaultValue={user.surname}
            {...register("surname")}
            type="text"
            placeholder="surname"
            id="surname"
          />
          <StyledErrorParagraph>{errors.surname?.message}</StyledErrorParagraph>
        </CardFormGroup>
        <CardButtonsGroup>
          <UpdateButton type="submit">Update</UpdateButton>
          <DeleteButton onClick={deleteHandler}>Delete</DeleteButton>
        </CardButtonsGroup>
      </StyledForm>
    </StyledUserCard>
  )
}
