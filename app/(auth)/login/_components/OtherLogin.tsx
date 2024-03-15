import Image from 'next/image';
import React from 'react';

import { BaseText } from '@/components/Text';

const OtherLogin = () => {
  return (
    <>
      <div className="my-9 border border-t"></div>
      <BaseText label="Or sign in with" className="mb-3 text-center" />
      <div className="flex justify-center items-center gap-2 mb-9">
        <div className="flex flex-col gap-4 h-[125px] w-[155px] bg-[#F8F8F8] justify-center items-center py-5">
          <Image src="/images/google.png" alt="google" width={40} height={40} />
          <BaseText label="Google" className="text-[#787878]" />
        </div>
        <div className="flex flex-col gap-4 h-[125px] w-[155px] bg-[#F8F8F8] justify-center items-center py-5">
          <Image src="/images/github.png" alt="github" width={40} height={40} />
          <BaseText label="Google" className="text-[#787878]" />
        </div>
      </div>
    </>
  );
};

export default OtherLogin;
