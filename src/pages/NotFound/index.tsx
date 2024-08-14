import { Container, Message, HomeLink } from './styles';

export function NotFound() {
  return (
    <Container>
      <Message>404 - Página não encontrada</Message>
      <HomeLink href="/">Voltar para a página inicial</HomeLink>
    </Container>
  );
}


