import React from "react"
import {
  DeleteButton,
  StyledButton,
  UpdateButton
} from "../generic-styled-components/styled-button"
import { StyledFileInput } from "../generic-styled-components/styled-file-input"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { StyledErrorParagraph } from "../generic-styled-components/styled-error-paragraph"
import {
  DisplayFileStyledForm,
  FormGroup,
  StyledForm,
  StyledLabel
} from "../generic-styled-components/styled-form-related-components"
import { ImageValidationSchema } from "../../types-schemas/yup-schemas"
import { ImageFiles } from "../../types-schemas/input-types"
import { StyledImg } from "../generic-styled-components/styled-file-displays"
import { useHttp } from "../../hooks/use-http"

export const GridfsImagesForm = ({
  setThereIsNewData,
  display,
  file
}: {
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
  display?: boolean
  file?: string
}) => {
  const { request, error } = useHttp()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ImageFiles>({
    resolver: yupResolver(ImageValidationSchema)
  })
  const onImageSubmit: SubmitHandler<ImageFiles> = async (data: any) => {
    const formData = new FormData()
    formData.append("image", data.image[0])
    const response = await request(
      "http://localhost:5000/api/files/gridfs/images",
      "POST",
      formData
    )
    const jsonData = await response?.json()
    if (jsonData) alert(`Image saved to DB: ${JSON.stringify(jsonData)}`)
    if (error) alert(error)
    setThereIsNewData(true)
  }
  const onImageUpdate: SubmitHandler<ImageFiles> = (data) => console.log(data)
  return (
    <>
      {display ? (
        <DisplayFileStyledForm onSubmit={handleSubmit(onImageUpdate)}>
          <StyledImg src={file} alt="alt" />
          <StyledFileInput
            type="file"
            id="image"
            accept="image/png, image/jpg, image/jpeg"
            {...register("image")}
          />
          <StyledErrorParagraph>{errors.image?.message}</StyledErrorParagraph>
          <UpdateButton>Update</UpdateButton>
          <DeleteButton>Delete</DeleteButton>
        </DisplayFileStyledForm>
      ) : (
        <StyledForm onSubmit={handleSubmit(onImageSubmit)}>
          <FormGroup>
            <StyledLabel htmlFor="image">Image:</StyledLabel>
            <StyledFileInput
              type="file"
              id="image"
              accept="image/png, image/jpg, image/jpeg"
              {...register("image")}
            />
            <StyledErrorParagraph>{errors.image?.message}</StyledErrorParagraph>
          </FormGroup>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      )}
    </>
  )
}
