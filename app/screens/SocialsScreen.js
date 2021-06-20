import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import GreenScreen from 'components/GreenScreen'
import Overlay from 'components/styled/Overlay'
import TopStat from 'components/TopStat'
import StatCard from 'components/StatCard'
import Share from 'components/svg/Share'
import PostCard from 'components/PostCard'
import Twitter from 'components/svg/Twitter'
import Instagram from 'components/svg/Instagram'

const ColumnOverlay = styled(Overlay)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`

const ShareContainer = styled.View`
  position: absolute;
  top: 12.3%;
  right: 10%;
`

export default function SocialsScreen({ navigation }) {
  return (
    <GreenScreen>
      <TopStat 
        navigation={navigation}
        mainTextLeft={'Connect with us'}
        subTextLeft={'Drop us a message!'}
      />
      <ShareContainer>
        <Share />
      </ShareContainer>
      <ColumnOverlay>
        <PostCard image={<Twitter />} />
        <PostCard image={<Instagram />} />
      </ColumnOverlay>
    </GreenScreen>
  )
}

