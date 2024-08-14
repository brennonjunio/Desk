import { ChevronLeft } from "lucide-react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Container, Cta, Form, SelectItems, StyledButton } from "./styles";
import { Link } from "react-router-dom";



export function Calls() {
  return (
    <Container>
      <Section title="Abra seu chamado">
        <Link to="/">
          <StyledButton className="buttonReturn"><ChevronLeft size={30} /></StyledButton></Link>
        <Form className="formulario">
          <SelectItems title="callsTypes">
            <option value="1">Chamado técnico</option>
            <option value="2">Chamado comercial</option>
            <option value="3">Chamado administrativo</option>
            <option value="4">Chamado financeiro</option>
          </SelectItems>
          <div className="inputs">
            <label htmlFor="responsavel">Responsável</label>
            <Input title="Responsável" />
          </div>
          <div className="inputs">
            <label htmlFor="responsavel">AnyDesk</label>
            <Input title="AnyDesk" />
          </div>
          <div className="inputs">
            <label htmlFor="responsavel">Assunto</label>
            <Input title="Assunto" />
          </div>
          <div className="inputs">
            <label htmlFor="responsavel">Descrição</label>
            <Textarea value="" />
          </div>
        </Form>
        <Button title="enviar" className="button" />

      </Section>

      <Cta />

    </Container>
  )
}