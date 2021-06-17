import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const style = {
  borderRadius: 15,
  width: 120,
  height: 50,
  borderColor: 'green',
  borderWidth: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default function ({ onPress }) {
  return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Text>🥰</Text>
      </TouchableOpacity>
    )
}
