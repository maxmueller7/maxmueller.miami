import React, { FC, useState, useEffect } from 'react';
import { Box, Button, useColorMode, Paragraph, Image } from 'theme-ui';
import { Countries, Flags, ICountryToFlag, MySitesLinks } from 'utils';

//TODO: build this dynamically
const countryAndFlagArray: ICountryToFlag[] = [
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

export const ThemeSwitcher: FC<{}> = (): JSX.Element => {
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
    <Box
      sx={{
        fontFamily: 'heading',
        fontSize: 2,
      }}
    >
      <Button
        sx={{
          backgroundColor: 'muted',
          borderRadius: 0,
          color: 'primary',
          p: 1,
        }}
        onClick={(e) => {
          updateCountryAndFlagTheme();
        }}
      >
        <Box
          sx={{
            alignContent: 'space-around',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Paragraph
            sx={{
              fontSize: 1,
              pr: 2,
            }}
          >
            {countryMode.charAt(0).toUpperCase() +
              countryMode
                .slice(1)
                .split(/(?=[A-Z])/)
                .join(' ')}
          </Paragraph>
          <Image
            sx={{ maxHeight: 2 }}
            src={`${MySitesLinks.CRWFLAGS}/fotw/images/${flagMode.charAt(
              0
            )}/${flagMode}.gif`}
          />
        </Box>
      </Button>
    </Box>
  );
};
