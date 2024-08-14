import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Brand, Container, Content } from "./styles";

import Logo from "../../assets/productivity.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>O TicDesk é a melhor maneira de praticidade </h1>
        <img src={Logo} alt="Logo" />
      </Brand>
      <Content>
        <Section title="TicDesk" >
          <Link to="/calls">
            <Button title="Abrir novo chamado" className="button" type="submit" />
          </Link>
          <Link to="/dashboard">
            <Button title="Dashboard" className="button" />
          </Link>
          <Link to="/manageCall">
            <Button title="Gerir Chamados" className="button" />
          </Link>
        </Section>
      </Content>
    </Container>
  )
}