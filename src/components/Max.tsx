import React, { FC } from 'react';
import { Paragraph, Link, Box } from 'theme-ui';

export const Max: FC<{}> = (): JSX.Element => {
  return (
    <Box
      sx={{
        bg: 'background',
        borderRadius: '2px',
        fontSize: 3,
        margin: 'auto',
        px: 2,
        py: 3,
        height: '100%',
      }}
    >
      <Paragraph>
        My name is Max, and
        <br />
        I'm a Software Engineer.
      </Paragraph>
      <Link
        sx={{ color: 'primary', bg: 'background', textDecoration: 'none' }}
        href='/'
      >
        Link example
      </Link>
    </Box>
  );
};
