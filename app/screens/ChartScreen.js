import React, { useState, useEffect } from 'react'
import { getHolders, getBalances } from 'hooks'
import GreenScreen from 'components/GreenScreen'
import Overlay from 'components/styled/Overlay'
import styled from 'styled-components/native'
import StatCard from 'components/StatCard'
import Wallet from 'components/svg/Wallet'
import Change from 'components/svg/Change'
import Heart from 'components/svg/Heart'
import Volume from 'components/svg/Volume'

const GridOverlay = styled(Overlay)`
  padding: 30px 20px 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`

export default function ChartScreen({ navigation }) {
  const [data, setData] = useState({})
  const addr = '0xb7ADAd5f58aD063E1a8f174C61777b66872C8b65'  
  const contractAddr = '0x2bd7e7aed93d79d7d8a6d23dc7defc7d6b5d84ad'
  useEffect(async () => {
    const balances = await getBalances(addr)
    setData(data => ({ ...data, balances: balances }))
  }, [])
  useEffect(async () => {
    const holders = await getHolders(contractAddr)
    setData(data => ({ ...data, holders: holders }))
  }, [])
  return (
    <GreenScreen>
      <GridOverlay>
        <StatCard 
          image={<Wallet />}
          mainText={'$1,243.85'} 
          subText={'current holdings'}
        />
        <StatCard 
          image={<Change />}
          mainText={'$1,243.85'} 
          subText={'current holdings'}
        />
        <StatCard 
          image={<Heart />}
          mainText={'$1,243.85'} 
          subText={'current holdings'}
        />
        <StatCard 
          image={<Volume />}
          mainText={'$1,243.85'} 
          subText={'current holdings'}
        />
      </GridOverlay>
    </GreenScreen>
  )
}

