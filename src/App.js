import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostBody from './components/postBody'
import PostTitle from './components/postTitle'

export default function App() {
  const id = 3

  return (
    <>
      <PostTitle postId={id} />
      <PostBody postId={id} />
    </>
  )


}
