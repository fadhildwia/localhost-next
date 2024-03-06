import { VariantProps } from 'class-variance-authority';

import { baseButtonVariants } from './BaseButton';

export const ButtonVariantArr = ['primary', 'secondary', 'tertiary'] as const;
export type ButtonVariantType = (typeof ButtonVariantArr)[number];

export type BaseButtonInterface = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof baseButtonVariants> & {
    isLoading?: boolean;
    label: string;
    variant?: ButtonVariantType;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    isDisabledRipple?: boolean;
    labelStyles?: string;
  };
