import MicrosoftEdgeLogo from '../../assets/3_edge.jpeg'
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Container,
  Link,
} from './styles.js'

export function MicrosoftEdgeBanner() {
  return (
    <Container>
      <img src={MicrosoftEdgeLogo} alt="Logo Microsoft Edge" />

      <Card>
        <CardBody>
          <CardTitle>Microsoft edge</CardTitle>
          <CardText>
            Desempenho exepcional com mais privacidade, mais velocidade e mais
            qualidade durante a navegação
          </CardText>
        </CardBody>
        <Link href="#" className="btn btn-primary">
          Baixe agora
        </Link>
      </Card>
    </Container>
  )
}
