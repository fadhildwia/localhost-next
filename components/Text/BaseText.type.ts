import { VariantProps } from 'class-variance-authority';
import React from 'react';

import { baseTextVariants } from './BaseText';

export const TextVariantArr = ['extra-large', 'large', 'medium', 'small', 'extra-small'] as const;
export type TextVariantType = (typeof TextVariantArr)[number];

export type BaseTextInterface = React.ComponentPropsWithoutRef<'p'> &
  VariantProps<typeof baseTextVariants> & {
    label: string;
    variant?: TextVariantType;
    color?: string;
  };
