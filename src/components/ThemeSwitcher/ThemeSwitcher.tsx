import React, { FC, useState, useEffect, useReducer } from 'react';
import { Box, Button, useColorMode, Paragraph, Image } from 'theme-ui';
import { Countries, Flags, ICountryToFlag, Language } from 'utils/utils';

//TODO: build this dynamically
const countryAndFlagArray: ICountryToFlag[] = [
  { country: Countries.ARGENTINA, flag: Flags.AR, language: Language.AR },
  { country: Countries.BAHAMAS, flag: Flags.BS, language: Language.BS },
  { country: Countries.CHINA, flag: Flags.CN, language: Language.CN },
  { country: Countries.INDIA, flag: Flags.IN, language: Language.IN },
  { country: Countries.ISRAEL, flag: Flags.IL, language: Language.IL },
  { country: Countries.ITALY, flag: Flags.IT, language: Language.IT },
  { country: Countries.JAMAICA, flag: Flags.JM, language: Language.JM },
  { country: Countries.JAPAN, flag: Flags.JP, language: Language.JP },
  { country: Countries.QATAR, flag: Flags.QA, language: Language.QA },
  { country: Countries.SOUTHAFRICA, flag: Flags.ZA, language: Language.ZA },
  { country: Countries.UKRAINE, flag: Flags.UA, language: Language.UA },
  { country: Countries.US, flag: Flags.US, language: Language.US },
  { country: Countries.CDZR, flag: Flags.CDZR, language: Language.CDZR },
];

export const ThemeSwitcher: FC<{}> = (): JSX.Element => {
  const [countryMode, setCountryMode] = useColorMode();
  const [flagMode, setFlagMode] = useState('US');

  useEffect(() => {
    setCountryMode(Countries.US);
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
            src={`https://crwflags.com/fotw/images/${flagMode.charAt(
              0
            )}/${flagMode}.gif`}
          />
        </Box>
      </Button>
    </Box>
  );
};
