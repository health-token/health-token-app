import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Text } from 'react-native'
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

export default function () {
  const connector = useWalletConnect()
  return (
      <TouchableOpacity onPress={!connector.connected ? () => connector.connect() : () => console.log('con')}>
        <Button>
          <ButtonText>
            connect wallet to get started 
          </ButtonText>
        </Button>
      </TouchableOpacity>
    )
}

