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
  borders: string[]
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
  [key: string]: NativeNameProps
}

export interface NativeNameProps {
  official: string
  common: string
}
export interface Currencies {
  [key: string]: CurrenciesProps
}

export interface CurrenciesProps {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  [key: string]: string
}

export interface Translations {
  [key]: TranslationObject
}

export interface TranslationObject {
  official: string
  common: string
}

export interface Demonyms {
  eng: DemonymsProps
  fra: DemonymsProps
}

export interface DemonymsProps {
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
