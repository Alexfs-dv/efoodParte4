import { Container } from '../../styles'
import { ContentHero } from './styles'

type Props = {
  tipo: string
  titulo: string
  imagem: string
}

export const Hero = ({ tipo, titulo, imagem }: Props) => (
  <ContentHero style={{ backgroundImage: `url(${imagem})` }}>
    <Container>
      <div>
        <p>{tipo}</p>
        <h4>{titulo}</h4>
      </div>
    </Container>
  </ContentHero>
)
