import React from 'react'
import styled from 'styled-components/native'

const PostCardContainer = styled.View`
  width: 80%;
  height: 28.2%;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin-top: 25px;
  padding: 20px;
`

export default function PostCard({ image, post }) {
  return (
    <PostCardContainer>
      {image}
      {post}
    </PostCardContainer>
  )
}
