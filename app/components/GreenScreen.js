import React from 'react'
import Screen from 'components/styled/Screen'
import { LinearGradient } from 'expo-linear-gradient'

export default function GreenScreen({ children }) {
  return (
    <Screen style={{backgroundColor:'#5AD710'}}>
      {children}
    </Screen>
  )
}

