export enum Countries {
  ARGENTINA = 'argentina',
  BAHAMAS = 'bahamas',
  CHINA = 'china',
  INDIA = 'india',
  ISRAEL = 'israel',
  ITALY = 'italy',
  JAMAICA = 'jamaica',
  JAPAN = 'japan',
  MEXICO = 'mexico',
  QATAR = 'qatar',
  SOUTHAFRICA = 'southAfrica',
  UGANDA = 'uganda',
  UKRAINE = 'ukraine',
  USA = 'usa',
}

export enum Flags {
  AR = 'AR',
  BS = 'BS',
  CN = 'CN',
  IN = 'IN',
  IL = 'IL',
  IT = 'IT',
  JM = 'JM',
  JP = 'JP',
  MX = 'MX',
  QA = 'QA',
  ZA = 'ZA',
  UG = 'UG',
  UA = 'UA',
  US = 'US',
}

export interface ICountryToFlag {
  country: string;
  flag: string;
}
