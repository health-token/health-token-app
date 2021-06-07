import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Connect from 'root/components/Connect'


export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Connect />
    </View>
  )
}
  
const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
