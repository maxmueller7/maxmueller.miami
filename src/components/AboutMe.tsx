import React, { FC } from 'react';
import { Link, Paragraph } from 'theme-ui';
import { MySitesLinks } from 'utils';

export const AboutMe: FC<{}> = (): JSX.Element => {
  return (
    <>
      <Paragraph variant={'styles.p'} sx={{ width: '70%' }}>
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
    </>
  );
};
