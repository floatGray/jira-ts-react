import { useState } from 'react'

interface State<D> {
  error: Error | null
  data: D | null
  state: 'idle' | 'loading' | 'error' | 'success'
}

const defaultInitialState: State<null> = {
  error: null,
  data: null,
  state: 'idle'
}
export const useAsync = <D>(initialState?: State<D>) => {
  const [state, setState] = useState<State<D>>({ ...defaultInitialState, ...initialState })
  const setData = (data: D) =>
    setState({
      data,
      state: 'success',
      error: null
    })
  const setError = (error: Error) =>
    setState({
      error,
      state: 'error',
      data: null
    })
  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error('请传入promise类型数据')
    }
    setState({ ...state, state: 'loading' })
    return promise
      .then((data) => {
        setData(data)
        return data
      })
      .catch((error) => {
        setError(error)
        return error
      })
  }

  return {
    isIdle: state.state === 'idle',
    isLoading: state.state === 'loading',
    isError: state.state === 'error',
    isSuccess: state.state === 'success',
    run,
    setData,
    setError,
    ...state
  }
}
