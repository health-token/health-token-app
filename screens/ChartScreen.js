import React, { useState, useEffect } from 'react'
import { getHolders, getBalances } from 'hooks'
import Screen from 'components/styled/Screen'

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
    <Screen>
    </Screen>
  )
}

