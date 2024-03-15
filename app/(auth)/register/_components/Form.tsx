import React from 'react';

import { BaseButton } from '@/components/Button';
import { PasswordIcon, UserIcon } from '@/components/icons';
import { BaseInput } from '@/components/Input';
import { BaseText } from '@/components/Text';

const Form = () => {
  return (
    <>
      <BaseText label="Create Account" className="font-bold text-2xl mb-6" />
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
        <BaseInput
          containerStyles="p-2"
          placeholder="Confirm password"
          type="password"
          rightIcon={<PasswordIcon className="fill-gray-700 w-5 h-5" />}
        />
      </div>
      <div>
        <BaseButton
          label="Sign up"
          className="w-[200px] text-2xl px-14 py-4 hover:bg-[#00C29F] hover:border-[#00C29F] bg-[#00C29F] border border-[#00C29F] text-white"
          type="submit"
        />
      </div>
    </>
  );
};

export default Form;
