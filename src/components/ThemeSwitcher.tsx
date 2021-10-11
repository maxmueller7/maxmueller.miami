import React, { FC, useState, useEffect } from 'react';
import { Button, useColorMode, Image, Flex } from 'theme-ui';
import { Countries, Flags, CountryToFlag, MySitesLinks } from 'utils';

//TODO: build this dynamically
const countryAndFlagArray: CountryToFlag[] = [
  { country: Countries.ARGENTINA, flag: Flags.AR },
  { country: Countries.BAHAMAS, flag: Flags.BS },
  { country: Countries.CHINA, flag: Flags.CN },
  { country: Countries.INDIA, flag: Flags.IN },
  { country: Countries.ISRAEL, flag: Flags.IL },
  { country: Countries.ITALY, flag: Flags.IT },
  { country: Countries.JAMAICA, flag: Flags.JM },
  { country: Countries.JAPAN, flag: Flags.JP },
  { country: Countries.QATAR, flag: Flags.QA },
  { country: Countries.SOUTHAFRICA, flag: Flags.ZA },
  { country: Countries.UKRAINE, flag: Flags.UA },
  { country: Countries.USA, flag: Flags.US },
  { country: Countries.ZAIRE, flag: Flags.CDZR },
];

interface ThemeSwitcherProps {}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({}): JSX.Element => {
  const [countryMode, setCountryMode] = useColorMode();
  const [flagMode, setFlagMode] = useState('US');

  useEffect(() => {
    setCountryMode(Countries.USA);
    setFlagMode(Flags.US);
  }, [setCountryMode]);

  const updateCountryAndFlagTheme = (): void => {
    const countryAndFlagIndex = countryAndFlagArray.findIndex(
      (country) => country.country === countryMode
    );
    const nextCountryAndFlagItem =
      countryAndFlagArray[
        (countryAndFlagIndex + 1) % countryAndFlagArray.length
      ];
    setCountryMode(nextCountryAndFlagItem.country);
    setFlagMode(nextCountryAndFlagItem.flag);
  };

  return (
    <Button
      variant={'styles.themeSwitcherButton'}
      onClick={(e) => {
        updateCountryAndFlagTheme();
      }}
    >
      <Flex
        sx={{
          alignContent: 'space-around',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {countryMode.charAt(0).toUpperCase() +
          countryMode
            .slice(1)
            .split(/(?=[A-Z])/)
            .join(' ')}
        <Image
          src={`${MySitesLinks.CRWFLAGS}/fotw/images/${flagMode.charAt(
            0
          )}/${flagMode}.gif`}
        />
      </Flex>
    </Button>
  );
};
