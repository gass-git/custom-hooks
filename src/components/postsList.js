import React, { Fragment } from 'react'
import { useFetchPosts } from '../custom_hooks/useFetchPosts'

export default function PostsList() {
  const { data } = useFetchPosts('https://jsonplaceholder.typicode.com/posts')

  return (
    <Fragment>
      {
        data !== undefined ?
          data.map(post => <p>{post.title}</p>)
          : <p>Loading...</p>
      }
    </Fragment>
  )
}
