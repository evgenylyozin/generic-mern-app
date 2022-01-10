import React from "react"
import { AudioForm } from "./audio-form"
import { GridfsAudioForm } from "./forms-gridfs/gridfs-audio-form"
import { GridfsImagesForm } from "./forms-gridfs/gridfs-images-form"
import { GridfsVideoForm } from "./forms-gridfs/gridfs-video-form"
import { GroupOfForms } from "./generic-styled-components/styled-form-related-components"
import { ImagesForm } from "./images-form"
import { JsonForm } from "./json-form"
import { VideoForm } from "./video-form"

export const Form = ({
  mode,
  setThereIsNewData
}: {
  mode: string
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <>
      {mode === "one" ? (
        <JsonForm setThereIsNewData={setThereIsNewData} />
      ) : mode === "two" ? (
        <GroupOfForms>
          <ImagesForm setThereIsNewData={setThereIsNewData} />
          <AudioForm setThereIsNewData={setThereIsNewData} />
          <VideoForm setThereIsNewData={setThereIsNewData} />
        </GroupOfForms>
      ) : (
        <GroupOfForms>
          <GridfsImagesForm setThereIsNewData={setThereIsNewData} />
          <GridfsAudioForm setThereIsNewData={setThereIsNewData} />
          <GridfsVideoForm setThereIsNewData={setThereIsNewData} />
        </GroupOfForms>
      )}
    </>
  )
}
