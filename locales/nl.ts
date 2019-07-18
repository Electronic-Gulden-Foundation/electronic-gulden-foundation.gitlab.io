export const messages = {
	pages: {
		index: {
			title: 'Het nieuwe <b>Nederlandse</b> geld',
			subtitle: 'uw financiële vrijheid!',
			laptopText: 'Citaat van een leuk artikel voor een goede eerste indruk.',
			buttons: {
				backToOldWebsite: 'Terug naar oude website',
				downloadWallet: 'Download ({walletName})',
        downloadWalletOtherVersions: 'Andere versies'
			}
		}
	},
	exchanges: {
		title: 'Handelen'
	},
	ticker: {
		symbol: 'Symbol',
		price_btc: 'BTC',
		price_eur: 'EUR',
		market_cap_eur: 'Marktkapitalisatie',
		'24h_volume_eur': 'Volume (24h)'
	},
	socialMedia: {
		facebook: 'Facebook',
		reddit: 'Reddit',
		talkWithUs: 'Praat met ons via social media',
		twitter: 'Twitter',
		youtube: 'Youtube'
	},
	missionStatement: {
		title: 'Het doel van de e-Gulden',
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
	}
};

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
};
