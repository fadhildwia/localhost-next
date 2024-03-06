import Image from 'next/image';
import React from 'react';

import { BaseButton } from '@/components/Button';
import { PasswordIcon, UserIcon } from '@/components/icons';
import { BaseInput } from '@/components/Input';
import { BaseText } from '@/components/Text';

const page = () => {
  return (
    <div
      className="min-h-screen w-full pt-20 flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url(/images/bg-login.png)',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="bg-white px-12 py-10 rounded w-1/2">
        <BaseText label="Sign in" className="font-bold text-2xl mb-6" />
        <div className="flex flex-col gap-3 mb-7">
          <BaseInput
            containerStyles="p-2"
            placeholder="Email address"
            rightIcon={<UserIcon className="fill-gray-700 w-5 h-5" />}
          />
          <BaseInput
            containerStyles="p-2"
            placeholder="Password"
            type="password"
            rightIcon={<PasswordIcon className="fill-gray-700 w-5 h-5" />}
          />
        </div>
        <div className="mb-[75px]">
          <BaseButton
            label="Login"
            className="w-[160px] text-2xl px-14 py-4 hover:bg-[#00C29F] hover:border-[#00C29F] bg-[#00C29F] border border-[#00C29F] text-white"
            type="submit"
          />
        </div>
        <BaseText label="Or sign in with" className="mb-3 text-center" />
        <div className="flex justify-center items-center mb-9">
          <div className="flex flex-col gap-4 px-[57px] py-5">
            <Image src="/images/google.png" alt="google" width={40} height={40} />
            <BaseText label="Google" className="text-[#787878]" />
          </div>
          <div className="flex flex-col gap-4 px-[57px] py-5">
            <Image src="/images/github.png" alt="github" width={40} height={40} />
            <BaseText label="Google" className="text-[#787878]" />
          </div>
        </div>
        <div className="flex justify-center gap-1">
          <BaseText label="Don’t have an account yet?" />
          <BaseText label="Sign up" className="text-[#00C29F]" />
        </div>
      </div>
    </div>
  );
};

export default page;
