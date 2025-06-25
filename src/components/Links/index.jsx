import { Container, LinksSection } from './styles.js'
import logoBw from '../../assets/logo-bw.svg'
import xboxLogo from '../../assets/xbox-bw.svg'
export function Links() {
  return (
    <Container>
      <LinksSection>
        <div>
          <img src={logoBw} alt="Logo microsoft 365" />
          <a href="#">Escolha seu Microsoft 365</a>
        </div>

        <div>
          <img src={xboxLogo} alt="Logo Xbox" />
          <a href="#">Escolha o seu Xbox</a>
        </div>

        <div>
          <img src={logoBw} alt="Logo" />
          <a href="#">Comprar o Windows 11</a>
        </div>
      </LinksSection>
    </Container>
  )
}
