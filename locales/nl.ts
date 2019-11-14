export const messages = {
  layouts: {
    default: {
      head: {
        titleTemplate: '%s - eGulden'
      }
    }
  },
  cookieLaw: {
    buttonText: 'Accepteren',
    message: 'Deze website maakt gebruik van cookies'
  },
  pages: {
    index: {
      head: {
        title: 'Het nieuwe Nederlandse geld'
      },
      title: 'Het nieuwe <b>Nederlandse</b> geld',
      subtitle: 'uw financiële vrijheid!',
      laptopText: 'Citaat van een leuk artikel voor een goede eerste indruk.',
      buttons: {
        backToOldWebsite: 'Terug naar oude website',
        downloadWallet: 'Download voor {walletName}',
        downloadWalletOtherVersions: 'Andere versies'
      }
    },
    news: {
      share: 'Dit artikel delen',
      notFound: 'Item niet gevonden :('
    }
  },
  exchanges: {
    title: 'Handelen'
  },
  footer: {
    blockexplorers: 'Block Explorers',
    copyRightText: 'De eGulden Community',
    exchanges: 'Handelen',
    helpImproveWebsite: 'Help mee deze website te verbeteren',
    onlineWallets: 'Online Wallets',
    pools: 'Mining Pools',
    socialMedia: 'Social Media',
    foundation: {
      title: 'De Foundation',
      kvk:
        'De Electronic Gulden Foundation is geregistreerd bij de kamer van koophandel onder nummer 61016764',
      contact: 'Neem contact op: support@egulden.org'
    }
  },
  ticker: {
    symbol: 'Symbol',
    priceBtc: 'BTC',
    priceEur: 'EUR',
    marketCapEur: 'Marktkapitalisatie',
    dayVolumeEur: 'Volume (24h)'
  },
  socialMedia: {
    talkWithUs: 'Praat met ons via social media'
  },
  missionStatement: {
    title: 'Het doel van de eGulden',
    statements: [
      {
        title: 'Nederlands geld voor de toekomst',
        text:
          'Een voor iedereen toegankelijk financieel netwerk met een Nederlands tintje'
      },
      {
        title: 'Vrijheid',
        text:
          'Doorbreekt het bankmonopolie en legt het beschikkingsrecht over geld terug bij de eigenaar van dat geld'
      },
      {
        title: 'Privacy',
        text:
          'De balans tussen de macht van de overheid en privacy als universeel recht van de mens is aan het verschuiven.'
      },
      {
        title: 'Geld zoals het bedoeld is',
        text:
          'De elektronische gulden is een moderne digitale munt. EFL verwijst naar de gouden Florijn als het échte geld waar gewicht en goudgehalte werd gegarandeerd.'
      },
      {
        title: 'Een betaal-, reken- en spaarmiddel voor de Nederlandse economie'
      },
      {
        title: 'Echt geld',
        text:
          'Niet te kopieren, vermeningvuldingen of te vervalsen. Eindeloos te delen, duurzaam, zuiver en oncensureerbaar'
      }
    ]
  },
  wallets: {
    title: 'Download je portemonnee'
  },
  recentNews: {
    title: 'Blog'
  }
}

export const numberFormats = {
  'currency-eur': {
    style: 'currency',
    currency: 'EUR'
  },
  'currency-eur-no-fractions': {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
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
