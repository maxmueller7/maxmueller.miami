import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Flex } from 'theme-ui';
import { IMySites, mySites } from 'utils';

interface IProfileLinksProps {}

export const ProfileLinks: FC<IProfileLinksProps> = ({}): JSX.Element => {
  return (
    <Flex
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '10%',
      }}
    >
      <aside>
        <ul style={{ padding: 0, margin: 0, border: 0 }}>
          <Flex
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexFlow: 'column',
              px: 3,
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
                id={`site-link-id-{${site.href}}`}
                target='_blank'
                title={site.title}
              >
                <FontAwesomeIcon icon={site.icon} />
              </Link>
            ))}
          </Flex>
        </ul>
      </aside>
    </Flex>
  );
};
