import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { forwardRef, memo } from 'react';

interface TextInputProps extends InputProps {
  name: string;
  label: string;
  error?: string;
  helperText?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  name,
  label,
  error,
  helperText,
  ...inputProps
}, ref) => (
  <FormControl marginBottom={4} isInvalid={!!error}>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <Input
      {...inputProps}
      id={name}
      name={name}
      ref={ref}
      isInvalid={!!error}
    />
    <FormErrorMessage>{error}</FormErrorMessage>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
));

export default memo(TextInput);
