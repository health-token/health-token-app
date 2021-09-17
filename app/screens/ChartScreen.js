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
import {
  CONTRACT_ADDRESS as contractAddr, 
  CHARITY_WALLET_ADDRESS as charityAddr,
  WALLET_ADDRESS as addr 
} from 'constants' 

const GridOverlay = styled(Overlay)`
  padding: 30px 20px 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`

export default function ChartScreen({ navigation }) {
  const [data, setData] = useState({})
  useEffect(function() {
    (async function() {
      const balances = await getBalances(addr)
      const charityBalances = await getBalances(charityAddr)
      const [change, volume] = await getChangeAndVolume()
      const items = balances.filter(
        i => i.contract_address === contractAddr
      )
      const charityItems = charityBalances.filter(
        i => i.contract_address === contractAddr
      )
      console.log(change)
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
    })()
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

