import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../utils/cn';
import { BaseTextInterface } from './BaseText.type';

const styleVariants = cva('', {
  variants: {
    variant: {
      'extra-large': 'font-medium text-lg',
      large: 'font-medium text-base',
      medium: 'font-medium text-sm',
      small: 'font-medium text-xs',
      'extra-small': 'font-medium text-[10px]'
    }
  }
});

export const buttonVariants = cva('', {
  variants: {
    variant: {
      'extra-large': styleVariants({ variant: 'extra-large' }),
      large: styleVariants({ variant: 'large' }),
      medium: styleVariants({ variant: 'medium' }),
      small: styleVariants({ variant: 'small' }),
      'extra-small': styleVariants({ variant: 'extra-small' })
    }
  },
  defaultVariants: {
    variant: 'medium'
  }
});

export const baseTextVariants = cva('font-poppins leading-none font-normal');

const BaseTextCn = React.forwardRef<React.ElementRef<'p'>, BaseTextInterface>(
  ({ className, label, color }, ref) => {
    return (
      <p
        className={cn(baseTextVariants({ className }))}
        style={color ? { color } : undefined}
        ref={ref}
      >
        {label}
      </p>
    );
  }
);

BaseTextCn.displayName = 'BaseText';

const BaseText = ({ variant, className, ...props }: BaseTextInterface) => (
  <>
    <BaseTextCn className={cn(buttonVariants({ variant, className }))} {...props} />
  </>
);
BaseText.displayName = 'Text';

export default BaseText;
