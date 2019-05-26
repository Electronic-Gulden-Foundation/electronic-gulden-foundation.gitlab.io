export const messages = {
  pages: {
    index: {
      title: 'Het nieuwe <b>Nederlandse</b> geld',
      subtitle: 'uw financiële vrijheid!',
      laptopText: 'Citaat van een leuk artikel voor een goede eerste indruk.'
    }
  },
  ticker: {
    symbol: 'Symbol',
    price_btc: 'BTC',
    price_eur: 'EUR',
    market_cap_eur: 'Marktkapitalisatie',
    '24h_volume_eur': 'Volume (24h)'
  }
}

export const numberFormats = {
  'currency-eur': {
    style: 'currency',
    currency: 'EUR'
  },
  'currency-eur-detailed': {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3
  },
  'currency-btc': {
    style: 'currency',
    currency: 'BTC',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 8
  }
}
