import React, { useState, useEffect } from 'react'

export default function useFetchPostTitle(API_URL, postId) {
  const [title, updateTitle] = useState('')

  useEffect(() => {
    fetch(API_URL + '/' + postId)
      .then((resp) => resp.json())
      .then((jsonData) => updateTitle(jsonData.title))
  }, [API_URL, postId])

  return { title }
}
