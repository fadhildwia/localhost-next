'use client';

import classNames from 'classnames';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { BaseBadgeRequired } from '../Badge';
import { CloseIcon } from '../icons';
import { BaseText } from '../Text';
import { BaseInputInterface } from './BaseInput.type';

export const BaseInput = ({
  label,
  labelStyles,
  isRequired,
  labelRequired,
  labelRequiredStyles,
  containerRequiredStyles,
  containerStyles,
  variant,
  activeContainerStyles,
  isDisabled,
  isError,
  prefixText,
  prefixContainerStyles,
  prefixTextStyles,
  inputStyles,
  isCleanable,
  onClean,
  rightIcon,
  onClickRightIcon,
  helperMessage,
  helperMessageStyles,
  errorMessage,
  errorMessageStyles,
  ...props
}: BaseInputInterface) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex flex-row items-end gap-x-1">
        {!!label && <BaseText label={label} className={twMerge('font-normal', labelStyles)} />}
        {isRequired && (
          <BaseBadgeRequired
            labelRequired={labelRequired}
            labelRequiredStyles={labelRequiredStyles}
            containerRequiredStyles={containerRequiredStyles}
          />
        )}
      </div>

      <label
        htmlFor="base-text-input"
        className={twMerge(
          classNames(
            twMerge(
              'flex flex-row items-center rounded border border-solid border-gray-400 bg-white overflow-hidden',
              containerStyles
            ),
            variant === 'line' && 'border-b border-t-0 border-x-0 rounded-none',
            isFocused && activeContainerStyles
              ? activeContainerStyles
              : isFocused
                ? 'border-blue-400'
                : undefined,
            isDisabled && 'border-gray-700',
            isError && 'border-red-700'
          )
        )}
      >
        {!!prefixText && (
          <div
            className={twMerge(
              'flex items-center justify-center h-[30px] px-2 bg-white',
              prefixContainerStyles
            )}
          >
            <BaseText
              label={prefixText || 'Prefix'}
              className={twMerge('text-xs font-normal text-gray-500', prefixTextStyles)}
            />
          </div>
        )}
        <input
          {...props}
          id="base-text-input"
          className={twMerge(
            'flex flex-1 h-[14px] font-poppins font-normal text-left text-black placeholder:text-gray-400 outline-none border-none p-0 m-2 leading-[14px]',
            inputStyles
          )}
          onKeyDown={(e) => {
            e.stopPropagation();
            props.onKeyDown?.(e);
          }}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          disabled={isDisabled}
        />

        {isCleanable && !!props.value && (
          <div
            className={classNames('cursor-pointer h-3 w-3 flex items-center justify-center mr-1')}
            onClick={(e) => {
              e.preventDefault();
              onClean?.();
            }}
          >
            <CloseIcon className="fill-gray-700" />
          </div>
        )}
        {!!rightIcon && (
          <div
            onClick={() => {
              onClickRightIcon?.();
            }}
            className={classNames(
              'flex items-center justify-center h-[30px] pr-2',
              onClickRightIcon ? 'cursor-pointer' : null
            )}
          >
            {rightIcon}
          </div>
        )}
      </label>

      {helperMessage && !isError && (
        <BaseText
          label={helperMessage}
          className={twMerge(
            'font-normal text-gray-700 text-[10px] inline-block',
            helperMessageStyles
          )}
        />
      )}

      {isError && !!errorMessage && (
        <BaseText
          label={errorMessage}
          className={twMerge(
            'font-normal text-red-700 text-[10px] inline-block',
            errorMessageStyles
          )}
        />
      )}
    </div>
  );
};
