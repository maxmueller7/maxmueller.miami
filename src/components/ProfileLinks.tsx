import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Box } from 'theme-ui';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MySitesLinks } from 'utils';

export const ProfileLinks: FC<{}> = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        px: 5,
      }}
    >
      <Link
        sx={{
          color: 'secondary',
          bg: 'background',
          textDecoration: 'none',
        }}
        href={MySitesLinks.LINKEDIN}
        target='_blank'
        title='Link to my LinkedIn Profile'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link
        sx={{
          color: 'secondary',
          bg: 'background',
          textDecoration: 'none',
        }}
        href={MySitesLinks.GITHUB}
        target='_blank'
        title='Link to my Github Profile'
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link
        sx={{
          color: 'secondary',
          bg: 'background',
          textDecoration: 'none',
        }}
        href='max-mueller-software-engineer.pdf'
        download
        target='_blank'
        title='Download My Resume'
      >
        <FontAwesomeIcon icon={faFilePdf} />
      </Link>
    </Box>
  );
};
