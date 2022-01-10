import React, { useCallback, useEffect, useState } from "react"
import { useHttp } from "../../hooks/use-http"
import { GridfsFile } from "../../types-schemas/input-types"
import { FileCard } from "../file-card"
import {
  StyledActualDataDiv,
  StyledDataSubheader
} from "../generic-styled-components/styled-actual-data-div"

export const FilesInGridfsDataDiv = ({
  thereIsNewData,
  setThereIsNewData
}: {
  thereIsNewData: boolean
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { request } = useHttp()
  const [images, setImages] = useState<GridfsFile[]>()
  const [videos, setVideos] = useState<GridfsFile[]>()
  const [audios, setAudios] = useState<GridfsFile[]>()

  const fetchData = useCallback(
    async (url: string, type: string) => {
      const rawData = await request(url.concat(type), "GET")
      const data = await rawData?.json()
      if (type === "images") {
        setImages([...data])
      } else if (type === "audio") {
        setAudios([...data])
      } else {
        setVideos([...data])
      }
    },
    [request]
  )

  useEffect(() => {
    if (thereIsNewData) {
      fetchData("http://localhost:5000/api/files/gridfs/", "images")
      fetchData("http://localhost:5000/api/files/gridfs/", "audio")
      fetchData("http://localhost:5000/api/files/gridfs/", "video")
    }
    setThereIsNewData(false)
  }, [fetchData, setThereIsNewData, thereIsNewData])

  return (
    <StyledActualDataDiv>
      <StyledDataSubheader>Images</StyledDataSubheader>
      {images?.map((image) => (
        <FileCard
          setThereIsNewData={setThereIsNewData}
          file={image}
          type="image"
          key={image._id}
        />
      ))}
      <StyledDataSubheader>Audio</StyledDataSubheader>
      {audios?.map((audio) => (
        <FileCard
          setThereIsNewData={setThereIsNewData}
          file={audio}
          type="audio"
          key={audio._id}
        />
      ))}
      <StyledDataSubheader>Video</StyledDataSubheader>
      {videos?.map((video) => (
        <FileCard
          setThereIsNewData={setThereIsNewData}
          file={video}
          type="video"
          key={video._id}
        />
      ))}
    </StyledActualDataDiv>
  )
}
