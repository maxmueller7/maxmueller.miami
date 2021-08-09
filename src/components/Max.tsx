import React, { FC } from 'react';
import { Paragraph, Link, Box } from 'theme-ui';

export const Max: FC<{}> = (): JSX.Element => {
  return (
    <Box
      sx={{
        bg: 'background',
        fontSize: 3,
        margin: 'auto',
        px: 2,
        py: 3,
        height: '100%',
      }}
    >
      <Paragraph
        sx={{
          color: 'text',
        }}
      >
        I'm a Full-Stack Dev. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <Link
          sx={{ color: 'secondary', bg: 'background', textDecoration: 'none' }}
          href='/'
        >
          {' '}
          Lobortis elementum nibh tellus molestie{' '}
        </Link>
        nunc non blandit massa enim. Natoque penatibus et magnis dis parturient.
      </Paragraph>
    </Box>
  );
};
