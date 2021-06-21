import React, { useState, useEffect } from 'react'
import { getChangeAndVolume, getBalances } from 'hooks'
import GreenScreen from 'components/GreenScreen'
import Overlay from 'components/styled/Overlay'
import TopStat from 'components/TopStat'
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
  const charityAddr = '0xE941B72D6B0E9a826bb62fd718C01dBFa8CF8fFB'
  const contractAddr = '0x2bd7e7aed93d79d7d8a6d23dc7defc7d6b5d84ad'
  useEffect(async () => {
    const balances = await getBalances(addr)
    const charityBalances = await getBalances(charityAddr)
    const [change, volume] = await getChangeAndVolume()
    const items = balances.filter(
      i => i.contract_address === contractAddr
    )
    const charityItems = charityBalances.filter(
      i => i.contract_address === contractAddr
    )
    if (items.length) {
      const [item] = items
      const [charityItem] = charityItems
      setData(data => ({ 
        ...data, 
        balance: item.balance,
        quote: item.quote,
        rate: item.quote_rate,
        charityQuote: charityItem?.quote,
        change: change,
        volume: volume
      }))
    }
  }, [])
  return (
    <GreenScreen>
      <TopStat 
        navigation={navigation}
        mainTextLeft={
          data.rate 
              ? '$' + data.rate.toFixed(11) 
              : '-'
        }
        subTextLeft={'Current price'}
      />
      <GridOverlay>
        <StatCard 
          image={<Wallet />}
          mainText={
            data.quote 
              ? '$' + data.quote.toFixed(2)
              : '-'
          } 
          subText={'Current Holdings'}
        />
        <StatCard 
          image={<Change />}
          mainText={
            data.change
              ? data.change.toFixed(2) + '%'
              : '-'
          } 
          subText={'24h Change'}
        />
        <StatCard 
          image={<Heart />}
          mainText={
            data.charityQuote 
              ? '$' + data.charityQuote.toFixed(2)
              : '-'
          } 
          subText={'Donated to Charity'}
        />
        <StatCard 
          image={<Volume />}
          mainText={
            data.volume 
              ? '$' + data.volume.toFixed(2)
              : '-'
          } 
          subText={'24hr Volume'}
        />
      </GridOverlay>
    </GreenScreen>
  )
}

