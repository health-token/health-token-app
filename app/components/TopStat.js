import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Back from 'components/svg/Back'

const Container = styled.View`
  position: absolute;
  top: 6.5%;
  left: 10%;
`

const MainText = styled.Text`
  margin-top: 17px;
  font-size: 34px;
  line-height: 51px;
  color: #FFFFFF;
`

const SubText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
`

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

export default function TopStat({ 
  navigation, 
  mainTextLeft, 
  mainTextRight,
  subTextLeft,
  subTextRight,
  rightElement
}) {
  return (
    <Container>
      <TouchableOpacity onPress={navigation.goBack()}>
        <Back />
      </TouchableOpacity>
      <View>
        <Row>
          <MainText>{mainTextLeft}</MainText>
          {
            mainTextRight &&
            <MainText>{mainTextRight}</MainText>
          }
        </Row>
        <Row>
          <SubText>{subTextLeft}</SubText>
          {
            subTextRight &&
            <SubText>{subTextRight}</SubText>
          }
        </Row>
      </View>
    </Container>
  )
}

