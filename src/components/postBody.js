import React from 'react'
import useFetchPostBody from '../custom_hooks/useFetchPostBody'

export default function PostBody({ postId }) {
  const { postBodyData } = useFetchPostBody('https://jsonplaceholder.typicode.com/posts', postId)

  return (
    <p>{postBodyData}</p>
  )
}
