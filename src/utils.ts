export enum Countries {
  ARGENTINA = 'argentina',
  BAHAMAS = 'bahamas',
  CHINA = 'china',
  INDIA = 'india',
  ISRAEL = 'israel',
  ITALY = 'italy',
  JAMAICA = 'jamaica',
  JAPAN = 'japan',
  QATAR = 'qatar',
  SOUTHAFRICA = 'southAfrica',
  UKRAINE = 'ukraine',
  USA = 'unitedStates',
  ZAIRE = 'zaire',
}

export enum Flags {
  AR = 'AR',
  BS = 'BS',
  CN = 'CN',
  IL = 'IL',
  IN = 'IN',
  IT = 'IT',
  JM = 'JM',
  JP = 'JP',
  QA = 'QA',
  UA = 'UA',
  US = 'US',
  ZA = 'ZA',
  CDZR = 'CD-ZR',
}

export enum HelloPolyglot {
  AR = 'Hola',
  JP = 'こんにちは',
  CDZR = 'Bonjour',
}

export interface ICountryToFlag {
  country: string;
  flag: string;
}
