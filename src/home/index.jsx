import {
  Carousel,
  Links,
  Header,
  Cards,
  MicrosoftEdgeBanner,
  CardsProducts,
  SocialMedia,
  Footer,
} from '../components/'
import { Container, SocialContainer } from './styles.js'

export function Home() {
  return (
    <Container>
      <Header />
      <Carousel />

      <Links />
      <Cards />
      <MicrosoftEdgeBanner />
      <CardsProducts />

      <SocialContainer>
        <SocialMedia />
      </SocialContainer>

      <Footer />
    </Container>
  )
}
