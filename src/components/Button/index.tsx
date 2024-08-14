import { ButtonHTMLAttributes } from 'react';
import { Container } from "./styles";

type ButtonProps = {
  title?: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ title, onClick, ...rest }: ButtonProps) {
  return (
    <Container
      {...rest}
      onClick={onClick}
    >
      {title}
    </Container>
  );
}
