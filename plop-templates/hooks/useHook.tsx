import { useEffect, useState } from 'react'

import { I_{{hookName}}Options, T_{{hookName}}Data } from './{{hookName}}.types'

const {{hookName}} = ({ message }: I_{{hookName}}Options) => {
  const [data, setData] = useState<T_{{hookName}}Data>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        foo: message,
      })
      setLoading(false)
      setError(false)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [message])

  return {
    data,
    loading,
    error,
  }
}

export default {{hookName}}
