import { Container, Li, Ul } from './styles.js'

export function Footer() {
  return (
    <Container>
      <div>
        <Ul>
          <Li>
            <strong>Software</strong>
          </Li>
          <Li>
            <a href="#">Windows</a>
          </Li>
          <Li>
            <a href="#">Microsoft 365</a>
          </Li>
          <Li>
            <a href="#">Teams</a>
          </Li>
          <Li>
            <a href="#">Outlook</a>
          </Li>
        </Ul>

        <Ul>
          <Li>
            <strong>Dispositivos</strong>
          </Li>
          <Li>
            <a href="#">Surface</a>
          </Li>
          <Li>
            <a href="#">Xbox</a>
          </Li>
          <Li>
            <a href="#">Acessórios</a>
          </Li>
          <Li>
            <a href="#">PCs</a>
          </Li>
        </Ul>

        <Ul>
          <Li>
            <strong>Suporte</strong>
          </Li>
          <Li>
            <a href="#">Central de ajuda</a>
          </Li>
          <Li>
            <a href="#">Downloads</a>
          </Li>
          <Li>
            <a href="#">Garantia</a>
          </Li>
          <Li>
            <a href="#">Contato</a>
          </Li>
        </Ul>

        <Ul>
          <Li>
            <strong>Empresa</strong>
          </Li>
          <Li>
            <a href="#">Sobre a Microsoft</a>
          </Li>
          <Li>
            <a href="#">Carreiras</a>
          </Li>
          <Li>
            <a href="#">Privacidade</a>
          </Li>
          <Li>
            <a href="#">Investidores</a>
          </Li>
        </Ul>
      </div>
    </Container>
  )
}
