'use client';
import React, { FC } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spinner,
} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export const UserDropdown: FC = () => {
  const { status, data } = useSession();

  const handleSignOut = (): Promise<void> =>
    signOut({ redirect: true, callbackUrl: '/' });

  const handleSignInWithGoogle = async (): Promise<void> => {
    const res = await signIn('google');
  
    if (res?.ok) {
      toast('Sign in successfully!');
    } else if (res?.error) {
      toast(`Failed to sign in: ${res.error}`);
    }
  };

  return (
    <>
      {status === 'loading' && (
        <Spinner />
      )}

      {(status === 'authenticated' && data !== null) && (
        <Dropdown>
          <DropdownTrigger>
            <Button className="flex items-center h-full" variant="light">
              <Image
                src={String(data?.user?.image)}
                alt="avatar"
                width={50}
                height={50}
                className="rounded-full"
              />

              <div className="ml-2">
                <p className="pb-0 text-base font-medium text-left">
                  {data?.user?.name}
                </p>

                <span className="text-sm text-slate-500">
                  {data?.user?.email}
                </span>
              </div>

              <FontAwesomeIcon icon={faAngleDown} />
            </Button>
          </DropdownTrigger>

          <DropdownMenu>
            <DropdownItem key="sign-out" onClick={handleSignOut}>
              <span className="mr-3">Sign out</span>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}

      {status === 'unauthenticated' && (
        <Button variant="flat" onClick={handleSignInWithGoogle}>
          <FontAwesomeIcon icon={faGoogle} />
          <span>Sign in with google</span>
        </Button>
      )}
    </>
  );
};
