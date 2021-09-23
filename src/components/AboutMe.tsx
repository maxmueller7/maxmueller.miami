import React, { FC } from 'react';
import { Card, Image, Link, Paragraph } from 'theme-ui';
import { MySitesLinks } from 'utils';

interface IAboutMeProps {}

export const AboutMe: FC<IAboutMeProps> = (): JSX.Element => {
  return (
    <>
      <Card variant={'cards.aboutMe'}>
        <Paragraph
          variant={'styles.pLight'}
          sx={{
            width: '80%',
            textAlign: 'left',
            py: 4,
          }}
        >
          I am a creative person with an eye for clean, modern aesthetics, and
          passionate about front-end software development.
        </Paragraph>
        <Image
          sx={{
            maxHeight: '215px',
            width: 'auto',
            borderRadius: 4,
          }}
          alt='Max Mueller Profile Pic'
          src={`${MySitesLinks.GITHUB}.png?`}
        />
      </Card>
    </>
  );
};
