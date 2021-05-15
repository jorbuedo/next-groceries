import { useState, useEffect } from 'react'
import { parseUriTemplate, parseUriTemplateWithQuery } from 'utils'

type useFetchOptions = {
  lazy?: boolean
  params?: Record<string, string>
  query?: Record<string, string>
} & RequestInit

type refetchOptions = Omit<useFetchOptions, 'lazy'> & {
  loadingOnRefetch?: boolean
}

type useFetchType<T> = {
  refetch: (options: refetchOptions) => void
  loading: boolean
  data?: T
  error?: { message: string } | Error
}

export const useFetch = <T extends unknown>(
  endpoint: string,
  { lazy, params: hookParams, query: hookQuery, ...options }: useFetchOptions,
): useFetchType<T> => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState()
  const [loading, setLoading] = useState<boolean>(false)

  const controller = new AbortController()
  const { signal } = controller

  const refetch = ({
    loadingOnRefetch,
    params = hookParams,
    query = hookQuery,
    ...newOptions
  }: refetchOptions = {}) => {
    if (loadingOnRefetch) {
      setLoading(true)
    }

    const uri = parseUriTemplateWithQuery(endpoint, { params, query })

    fetch(uri, { signal, ...options, ...newOptions })
      .then((res) => res.json())
      .then((dat) => setData(dat))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (!lazy) {
      refetch({ loadingOnRefetch: true })
    }
    return () => controller.abort()
  }, [])

  return { refetch, loading, data, error }
}
