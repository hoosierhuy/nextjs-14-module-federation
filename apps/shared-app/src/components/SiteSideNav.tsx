import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faMessage,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

interface SiteSideNavProps {
  activePath: string;
}

export const SiteSideNav: React.FC<SiteSideNavProps> = ({ activePath }) => {
  return (
    <aside
      id="sidebar"
      className="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block"
    >
      <ul className="list-reset flex flex-col">
        <li
          className={cx('w-full h-full py-3 px-2 border-b border-light-borde', {
            'bg-white': activePath === '/dashboard',
          })}
        >
          <a
            href="/dashboard"
            className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-1" />
            Dashboard
          </a>
        </li>
        <li
          className={cx('w-full h-full py-3 px-2 border-b border-light-borde', {
            'bg-white': activePath === '/messages',
          })}
        >
          <a
            href="/messages"
            className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
          >
            <FontAwesomeIcon icon={faMessage} className="mr-1" />
            Messages
          </a>
        </li>
        <li
          className={cx('w-full h-full py-3 px-2 border-b border-light-borde', {
            'bg-white': activePath === '/settings',
          })}
        >
          <a
            href="/settings"
            className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
          >
            <FontAwesomeIcon icon={faAddressBook} className="mr-1" />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};
