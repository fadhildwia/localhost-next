'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { AccountIcon, NotificationIcon } from '../icons';

export const Header = () => {
  const router = useRouter();
  const [isLogin] = useState<boolean>(false);

  return (
    <div className="h-20 bg-white fixed w-full flex row items-center justify-between px-20 py-4">
      <div onClick={() => router.push('/')}>
        <Image src="/images/logo.svg" alt="logo" width={150} height={40} />
      </div>
      <div className="flex row gap-8 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/">Stays</Link>
        <Link href="/">Become a host</Link>
      </div>
      {isLogin && (
        <div className="flex row gap-5 items-center">
          <NotificationIcon />
          <AccountIcon />
        </div>
      )}
    </div>
  );
};
