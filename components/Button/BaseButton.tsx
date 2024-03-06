'use client';

import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import * as React from 'react';
import Ripples from 'react-ripples';
import { twMerge } from 'tailwind-merge';

import extractClasses from '@/utils/extractClasses';

import { cn } from '../../utils/cn';
import { BaseButtonInterface } from './BaseButton.type';

const styleVariants = cva('', {
  variants: {
    variant: {
      primary:
        'rounded border border-solid border-blue-400 bg-blue-400 text-white hover:bg-blue-700 hover:border-blue-700',
      secondary:
        'rounded border border-solid border-blue-400 bg-white font-normal text-xs text-blue-400 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-300',
      tertiary:
        'rounded bg-light-aliceBlue text-blue-400 text-sm font-normal hover:bg-blue-paleBlue hover:text-blue-700'
    }
  }
});

export const buttonVariants = cva('', {
  variants: {
    variant: {
      primary: styleVariants({ variant: 'primary' }),
      secondary: styleVariants({ variant: 'secondary' }),
      tertiary: styleVariants({ variant: 'tertiary' })
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
});

export const baseButtonVariants = cva(
  'flex flex-row items-center justify-center px-3 py-2 text-xs text-center font-poppins cursor-pointer'
);

const BaseButtonCn = React.forwardRef<React.ElementRef<'button'>, BaseButtonInterface>(
  (
    {
      className = '',
      label,
      isLoading,
      disabled,
      rightIcon,
      leftIcon,
      isDisabledRipple,
      labelStyles,
      ...props
    },
    ref
    // eslint-disable-next-line sonarjs/cognitive-complexity
  ) => {
    return (
      <>
        {isDisabledRipple ? (
          <button
            {...props}
            className={cn(baseButtonVariants({ className }))}
            ref={ref}
            disabled={disabled || isLoading}
            data-state={isLoading ? 'loading' : undefined}
          >
            {leftIcon}
            {label ? <div className={twMerge('leading-[14px]', labelStyles)}>{label}</div> : null}
            {rightIcon}
          </button>
        ) : (
          <Ripples
            className={twMerge(
              classNames(
                extractClasses(className, 'w-') || 'w-fit',
                extractClasses(className, 'h-') || 'h-fit',
                extractClasses(className, 'rounded') || 'rounded-'
              )
            )}
            placeholder={undefined}
          >
            <button
              {...props}
              className={cn(baseButtonVariants({ className }))}
              ref={ref}
              disabled={disabled || isLoading}
              data-state={isLoading ? 'loading' : undefined}
            >
              {leftIcon}
              {label ? <div className={twMerge('leading-[14px]', labelStyles)}>{label}</div> : null}
              {rightIcon}
            </button>
          </Ripples>
        )}
      </>
    );
  }
);

BaseButtonCn.displayName = 'BaseButton';

const BaseButton = ({ variant, className, ...props }: BaseButtonInterface) => (
  <BaseButtonCn className={cn(buttonVariants({ variant, className }))} {...props} />
);
BaseButton.displayName = 'Button';

export default BaseButton;
