import { useCallback, useEffect, useState } from "react"
import { useHttp } from "../../hooks/use-http"
import { User } from "../../types-schemas/input-types"
import { StyledActualDataDiv } from "../generic-styled-components/styled-actual-data-div"
import { UserCard } from "../user-card"

export const UsersDataDiv = ({
  thereIsNewData,
  setThereIsNewData
}: {
  thereIsNewData: boolean
  setThereIsNewData: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { request } = useHttp()
  const [users, setUsers] = useState<User[]>([])

  const fetchData = useCallback(
    async (url: string) => {
      const rawData = await request(url, "GET")
      const data = await rawData?.json()
      setUsers(data)
    },
    [request]
  )

  useEffect(() => {
    if (thereIsNewData) fetchData("http://localhost:5000/api/json")
    setThereIsNewData(false)
  }, [fetchData, setThereIsNewData, thereIsNewData])
  return (
    <StyledActualDataDiv>
      {users.map((user) => (
        <UserCard
          setThereIsNewData={setThereIsNewData}
          user={user}
          key={user._id}
        />
      ))}
    </StyledActualDataDiv>
  )
}
