import React from "react"
import { StyledButton } from "./generic-styled-components/styled-button"
import { StyledInput } from "./generic-styled-components/styled-input"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { StyledErrorParagraph } from "./generic-styled-components/styled-error-paragraph"
import {
  FormGroup,
  StyledForm,
  StyledLabel
} from "./generic-styled-components/styled-form-related-components"
import { SimpleInputs } from "../types-schemas/input-types"
import { SimpleSchema } from "../types-schemas/yup-schemas"
import { useHttp } from "../hooks/use-http"

export const JsonForm = ({
  setThereIsNewData
}: {
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { request, error } = useHttp()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SimpleInputs>({
    resolver: yupResolver(SimpleSchema)
  })
  const onSubmit: SubmitHandler<SimpleInputs> = async (data) => {
    const response = await request(
      "http://localhost:5000/api/json",
      "POST",
      JSON.stringify(data),
      {
        "content-type": "application/json"
      }
    )
    const jsonData = await response?.json()
    if (jsonData) alert(`User created: ${JSON.stringify(jsonData)}`)
    setThereIsNewData(true)
    if (error) alert(error)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledInput
          {...register("name")}
          type="text"
          placeholder="name"
          id="name"
        />
        <StyledErrorParagraph>{errors.name?.message}</StyledErrorParagraph>
      </FormGroup>
      <FormGroup>
        <StyledLabel htmlFor="surname">Surname:</StyledLabel>
        <StyledInput
          {...register("surname")}
          type="text"
          placeholder="surname"
          id="surname"
        />
        <StyledErrorParagraph>{errors.surname?.message}</StyledErrorParagraph>
      </FormGroup>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  )
}
