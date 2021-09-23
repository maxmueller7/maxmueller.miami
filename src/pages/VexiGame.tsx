import React from 'react';
import { Card, Link, Paragraph } from 'theme-ui';
import { MySitesLinks } from 'utils';

const VexiGame = () => {
  return (
    <>
      <Card variant={'cards.regular'}>
        <Paragraph
          variant={'styles.pLight'}
          sx={{
            width: '80%',
            textAlign: 'left',
            py: 4,
          }}
        >
          I am a creative person with an eye for clean, modern aesthetics, and
          passionate about front-end software development. During my free time,
          I like to designing fictional flags, or re-designing existing ones.
          I'm an avid vexillologist and a proud member of{' '}
          <Link
            href={MySitesLinks.NAVA}
            target='_blank'
            title="Link to NAVA's home page"
          >
            NAVA
          </Link>
          , the North American Vexillological Association. You can checkout the
          <Link
            href={`${MySitesLinks.GITHUB}/maxmueller.miami/blob/main/README.md`}
            target='_blank'
            title='Link to README.md'
          >
            {' '}
            README
          </Link>{' '}
          for this site, and discover which flag is my favorite one.
        </Paragraph>
      </Card>
    </>
  );
};

export default VexiGame;
