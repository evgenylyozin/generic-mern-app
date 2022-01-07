import React from "react"
import styled from "styled-components"
import { FileCard } from "./file-card"
import { UserCard } from "./user-card"

const StyledActualDataDiv = styled.div`
  grid-area: data;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const UsersDataDiv = () => {
  const DummyData = [
    {
      _id: 1,
      name: "Evgeny",
      surname: "Lyozin"
    },
    {
      _id: 2,
      name: "Julia",
      surname: "Lyozina"
    },
    {
      _id: 3,
      name: "Anfisa",
      surname: "Lyozina"
    }
  ]
  return (
    <StyledActualDataDiv>
      {DummyData.map((user) => (
        <UserCard user={user} key={user._id} />
      ))}
    </StyledActualDataDiv>
  )
}

const DummyImagesData = [
  "https://yandex-images.clstorage.net/98rFTX354/ddce46taz/ubyvrNMkve7PYZXEtHJV0EAfTAUBsK8F1nyBaFfMcPEsyfMjYifpFVHgKKSNtIwXz0u2gN5qToETVLzJbgqmytyhypnjSMTS52WVyIBWOfRcM2w5IaD_Gd8d3QU38DT5PczTF2OeQPSYJYAAQF1QphJzpr2HG3rxSlBNdVu_o18l6IPoCyAYknO5GOBcvnkAnDp8sSHN37iCGJj9V8hhPYkwnmZPOuAUICmc5IyRGMqup3I1r1_DVbpc0eDzW79f6Wy33NPMXJ4nUTBYVJ7RZOD2wOkROVukkpAkLZ_QlY1t6CJ6914cKHQVcDSA7VQGkiMeCQvPw9VmwAXgU-czS-UEJ0wP8KQWn8EIvBgqfUyc4mhZOalHwL6cME0TeGWtQWzytpNmFGQgARiUHBGcKmq7pj3Lt18Z2kh9QM93W1PduENog4hYPnMV6Fi0xtF0ZPbsDYklz-Ai4PSl_8g5VUGEHqLnPrBYwBGkFBBxWCKy9-Y5Iz_TDZJgbTQT56MTlcSvcMNc5GLP5QhkRDbJ1Jjy_IGdTa_w_mhEMf_kcYUVMLqy9658ZAw9eBScIZCKPi9mDVO_-3EulB04-9tTW908D9RLKHSOoxG80Lieqfx8UuTl3Vn74JaQ2CGveEWlJaQ-_r_miDj8MRTwKDlEZjInaqGzG8OpstBVSF_Dr8dxVB-cB3SY8ivNjLRc3kHglC5cMUVdIwRyANSl64TxLW3gKqKDcghcsGFE2Gh1qD7iH36lEyf7dWYsUVTzD3vLoeyn7JdkrAqT0Xx4gCLdIGw6YO2dhds0JvA4wVdc7cWt_D6-v9o45EAdFNSErdyyYpOGAcdvu8WWCJFAw2NHAxX0_2xfTPh2t0kMqARmqQQwPsAlvX2_CKIMUL33iLFNcQQiIi9OlKzMnTi0lPXIpmar5rWDO7-FqjyFjG-Li2uhrOucj0Qg6uu5mGT4xmmcfD7M8TXRl4xKUBTRc-Tg",
  "https://yandex-images.clstorage.net/98rFTX354/ddce46taz/ubyvrNMkve7PYZXEtHJV0EAfTAUBsK8F1nyBaFfMcPEsyfMjYifpFVHgKKSNtIwXz0u2gN5qToETVLzJbgqmytyhypnjSMTS52WVyIBWOfRcM2w5IaD_Gd8d3QU38DT5PczTF2OeQPSYJYAAQF1QphJzpr2HG3rxSlBNdVu_o18l6IPoCyAYknO5GOBcvnkAnDp8sSHN37iCGJj9V8hhPYkwnmZPOuAUICmc5IyRGMqup3I1r1_DVbpc0eDzW79f6Wy33NPMXJ4nUTBYVJ7RZOD2wOkROVukkpAkLZ_QlY1t6CJ6914cKHQVcDSA7VQGkiMeCQvPw9VmwAXgU-czS-UEJ0wP8KQWn8EIvBgqfUyc4mhZOalHwL6cME0TeGWtQWzytpNmFGQgARiUHBGcKmq7pj3Lt18Z2kh9QM93W1PduENog4hYPnMV6Fi0xtF0ZPbsDYklz-Ai4PSl_8g5VUGEHqLnPrBYwBGkFBBxWCKy9-Y5Iz_TDZJgbTQT56MTlcSvcMNc5GLP5QhkRDbJ1Jjy_IGdTa_w_mhEMf_kcYUVMLqy9658ZAw9eBScIZCKPi9mDVO_-3EulB04-9tTW908D9RLKHSOoxG80Lieqfx8UuTl3Vn74JaQ2CGveEWlJaQ-_r_miDj8MRTwKDlEZjInaqGzG8OpstBVSF_Dr8dxVB-cB3SY8ivNjLRc3kHglC5cMUVdIwRyANSl64TxLW3gKqKDcghcsGFE2Gh1qD7iH36lEyf7dWYsUVTzD3vLoeyn7JdkrAqT0Xx4gCLdIGw6YO2dhds0JvA4wVdc7cWt_D6-v9o45EAdFNSErdyyYpOGAcdvu8WWCJFAw2NHAxX0_2xfTPh2t0kMqARmqQQwPsAlvX2_CKIMUL33iLFNcQQiIi9OlKzMnTi0lPXIpmar5rWDO7-FqjyFjG-Li2uhrOucj0Qg6uu5mGT4xmmcfD7M8TXRl4xKUBTRc-Tg",
  "https://yandex-images.clstorage.net/98rFTX354/ddce46taz/ubyvrNMkve7PYZXEtHJV0EAfTAUBsK8F1nyBaFfMcPEsyfMjYifpFVHgKKSNtIwXz0u2gN5qToETVLzJbgqmytyhypnjSMTS52WVyIBWOfRcM2w5IaD_Gd8d3QU38DT5PczTF2OeQPSYJYAAQF1QphJzpr2HG3rxSlBNdVu_o18l6IPoCyAYknO5GOBcvnkAnDp8sSHN37iCGJj9V8hhPYkwnmZPOuAUICmc5IyRGMqup3I1r1_DVbpc0eDzW79f6Wy33NPMXJ4nUTBYVJ7RZOD2wOkROVukkpAkLZ_QlY1t6CJ6914cKHQVcDSA7VQGkiMeCQvPw9VmwAXgU-czS-UEJ0wP8KQWn8EIvBgqfUyc4mhZOalHwL6cME0TeGWtQWzytpNmFGQgARiUHBGcKmq7pj3Lt18Z2kh9QM93W1PduENog4hYPnMV6Fi0xtF0ZPbsDYklz-Ai4PSl_8g5VUGEHqLnPrBYwBGkFBBxWCKy9-Y5Iz_TDZJgbTQT56MTlcSvcMNc5GLP5QhkRDbJ1Jjy_IGdTa_w_mhEMf_kcYUVMLqy9658ZAw9eBScIZCKPi9mDVO_-3EulB04-9tTW908D9RLKHSOoxG80Lieqfx8UuTl3Vn74JaQ2CGveEWlJaQ-_r_miDj8MRTwKDlEZjInaqGzG8OpstBVSF_Dr8dxVB-cB3SY8ivNjLRc3kHglC5cMUVdIwRyANSl64TxLW3gKqKDcghcsGFE2Gh1qD7iH36lEyf7dWYsUVTzD3vLoeyn7JdkrAqT0Xx4gCLdIGw6YO2dhds0JvA4wVdc7cWt_D6-v9o45EAdFNSErdyyYpOGAcdvu8WWCJFAw2NHAxX0_2xfTPh2t0kMqARmqQQwPsAlvX2_CKIMUL33iLFNcQQiIi9OlKzMnTi0lPXIpmar5rWDO7-FqjyFjG-Li2uhrOucj0Qg6uu5mGT4xmmcfD7M8TXRl4xKUBTRc-Tg"
]

const DummyAudioData = [
  "https://www.computerhope.com/jargon/m/example.mp3",
  "https://www.computerhope.com/jargon/m/example.mp3",
  "https://www.computerhope.com/jargon/m/example.mp3"
]

const DummyVideoData = ["1.mkv", "1.mkv", "1.mkv"]

const StyledDataSubheader = styled.h2`
  width: 40%;
  grid-area: subheader;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  justify-self: center;
  margin-bottom: 30px;
`

const FilesOnBackendDataDiv = () => {
  return (
    <StyledActualDataDiv>
      <StyledDataSubheader>Images</StyledDataSubheader>
      {DummyImagesData.map((file: string, index: number) => (
        <FileCard file={file} key={index} type="image" />
      ))}
      <StyledDataSubheader>Audio</StyledDataSubheader>
      {DummyAudioData.map((file: string, index: number) => (
        <FileCard file={file} key={index} type="audio" />
      ))}
      <StyledDataSubheader>Video</StyledDataSubheader>
      {DummyVideoData.map((file: string, index: number) => (
        <FileCard file={file} key={index} type="video" />
      ))}
    </StyledActualDataDiv>
  )
}

export const ActualDataDiv = ({ mode }: { mode: string }) => {
  const returnCorrectDataDiv = () => {
    switch (mode) {
      case "one":
        return <UsersDataDiv />
      case "two":
        return <FilesOnBackendDataDiv />
      case "three":
        return <FilesOnBackendDataDiv />
    }
  }
  return <>{returnCorrectDataDiv()}</>
}
