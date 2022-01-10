import { useState, useCallback } from "react"

export const useHttp = () => {
  // Состояние, показывающее прогресс загрузки данных, если false => данные полностью загружены
  const [loading, setLoading] = useState(false)
  // Состояние, показывающее возникшие при загрузке данных ошибки
  const [error, setError] = useState(null)

  // Функция запроса на сервер и получения ответа
  const request = useCallback(
    async (url: string, method = "GET", body = null, headers = {}) => {
      setLoading(true)
      try {
        const response: Response = await fetch(url, { method, headers, body })
        return response
      } catch (error: any) {
        setLoading(false)
        setError(error)
        console.log(error)
      }
    },
    []
  )

  // Функция очистки ошибки, вызывается обычно после вывода или обработки данных, имеющихся в состоянии error
  const clearError = useCallback(() => setError(null), [])

  return { loading, request, error, clearError }
}
