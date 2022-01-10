import React, { useEffect, useState } from "react"
import { useHttp } from "../../hooks/use-http"
import { FileCard } from "../file-card"
import {
  StyledActualDataDiv,
  StyledDataSubheader
} from "../generic-styled-components/styled-actual-data-div"

export const FilesOnBackendDataDiv = ({
  thereIsNewData,
  setThereIsNewData
}: {
  thereIsNewData: boolean
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { request } = useHttp()
  const [images, setImages] = useState<string[]>()
  const [videos, setVideos] = useState<string[]>()
  const [audios, setAudios] = useState<string[]>()

  useEffect(() => {
    const fetchData = async (url: string, type: string) => {
      const rawData = await request(url.concat(type), "GET")
      const data = await rawData?.json()
      if (type === "images") {
        setImages([...data])
      } else if (type === "audio") {
        setAudios([...data])
      } else {
        setVideos([...data])
      }
    }
    if (thereIsNewData) {
      fetchData("http://localhost:5000/api/files/", "images")
      fetchData("http://localhost:5000/api/files/", "audio")
      fetchData("http://localhost:5000/api/files/", "video")
    }
    setThereIsNewData(false)
  }, [request, setThereIsNewData, thereIsNewData])

  return (
    <StyledActualDataDiv>
      <StyledDataSubheader>Images</StyledDataSubheader>
      {images?.map((image, index) => (
        <FileCard
          setThereIsNewData={setThereIsNewData}
          file={image}
          type="image"
          key={index}
        />
      ))}
      <StyledDataSubheader>Audio</StyledDataSubheader>
      {audios?.map((audio, index) => (
        <FileCard
          setThereIsNewData={setThereIsNewData}
          file={audio}
          type="audio"
          key={index}
        />
      ))}
      <StyledDataSubheader>Video</StyledDataSubheader>
      {videos?.map((video, index) => (
        <FileCard
          setThereIsNewData={setThereIsNewData}
          file={video}
          type="video"
          key={index}
        />
      ))}
    </StyledActualDataDiv>
  )
}
