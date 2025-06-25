import faceBook from '../../assets/5_facebook.jpeg'
import twitter from '../../assets/5_twitter.jpeg'
import youTube from '../../assets/5_youtube.jpeg'
import instagram from '../../assets/5_insta.jpeg'
import { Container, GoToStart, Li, Ul } from './styles.js'

export function SocialMedia() {
  return (
    <Container>
      <Ul>
        <Li>
          <p>Siga a Microsoft</p>
        </Li>

        <Li>
          <img src={faceBook} alt="Facebook" />
        </Li>

        <Li>
          <img src={twitter} alt="Twitter" />
        </Li>

        <Li>
          <img src={youTube} alt="youTube" />
        </Li>

        <Li>
          <img src={instagram} alt="instagram" />
        </Li>
      </Ul>

      <GoToStart>
        <a href="#start">
          <svg
            fill="#000000"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="arrow"
          >
            <title>arrow-line</title>
            <path
              d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z"
              class="clr-i-outline clr-i-outline-path-1"
            ></path>
            <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
          </svg>
          Voltar ao inicio
        </a>
      </GoToStart>
    </Container>
  )
}
