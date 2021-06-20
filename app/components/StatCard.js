import React from 'react'
import { View, Dimensions } from 'react-native'
import styled from 'styled-components/native'

const Card = styled.View`
  width: 37%;
  height: ${0.37*Dimensions.get('window').width};
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  padding: 22px 10px 22px;
  margin: auto;
  margin-bottom: 20px;
`

const MainText = styled.Text`
  font-size: 24px;
  line-height: 36px;
  color: #3B3B3B;
`

const SubText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #3B3B3B;
`

export default function ({ image, mainText, subText }) {
  return (
    <Card>
      {image}  
      <View>
        <MainText>{mainText}</MainText>
        <SubText>{subText}</SubText>
      </View>
    </Card>
  )
}

