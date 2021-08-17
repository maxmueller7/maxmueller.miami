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
  US = 'unitedStates',
  CDZR = 'zaire',
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

export enum Language {
  AR = 'Hola',
  BS = 'Hi',
  CN = '你好',
  IL = 'שלום',
  IN = 'नमस्ते',
  IT = 'Ciao',
  JM = 'Hello',
  JP = 'やあ',
  QA = 'أهلا',
  UA = 'Привіт',
  US = 'Hello',
  ZA = 'Howzit',
  CDZR = 'Bonjour',
}

export interface ICountryToFlag {
  country: string;
  flag: string;
  language: string;
}
