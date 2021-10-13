import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Flex } from 'theme-ui';
import { MySites, mySites } from 'utils';

interface ProfileLinksProps {
  flexFlowProp?: string;
}

export const ProfileLinks: FC<ProfileLinksProps> = ({
  flexFlowProp,
}): JSX.Element => {
  return (
    <ul style={{ padding: 0, margin: 0, border: 0 }}>
      <Flex
        sx={{
          display: 'flex',
          flexFlow: flexFlowProp || 'row',
        }}
      >
        {mySites.map((site: MySites) => (
          <Link
            sx={{
              bg: 'background',
              color: 'secondary',
              textDecoration: 'none',
              ml: 2,
            }}
            download={site.download}
            href={site.href}
            key={`site-link-key-{${site.href}}`}
            target='_blank'
            title={site.title}
          >
            <FontAwesomeIcon icon={site.icon} size={'lg'} />
          </Link>
        ))}
      </Flex>
    </ul>
  );
};
