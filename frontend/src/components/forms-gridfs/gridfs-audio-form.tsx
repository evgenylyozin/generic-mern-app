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
import { AudioValidationSchema } from "../../types-schemas/yup-schemas"
import { AudioFiles } from "../../types-schemas/input-types"
import { StyledAudio } from "../generic-styled-components/styled-file-displays"
import { useHttp } from "../../hooks/use-http"

export const GridfsAudioForm = ({
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
  } = useForm<AudioFiles>({
    resolver: yupResolver(AudioValidationSchema)
  })
  const onAudioSubmit: SubmitHandler<AudioFiles> = async (data: any) => {
    const formData = new FormData()
    formData.append("audio", data.audio[0])
    const response = await request(
      "http://localhost:5000/api/files/gridfs/audio",
      "POST",
      formData
    )
    const jsonData = await response?.json()
    if (jsonData) alert(`Audio saved to DB: ${JSON.stringify(jsonData)}`)
    if (error) alert(error)
    setThereIsNewData(true)
  }
  const onAudioUpdate: SubmitHandler<AudioFiles> = (data) => console.log(data)

  return (
    <>
      {display ? (
        <DisplayFileStyledForm onSubmit={handleSubmit(onAudioUpdate)}>
          <StyledAudio src={file} controls />
          <StyledFileInput
            type="file"
            id="audio"
            accept="audio/mpeg, audio/wave"
            {...register("audio")}
          />
          <StyledErrorParagraph>{errors.audio?.message}</StyledErrorParagraph>
          <UpdateButton>Update</UpdateButton>
          <DeleteButton>Delete</DeleteButton>
        </DisplayFileStyledForm>
      ) : (
        <StyledForm onSubmit={handleSubmit(onAudioSubmit)}>
          <FormGroup>
            <StyledLabel htmlFor="audio">Audio:</StyledLabel>
            <StyledFileInput
              type="file"
              id="audio"
              accept="audio/mpeg, audio/wave"
              {...register("audio")}
            />
            <StyledErrorParagraph>{errors.audio?.message}</StyledErrorParagraph>
          </FormGroup>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      )}
    </>
  )
}
