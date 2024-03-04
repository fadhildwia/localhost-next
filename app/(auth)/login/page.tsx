import React from 'react';

import { Input } from '@/components/Input';

const page = () => {
  return (
    <div
      className="flex min-h-screen w-full pt-20"
      style={{
        backgroundImage: 'url(/images/bg-login.png)',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div>
        <Input />
      </div>
    </div>
  );
};

export default page;
