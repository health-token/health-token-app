import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Text } from 'react-native'

const Button = styled.View`
  background: #303030;
  border-radius: 2px;
  width: 333px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
  text-transform: uppercase;
  color: #ffffff; 
`

export default function ({ onPress, text }) {
  return (
      <TouchableOpacity onPress={onPress}>
        <Button>
          <ButtonText>
            {text}
          </ButtonText>
        </Button>
      </TouchableOpacity>
    )
}

