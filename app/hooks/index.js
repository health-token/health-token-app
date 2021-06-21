const base = 'https://api.covalenthq.com/v1/56/'
const sign = `?key=ckey_de02376c7899415085c46421f0f`

export async function getHolders(contractAddr) {
  let dat = `tokens/${contractAddr}/token_holders/`
  const url = base + dat + sign
  const res = await fetch(url)
  const json = await res.json()
  return json.data.items
}

export async function getBalances(addr) {
  let dat = `address/${addr}/balances_v2/`
  const url = base + dat + sign
  const res = await fetch(url)
  const json = await res.json()
  return json.data.items
}

export async function getChangeAndVolume() {
  let url = 'https://api.coingecko.com/api/v3/coins/health-token/'
  const res = await fetch(url)
  const json = await res.json()
  return [
    json.market_data.price_change_percentage_24h, 
    json.market_data.total_volume.usd
  ]
}

