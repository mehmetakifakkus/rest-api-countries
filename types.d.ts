export interface Country {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  gini: Gini
  fifa: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  eng: Eng
  jam: Jam
}

export interface Eng {
  official: string
  common: string
}

export interface Jam {
  official: string
  common: string
}

export interface Currencies {
  JMD: Jmd
}

export interface Jmd {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  eng: string
  jam: string
}

export interface Translations {
  [key]: TranslationObject
}

export interface TranslationObject {
  official: string
  common: string
}

export interface Demonyms {
  eng: Eng2
  fra: Fra2
}

export interface Eng2 {
  f: string
  m: string
}

export interface Fra2 {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Gini {
  "2004": number
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface CoatOfArms {
  png: string
  svg: string
}

export interface CapitalInfo {
  latlng: number[]
}
