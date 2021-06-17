import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ConnectWallet from 'components/ConnectWallet'


export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <ConnectWallet onPress={() => null} />
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
