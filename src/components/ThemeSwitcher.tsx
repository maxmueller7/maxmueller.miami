import React, { FC, useState, useEffect } from 'react';
import { Box, Button, useColorMode, Paragraph, Image } from 'theme-ui';
import { Countries, Flags, ICountryToFlag } from 'utils';

//TODO: build this dynamically
const countriesToFlags: ICountryToFlag[] = [
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
  }, []);

  return (
    <Box
      sx={{
        fontFamily: 'heading',
        fontSize: 2,
      }}
    >
      <Button
        sx={{
          width: 6,
          height: 3,
          color: 'primary',
          bg: 'background',
        }}
        onClick={(e) => {
          const countryToFlagIndex = countriesToFlags.findIndex(
            (country) => country.country === countryMode
          );
          const nextCountryToFlag =
            countriesToFlags[
              (countryToFlagIndex + 1) % countriesToFlags.length
            ];
          setCountryMode(nextCountryToFlag.country);
          setFlagMode(nextCountryToFlag.flag);
        }}
      >
        <Box
          sx={{
            display: 'flexbox',
            alignContent: 'flex-start',
          }}
        >
          <Paragraph
            sx={{
              fontSize: 1,
              display: 'inline',
            }}
          >
            {countryMode.charAt(0).toUpperCase() +
              countryMode
                .slice(1)
                .split(/(?=[A-Z])/)
                .join(' ')}
          </Paragraph>
          <Image
            sx={{ display: 'inline', width: '50%', height: '50%' }}
            src={`https://crwflags.com/fotw/images/${flagMode.charAt(
              0
            )}/${flagMode}.gif`}
          />
        </Box>
      </Button>
    </Box>
  );
};
