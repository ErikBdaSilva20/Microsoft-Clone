import copilot from '../../assets/1_copilot.jpeg'
import products from '../../assets/1_products.jpeg'
import { CarouselContent, Container } from './styles.js'

export function Carousel() {
  return (
    <Container
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={copilot}
            className="d-block w-100"
            alt="Microsoft Copilot"
          />
          <CarouselContent>
            <h2>Libere seu potencial com o Microsoft Copilot</h2>
            <p>
              O Microsoft Copilot é um assistente de IA que ajuda os usuários
              com tarefas de trabalho, oferecendo suporte em tempo real e
              sugestões inteligentes para aumentar a produtividade e
              criatividade.
            </p>
            <button>Faça Download do Copilot</button>
          </CarouselContent>
        </div>

        <div className="carousel-item">
          <img
            src={products}
            className="d-block w-100"
            alt="Microsoft Products"
          />

          <CarouselContent>
            <h2>Maximise o dia a dia com o Microsoft 365 </h2>
            <p>
              O Microsoft 365 é um conjunto de serviços e aplicativos de
              produtividade baseados na nuvem, oferecido como assinatura, que
              inclui as ferramentas do Office, como Word, Excel e PowerPoint,
              além de serviços como OneDrive e Teams. Ele oferece acesso a
              aplicativos sempre atualizados, armazenamento em nuvem e recursos
              adicionais, como inteligência artificial
            </p>
            <button>Para 1 pessoa</button>
            <a>Para até 6 pessoas</a>
          </CarouselContent>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </Container>
  )
}
