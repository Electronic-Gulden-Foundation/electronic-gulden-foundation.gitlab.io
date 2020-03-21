export interface TeamMember {
  name: string;
  photo: any;
  description: string;
}

const gerrit = {
  name: 'Gerrit Oerlemans',
  photo: require('./photo/gerrit.jpg'),
  description: `
Voor mij als wetenschapper en automatiseerder was eGulden vanaf 2014 een bitcoin-proeftuin. eGulden zelf is ondertussen
jaren wereldwijd getest en in het open-source domein bijgeschaafd. Daar heb ik mijn bijdrage aan geleverd. Momenteel is
eGulden een bewezen instrument en kan het door iedereen worden gebruikt om onderling waarde uit te wisselen. Voor mij is
het een uitdaging om te mogen meedoen op een nieuw speelveld dat zich  ontvouwt op het raakvlak tussen ethiek en
technische mogelijkheden. Dat zal de inrichting van onze samenleving drastisch beïnvloeden en hopelijk bijdragen aan een
zachte landing voor de catastrofe die momenteel gaande is. Wilt u daarover met mij van gedachten wisselen mail me dan
via de volgende link: [Gerrit](mailto:support@egulden.org?subject=Gerrit)
    `
}

const dennis = {
  name: 'Dennis Ruhe',
  photo: require('./photo/dennis.jpg'),
  description: `
Ik heb in 2014 gereageerd op de oproep om een stichting op te richten omdat ik me aangetrokken voelde tot het
Nederlandse karakter van de eGulden. Sindsdien heb ik mij voornamelijk bezig gehouden met het technische aspect van
de eGulden: het onderhouden van de Core wallet en de diensten eromheen. Ik zie de eGulden als een krachtige cryptomunt
in het beheer van de Nederlandse bevolking zelf. De mogelijkheden van moderne technologie zijn eindeloos en het is hoog
tijd om het eeuwenoude monetaire systeem eens te moderniseren. Heeft u een vraag en denkt u dat ik hem kan beantwoorden
mail me dan via de volgende link: [Dennis](mailto:support@egulden.org?subject=Dennis)
    `
}

const robert = {
  name: 'Robert',
  photo: require('./photo/robert.jpg'),
  description: `
In mijn dagelijks leven hou ik me bezig met connective housing in de vastgoedmarkt. Na een aantal jaar met
cryptocurrency bezig zijn geweest botste ik op EFL. Wat mij zo aanspreekt? Het community gedeelte dat ook in mijn
vakgebied erg belangrijk is. Toen mij de vraag werd gesteld “doe je mee?” dacht ik eerst waarom eigenlijk? Na een aantal
vergaderingen te hebben bijgewoond dacht ik, eigenlijk wel een leuke community. Waarom niet? Ondertussen zijn we tal van
leuke dingen aan het ontwikkelen waarop we samen trots kunnen zijn en mogelijk een inspiratie voor anderen. Dus nu aan
jullie de vraag: doe je mee? Heb je een vraag of spreekt mijn motivatie je aan mail me dan: [Robert](mailto:support@egulden.org?subject=Robert)
    `
}

const gerard = {
  name: 'Gerard',
  photo: require('./photo/gerard.jpg'),
  description: `
Mijn expertise ligt op het vlak van training en mentorschap. Voor april 2019 was ik eigenlijk totaal niet bekend met
cryptowereld. Via het internet kwam ik Nederlandse cryptomunten tegen die gebruik maakten van de blockchain en voor mij
sprong de eGulden eruit. Een niet-commerciële stichting die de eGulden en de blockchain via educatie onder de “gewone
Nederlandse burgers” bekend wil maken. Ondertussen heb heel veel kennis opgedaan, draai ik mee in de community van de
eGulden en heb ik meerdere ideeën in praktijk kunnen brengen. Ik ben te bereiken voor vragen via de volgende link:
[Gerard](mailto:support@egulden.org?subject=Gerard)
    `
}

const hans = {
  name: 'Hans',
  photo: require('./photo/hans.jpg'),
  description: `
Mijn arbeidsverleden bestaat uit een scala van werkzaamheden, maar tot voor kort was ik werkzaam in het onderwijs.
Ik ben erg geïnteresseerd in techniek en kan niet wachten om futuristische technische ontwikkelingen mee te kunnen
maken. De ongedwongen en open houding van de stichting en de nuchterheid over de economie en de crypto wereld spreken
mij erg aan. Zelf pik ik heel wat informatie op en kan ik mij met hulp van de gemeenschap verder ontwikkelen.
Misschien ook iets voor jou? Spreek mij gerust aan voor de mogelijkheden voor cryptogeld binnen het onderwijs via de
volgende link: [Hans](mailto:support@egulden.org?subject=Hans)
`
}

export default <TeamMember[]>[
  robert,
  hans,
  gerard,
  dennis,
  gerrit
]
