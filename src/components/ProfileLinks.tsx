import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Flex } from 'theme-ui';
import { IMySites, mySites } from 'utils';

interface IProfileLinksProps {}

export const ProfileLinks: FC<IProfileLinksProps> = (): JSX.Element => {
  return (
    <ul style={{ padding: 0 }}>
      <Flex
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {mySites.map((site: IMySites) => (
          <Link
            sx={{
              bg: 'background',
              color: 'secondary',
              textDecoration: 'none',
            }}
            download={site.download}
            href={site.href}
            key={`site-link-id-{${site.href}}`}
            target='_blank'
            title={site.title}
          >
            <FontAwesomeIcon icon={site.icon} size={'2x'} />
          </Link>
        ))}
      </Flex>
    </ul>
  );
};
