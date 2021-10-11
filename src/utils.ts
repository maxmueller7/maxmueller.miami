import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faAt, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

export interface CountryToFlag {
  country: string;
  flag: string;
}

export enum MySitesLinks {
  CRWFLAGS = 'https://crwflags.com',
  EMAIL = 'mailto:hello@maxmueller.miami',
  GITHUB = 'https://github.com/maxmueller7',
  LINKEDIN = 'https://www.linkedin.com/in/maxmueller7',
  NAVA = 'https://www.nava.org',
  RESUME = 'max-mueller-software-engineer.pdf',
  TWITTER = 'https://twitter.com/muellermax7',
}

export interface MySites {
  href: MySitesLinks;
  title: string;
  download?: boolean;
  icon: IconDefinition;
}

export const mySites: MySites[] = [
  {
    href: MySitesLinks.LINKEDIN,
    title: 'Link to my LinkedIn Profile',
    download: false,
    icon: faLinkedin,
  },
  {
    href: MySitesLinks.GITHUB,
    title: 'Link to my Github Profile',
    download: false,
    icon: faGithub,
  },
  {
    href: MySitesLinks.TWITTER,
    title: 'Link to my Twitter Handle',
    download: false,
    icon: faHashtag,
  },
  {
    href: MySitesLinks.EMAIL,
    title: 'Send me an e-mail',
    download: false,
    icon: faAt,
  },
  {
    href: MySitesLinks.RESUME,
    title: 'Download my resume',
    download: true,
    icon: faFilePdf,
  },
];
