import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Flex } from 'theme-ui';
import { IMySites, mySites } from 'utils';

interface IProfileLinksProps {}

export const ProfileLinks: FC<IProfileLinksProps> = (): JSX.Element => {
  return (
    <Flex
      sx={{
        justifyContent: ['center', 'flex-start'],
        alignItems: 'center',
        width: ['100vw', 4],
      }}
    >
      <aside style={{ width: '80%' }}>
        <ul style={{ padding: 0, margin: 0, border: 0 }}>
          <Flex
            sx={{
              alignItems: 'top',
              display: 'flex',
              flexFlow: ['row', 'column'],
              justifyContent: ['space-evenly', ''],
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
                <FontAwesomeIcon icon={site.icon} size={'xs'} />
              </Link>
            ))}
          </Flex>
        </ul>
      </aside>
    </Flex>
  );
};
