import { twMerge } from 'tailwind-merge';

import { BaseText } from '../Text';
import { BaseBadgeRequiredInterface } from './BaseBadgeRequired.type';

const BaseBadgeRequired = ({
  labelRequired,
  labelRequiredStyles,
  containerRequiredStyles
}: BaseBadgeRequiredInterface) => {
  return (
    <div
      className={twMerge(
        'h-3 py-0 px-1 bg-dark-solitude flex items-center justify-center rounded-full',
        containerRequiredStyles
      )}
    >
      <BaseText
        label={labelRequired || 'Required'}
        className={twMerge('font-light text-[6px] italic text-dark-gumbo', labelRequiredStyles)}
      />
    </div>
  );
};

export default BaseBadgeRequired;
