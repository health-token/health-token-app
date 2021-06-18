import React from 'react'
import ConnectWallet from 'components/ConnectWallet'
import PageHeader from 'components/svg/PageHeader'
import styled from 'styled-components/native'

const Screen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justifyContent: center;
  alignItems: center;
`

export default function HomeScreen({ navigation }) {
  return (
    <Screen>
      <PageHeader />
      <ConnectWallet navigation={navigation} />
    </Screen>
  )
}
 
