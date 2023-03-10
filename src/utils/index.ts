import { useEffect, useRef, useState } from 'react'

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
  const oldTitle = useRef(document.title).current

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    return () => {
      if (!keepOnMount) {
        document.title = oldTitle
      }
    }
  }, [keepOnMount, oldTitle])
}

export const resetRoute = () => (window.location.href = window.location.origin)

/**
 * 传入一个对象，和键集合，返回对应的对象中的键值对
 * @param obj
 * @param keys
 */
export const subset = <O extends { [key in string]: unknown }, K extends keyof O>(
  obj: O,
  keys: K[]
) => {
  const filteredEntries = Object.entries(obj).filter(([key]) => keys.includes(key as K))
  return Object.fromEntries(filteredEntries) as Pick<O, K>
}
