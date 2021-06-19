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

