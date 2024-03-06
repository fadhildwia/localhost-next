import { BaseBadgeRequiredInterface } from '../Badge';

export type BaseInputInterface = {
  label?: string;
  labelStyles?: string;
  isRequired?: boolean;
  containerStyles?: string;
  variant?: 'line' | 'box';
  activeContainerStyles?: string;
  isDisabled?: boolean;
  isError?: boolean;
  prefixText?: string;
  prefixTextStyles?: string;
  prefixContainerStyles?: string;
  inputStyles?: string;
  isCleanable?: boolean;
  onClean?: () => void;
  rightIcon?: React.ReactNode;
  onClickRightIcon?: () => void;
  helperMessage?: string;
  helperMessageStyles?: string;
  errorMessage?: string;
  errorMessageStyles?: string;
} & BaseBadgeRequiredInterface &
  React.HTMLProps<HTMLInputElement>;
