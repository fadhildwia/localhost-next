import React from 'react';

import { BaseText } from '@/components/Text';

import Form from './_components/Form';
import OtherLogin from './_components/OtherLogin';

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
        <Form />
        <OtherLogin />
        <div className="flex justify-center gap-1">
          <BaseText label="Don’t have an account yet?" />
          <BaseText label="Sign up" className="text-[#00C29F]" />
        </div>
      </div>
    </div>
  );
};

export default page;
