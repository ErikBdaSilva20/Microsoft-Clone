import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Container,
  ContainerCards,
  ForBusiness,
  Link,
  WrapperCards,
} from './styles'
import MicrosoftTeams from '../../assets/4_teams.jpeg'
import MicrosoftCopilot from '../../assets/4_copilot.jpeg'
import MicrosoftWindows11 from '../../assets/4_enterprise.jpeg'
import MicrosoftVisualStudio from '../../assets/4_visual_studio.jpeg'

export function CardsProducts() {
  return (
    <Container>
      <ForBusiness>Para negocios</ForBusiness>

      <ContainerCards>
        <WrapperCards>
          <Card>
            <img
              src={MicrosoftTeams}
              className="card-img-top"
              alt="Imagem Microsoft Teams"
            />
            <CardBody>
              <CardTitle>Microsoft Teams</CardTitle>
              <CardText>
                Reuniões, chat, colaboração em tempo real e armazenamento em
                nuvem compartilhado.
              </CardText>
            </CardBody>

            <Link href="#" className="btn btn-primary">
              Veja o melhor plano
            </Link>
          </Card>

          <Card>
            <img
              src={MicrosoftCopilot}
              className="card-img-top"
              alt="Imagem Microsoft Copilot"
            />
            <CardBody>
              <p className="new">Novo</p>
              <CardTitle>Copilot para o Microsoft 365</CardTitle>
              <CardText>
                Com a ia da Microsoft 365, o Copilot ajuda os usuários com
                tarefas de trabalho, oferecendo suporte em tempo real.
              </CardText>
            </CardBody>

            <Link href="#" className="btn btn-primary">
              Saiba mais
            </Link>
          </Card>

          <Card>
            <img
              src={MicrosoftWindows11}
              className="card-img-top"
              alt="Imagem Windows 11"
            />
            <CardBody>
              <CardTitle>Windows 11 para empresas</CardTitle>
              <CardText>
                Projetado para o trabalho híbrido. Eficiente para os
                funcionarios. Consistente para a TI. Seguro para todos
              </CardText>
            </CardBody>

            <Link href="#" className="btn btn-primary">
              Saiba mais
            </Link>
          </Card>

          <Card>
            <img
              src={MicrosoftVisualStudio}
              className="card-img-top"
              alt="Imagem Visual Studio"
            />
            <CardBody>
              <CardTitle>Visual Studio 2022</CardTitle>
              <CardText>
                Desenvolva aplicativos para Windows, macOS e Linux com a
                plataforma de desenvolvimento Visual Studio.
              </CardText>
            </CardBody>

            <Link href="#" className="btn btn-primary">
              Baixe o Visual Studio 2022
            </Link>
          </Card>
        </WrapperCards>
      </ContainerCards>
    </Container>
  )
}
