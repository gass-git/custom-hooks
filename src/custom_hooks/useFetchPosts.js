import { useState, useEffect } from 'react'

const useFetchPosts = (url) => {
  let [data, setData] = useState()

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data))
  }, [url])

  return { data }
}

export { useFetchPosts }