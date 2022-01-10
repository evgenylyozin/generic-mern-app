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
import { ImageValidationSchema } from "../types-schemas/yup-schemas"
import { GridfsFile, ImageFiles } from "../types-schemas/input-types"
import { StyledImg } from "./generic-styled-components/styled-file-displays"
import { useHttp } from "../hooks/use-http"

export const ImagesForm = ({
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

  const getTheImageInBinary = useCallback(
    async (id: string) => {
      const response = await request(
        `http://localhost:5000/api/files/gridfs/images/${id}`,
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
        getTheImageInBinary(file._id!)
      }
    }
  }, [file, getTheImageInBinary])

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
      "http://localhost:5000/api/files/images",
      "POST",
      formData
    )
    const jsonData = await response?.json()
    if (jsonData)
      alert(
        `Image was saved in the backends' filesystem: ${JSON.stringify(
          jsonData
        )}`
      )
    setThereIsNewData(true)
    if (error) alert(error)
  }

  const onImageUpdate: SubmitHandler<ImageFiles> = async (data: any) => {
    const formData = new FormData()
    formData.append("image", data.image[0])
    let url = ""
    if (typeof file === "string") {
      const id = file.split("/")[2]
      url = `http://localhost:5000/api/files/images/${id}`
    }
    const response = await request(url, "PUT", formData)
    const jsonData = await response?.json()
    if (jsonData) alert(`Image was updated: ${JSON.stringify(jsonData)}`)
    setThereIsNewData(true)
    if (error) alert(error)
  }

  const deleteHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    let url = ""
    if (typeof file === "string") {
      const fileId = file.split("/")[2]
      url = `http://localhost:5000/api/files/images/${fileId}`
    } else {
      url = `http://localhost:5000/api/files/gridfs/images/${file?._id}`
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
        <DisplayFileStyledForm onSubmit={handleSubmit(onImageUpdate)}>
          <StyledImg src={url} alt="alt" />
          <StyledFileInput
            type="file"
            id="image"
            accept="image/png, image/jpg, image/jpeg"
            {...register("image")}
          />
          <StyledErrorParagraph>{errors.image?.message}</StyledErrorParagraph>
          {typeof file === "string" ? (
            <UpdateButton>Update</UpdateButton>
          ) : null}
          <DeleteButton onClick={deleteHandler}>Delete</DeleteButton>
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
