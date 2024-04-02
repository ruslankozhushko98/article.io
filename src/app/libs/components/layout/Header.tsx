'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Input } from '@nextui-org/react';

import { icons } from '@/app/libs/utils/constants';

export const Header: FC = () => {
  const pathname = usePathname();

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
        <NavbarItem className="h-full" isActive={pathname.includes('sign-up')}>
          <Link className="h-full text-xl" href="/sign-up">Sign up</Link>
        </NavbarItem>

        <NavbarItem className="h-full" isActive={pathname.includes('sign-in')}>
          <Link className="h-full text-xl" href="/sign-in">Sign in</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
