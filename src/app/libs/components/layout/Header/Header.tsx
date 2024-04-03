'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from '@nextui-org/react';

import { icons } from '@/app/libs/utils/constants';
import { UserDropdown } from './UserDropdown';

export const Header: FC = () => {
  return (
    <Navbar maxWidth="full" className="shadow-md py-2">
      <NavbarContent justify="start">
        <NavbarItem>
          <NavbarBrand>
            <Link href="/" className="text-black">
              <Image src={icons.logo} alt="alt" width={60} height={60} />
              <p className="font-bold ml-2 text-2xl">ARTICLE.IO</p>
            </Link>
          </NavbarBrand>
        </NavbarItem>

        <NavbarItem>
          <Input label="Search" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="h-full flex items-center">
          <UserDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
