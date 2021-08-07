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
  UGANDA = 'uganda',
  UKRAINE = 'ukraine',
  USA = 'unitedStates',
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
