// src/components/Input/index.tsx
import { forwardRef } from 'react';
import { InputHTMLAttributes, ForwardedRef } from 'react';
import { Container, ErrorMessage } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <Container>
        <input ref={ref} {...rest} />
      </Container>
      <div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </>
  );
});

Input.displayName = 'Input';

export { Input };
