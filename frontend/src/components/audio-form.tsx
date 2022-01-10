import React, { useCallback, useEffect, useState } from "react"
import {
  DeleteButton,
  StyledButton,
  UpdateButton
} from "./generic-styled-components/styled-button"
import { StyledFileInput } from "./generic-styled-components/styled-file-input"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { StyledErrorParagraph } from "./generic-styled-components/styled-error-paragraph"
import {
  DisplayFileStyledForm,
  FormGroup,
  StyledForm,
  StyledLabel
} from "./generic-styled-components/styled-form-related-components"
import { AudioValidationSchema } from "../types-schemas/yup-schemas"
import { AudioFiles, GridfsFile } from "../types-schemas/input-types"
import { StyledAudio } from "./generic-styled-components/styled-file-displays"
import { useHttp } from "../hooks/use-http"

export const AudioForm = ({
  setThereIsNewData,
  display,
  file
}: {
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>

  display?: boolean
  file?: string | GridfsFile
}) => {
  // Check if file is string then use it as part of url
  // if it is a Gridfs file object - then get actual data from gridfs
  const [url, setUrl] = useState("")

  const { request, error } = useHttp()

  const getTheAudioInBinary = useCallback(
    async (id: string) => {
      const response = await request(
        `http://localhost:5000/api/files/gridfs/audio/${id}`,
        "GET"
      )
      const responseDataBlob = await response?.blob()
      if (responseDataBlob) {
        const objectURL = URL.createObjectURL(responseDataBlob)
        setUrl(objectURL)
      }
    },
    [request]
  )

  useEffect(() => {
    if (file) {
      if (typeof file === "string") {
        setUrl(`http://localhost:5000/${file}`)
      } else {
        getTheAudioInBinary(file._id!)
      }
    }
  }, [file, getTheAudioInBinary])

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
      "http://localhost:5000/api/files/audio",
      "POST",
      formData
    )

    const jsonData = await response?.json()
    if (jsonData)
      alert(
        `Audio was saved in the backends' filesystem: ${JSON.stringify(
          jsonData
        )}`
      )
    setThereIsNewData(true)
    if (error) alert(error)
  }

  const onAudioUpdate: SubmitHandler<AudioFiles> = async (data: any) => {
    const formData = new FormData()
    formData.append("audio", data.audio[0])
    let url = ""
    if (typeof file === "string") {
      const id = file.split("/")[2]
      url = `http://localhost:5000/api/files/audio/${id}`
    }
    const response = await request(url, "PUT", formData)
    const jsonData = await response?.json()
    if (jsonData) alert(`Audio was updated: ${JSON.stringify(jsonData)}`)
    setThereIsNewData(true)
    if (error) alert(error)
  }

  const deleteHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    let url = ""
    if (typeof file === "string") {
      const fileId = file.split("/")[2]
      url = `http://localhost:5000/api/files/audio/${fileId}`
    } else {
      url = `http://localhost:5000/api/files/gridfs/audio/${file?._id}`
    }
    console.log(url)
    const responce = await request(url, "DELETE")
    const data = await responce?.json()
    alert(`File: ${JSON.stringify(data)} successfully deleted`)
    setThereIsNewData(true)
  }

  return (
    <>
      {display ? (
        <DisplayFileStyledForm onSubmit={handleSubmit(onAudioUpdate)}>
          <StyledAudio src={url} controls />
          <StyledFileInput
            type="file"
            id="audio"
            accept="audio/mpeg, audio/wave"
            {...register("audio")}
          />
          <StyledErrorParagraph>{errors.audio?.message}</StyledErrorParagraph>
          {typeof file === "string" ? (
            <UpdateButton>Update</UpdateButton>
          ) : null}
          <DeleteButton onClick={deleteHandler}>Delete</DeleteButton>
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
