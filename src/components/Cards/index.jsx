import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  ContainerCards,
  Link,
  WrapperCards,
} from './styles.js'
import xBoxSeriesX from '../../assets/2_xbox.jpeg'
import xBoxSeriesS from '../../assets/2_xbox-white.jpeg'
import GamePassXbox from '../../assets/2_games.jpeg'
import Windows11 from '../../assets/2_notebook.jpeg'

export function Cards() {
  return (
    <ContainerCards>
      <WrapperCards>
        <Card>
          <img src={xBoxSeriesX} className="card-img-top" alt="..." />
          <CardBody>
            <CardTitle>Xbox Series X</CardTitle>
            <CardText>
              O Xbox Series X é o console mais potente da Microsoft, com suporte
              a 4K, desempenho de última geração e mais espaço de armazenamento,
              feito pra entusiastas.
            </CardText>
          </CardBody>

          <Link href="#" className="btn btn-primary">
            Comprar Xbox Series X
          </Link>
        </Card>

        <Card>
          <img src={xBoxSeriesS} className="card-img-top" alt="..." />
          <CardBody>
            <CardTitle>Xbox Series S</CardTitle>
            <CardText>
              O Xbox Series S é um console compacto e acessível, com hardware de
              nova geração. Ele oferece carregamentos rápidos, suporte a até 120
              FPS resolução de até 1440p, compacto e poderoso.
            </CardText>
          </CardBody>

          <Link href="#" className="btn btn-primary">
            Comprar Xbox Series S
          </Link>
        </Card>

        <Card>
          <img src={GamePassXbox} className="card-img-top" alt="..." />
          <CardBody>
            <CardTitle>Xbox Game Pass Ultimate</CardTitle>
            <CardText>
              Jogue novos jogos desde o primeiro dia, Além disso, aproveite
              centenas de jogos de alta qualidade com amigos no console e no PC.
            </CardText>
          </CardBody>

          <Link href="#" className="btn btn-primary">
            Participe agora
          </Link>
        </Card>

        <Card>
          <img src={Windows11} className="card-img-top" alt="..." />
          <CardBody>
            <CardTitle>Projetado para a vida hoje e amanhâ</CardTitle>
            <CardText>
              A próxima geração de jogos. Seus objetivos. Amigos e família. O
              Windows 11 foi feito para aproximá-lo de tudo que você mais gosta.
            </CardText>
          </CardBody>

          <Link href="#" className="btn btn-primary">
            Veja se o seu PC está pronto
          </Link>
        </Card>
      </WrapperCards>
    </ContainerCards>
  )
}
