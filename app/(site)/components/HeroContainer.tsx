import React from 'react';

import { BaseButton } from '@/components/Button';
import { CalendarIcon, HomeIcon, SearchIcon } from '@/components/icons';
import { BaseInput } from '@/components/Input';

import styles from '../index.module.css';

const HeroContainer = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className="text-4xl font-bold mb-2">
        Find a <span className="text-[#00C29F]">host</span> for every journey
      </h1>
      <div className="mb-6 font-light text-xl">
        Discover the best local rental properties that fits your every travel needs
      </div>
      <div className="p-3 bg-white rounded-xl flex gap-3 items-center flex-wrap">
        <div className="w-[40%]">
          <BaseInput
            containerStyles="p-2"
            placeholder="Search"
            type="text"
            rightIcon={<HomeIcon className="fill-white w-6 h-6" />}
          />
        </div>
        <BaseInput
          containerStyles="p-2"
          placeholder="Check-in"
          type="text"
          rightIcon={<CalendarIcon className="fill-gray-700 w-8 h-8" />}
        />
        <BaseInput
          containerStyles="p-2"
          placeholder="Check-out"
          type="text"
          rightIcon={<CalendarIcon className="fill-gray-700 w-8 h-8" />}
        />
        <BaseButton
          label="Search"
          leftIcon={<SearchIcon className="fill-white" />}
          className="text-2xl px-14 py-3 items-center gap-4 hover:bg-[#00C29F] hover:border-[#00C29F] bg-[#00C29F] border border-[#00C29F] text-white"
          type="submit"
        />
      </div>
    </div>
  );
};

export default HeroContainer;
