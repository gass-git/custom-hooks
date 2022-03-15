import React from 'react'
import useFetchPostTitle from '../custom_hooks/useFetchPostTitle'

export default function App({ postId }) {
  const { title } = useFetchPostTitle('https://jsonplaceholder.typicode.com/posts', postId)

  return <h2>{title}</h2>
}