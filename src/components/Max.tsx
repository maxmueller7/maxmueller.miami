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
      <Paragraph
        sx={{
          color: 'text',
        }}
      >
        I'm a Full-Stack Dev.
      </Paragraph>
      <Link
        sx={{ color: 'secondary', bg: 'background', textDecoration: 'none' }}
        href='/'
      >
        Link example
      </Link>
    </Box>
  );
};
