import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { Box, Image, Link, Paragraph } from 'theme-ui';
import { AboutMe } from 'components/AboutMe';
import { MySitesLinks } from 'utils';

export const WebPage: FC<{}> = (): JSX.Element => {
  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          bg: 'background',
          display: 'flex',
          fontSize: 3,
          height: '300px',
          justifyContent: 'center',
          margin: 'auto',
          px: '25%',
          py: 3,
        }}
      >
        <Box
          sx={{
            color: 'text',
            width: '80%',
          }}
        >
          <Paragraph>I'm a Full-Stack Software Engineer.</Paragraph>
          <hr style={{ width: '80%' }} />
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
        </Box>

        <Image
          sx={{
            width: '50%',
            borderRadius: 9999,
            maxHeight: '200px',
            maxWidth: '200px',
            border: (theme) => `solid 1px ${theme.colors?.primary}`,
          }}
          alt='Max Mueller Profile Pic'
          src={`${MySitesLinks.GITHUB}.png?size=200`}
        />
      </Box>
      <AboutMe />
    </>
  );
};
