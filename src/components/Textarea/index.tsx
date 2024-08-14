import { Container } from "./styles";

interface TextareaProps {
  value: string
}

export function Textarea({ value, ...rest }: TextareaProps) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}