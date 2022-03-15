import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App(API_URL, postId) {
  const [postBodyData, setPostBody] = useState('')

  useEffect(() => {
    axios.get(API_URL + '/' + postId)
      .then((resp) => setPostBody(resp.data.body))
      .catch((error) => console.log(error))
  })

  return { postBodyData }
}