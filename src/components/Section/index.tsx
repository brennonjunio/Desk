import { Container } from "./styles"

interface SectionProps {
  title: string
  children?: React.ReactNode
}

export function Section({ children, title, ...rest }: SectionProps) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}