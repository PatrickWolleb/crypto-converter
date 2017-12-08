const BFX = require('bitfinex-api-node')
const API_KEY = 'xy5Cmy4Ss64Ooj6pK4WXdJk7aqb2r6ueP4gPbjOZ6vr'
const API_SECRET = 'EDIAcVMvFydIqflv4bv5h38F3BJ1eCVeQoqYtNslWXF'

const opts = {
  version: 2,
  transform: true
}

const bws = new BFX(API_KEY, API_SECRET, opts).ws

bws.on('auth', () => {
  console.log('authenticated')
})

bws.on('open', () => {
  bws.subscribeTicker('BTCUSD')
})

bws.on('ticker', (pair, ticker) => {
  console.log('Ticker:', ticker)
})

bws.on('error', console.error)