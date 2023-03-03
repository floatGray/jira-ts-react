import { useEffect, useState } from 'react'

export const isFalsy = (value: unknown) => (value === 0 ? false : !value)

export const isVoid = (value: unknown) => value === undefined || value === null || value === ''

export const cleanObject = (object: { [key: string]: unknown }) => {
  const res = { ...object }
  Object.keys(res).forEach((key) => {
    const value = res[key]
    if (isVoid(value)) {
      delete res[key]
    }
  })
  return res
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay])
  return debouncedValue
}

export const useDocumentTitle = (title: string, keepOnMount = true) => {
  const oldTitle = document.title

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    return () => {
      if (!keepOnMount) {
        document.title = oldTitle
      }
    }
  }, [])
}
