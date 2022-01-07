import styled from "styled-components"

export const StyledButton = styled.div`
  width: 150px;
  height: 50px;
  background-color: #84a5cd;
  border-radius: 12px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
export const DeleteButton = styled(StyledButton)`
  grid-area: delete;
  margin-bottom: 0px;
  width: 100px;
  height: 35px;
`

export const UpdateButton = styled(StyledButton)`
  grid-area: update;
  margin-bottom: 0px;
  width: 100px;
  height: 35px;
`
