import React from 'react'
import ConnectWallet from 'components/ConnectWallet'
import PageHeader from 'components/svg/PageHeader'
import Screen from 'components/styled/Screen'

export default function HomeScreen({ navigation }) {
  return (
    <Screen>
      <PageHeader />
      <ConnectWallet navigation={navigation} />
    </Screen>
  )
}
 
