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
import { VideoValidationSchema } from "../../types-schemas/yup-schemas"
import { VideoFiles } from "../../types-schemas/input-types"
import { StyledVideo } from "../generic-styled-components/styled-file-displays"
import { useHttp } from "../../hooks/use-http"

export const GridfsVideoForm = ({
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
  } = useForm<VideoFiles>({
    resolver: yupResolver(VideoValidationSchema)
  })
  const onVideoSubmit: SubmitHandler<VideoFiles> = async (data: any) => {
    const formData = new FormData()
    formData.append("video", data.video[0])
    const response = await request(
      "http://localhost:5000/api/files/gridfs/video",
      "POST",
      formData
    )
    const jsonData = await response?.json()
    if (jsonData) alert(`Video saved to DB: ${JSON.stringify(jsonData)}`)
    if (error) alert(error)
    setThereIsNewData(true)
  }
  const onVideoUpdate: SubmitHandler<VideoFiles> = (data) => console.log(data)

  return (
    <>
      {display ? (
        <DisplayFileStyledForm onSubmit={handleSubmit(onVideoUpdate)}>
          <StyledVideo src={file} controls />
          <StyledFileInput
            type="file"
            id="video"
            accept="video/mpeg, video/mp4"
            {...register("video")}
          />
          <StyledErrorParagraph>{errors.video?.message}</StyledErrorParagraph>
          <UpdateButton>Update</UpdateButton>
          <DeleteButton>Delete</DeleteButton>
        </DisplayFileStyledForm>
      ) : (
        <StyledForm onSubmit={handleSubmit(onVideoSubmit)}>
          <FormGroup>
            <StyledLabel htmlFor="video">Video:</StyledLabel>
            <StyledFileInput
              type="file"
              id="video"
              accept="video/mpeg, video/mp4"
              {...register("video")}
            />
            <StyledErrorParagraph>{errors.video?.message}</StyledErrorParagraph>
          </FormGroup>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      )}
    </>
  )
}
