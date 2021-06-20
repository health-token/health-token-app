import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'
import { useWalletConnect } from '@walletconnect/react-native-dapp'

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

export default function ({ navigation }) {
  const connector = useWalletConnect()
  return (
    <TouchableOpacity 
    onPress={
      !connector.connected 
        ? () => connector.connect() 
        : () => navigation.navigate('Dashboard', {
          addr: connector.accounts[0] 
        })
    }>
        <Button>
          <ButtonText>
            {
              !connector.connected 
                ? 'connect wallet to continue' 
                : 'continue'
            }
          </ButtonText>
        </Button>
      </TouchableOpacity>
    )
}

