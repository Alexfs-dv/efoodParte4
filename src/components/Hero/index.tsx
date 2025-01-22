import backgorund_LaDolceVita from '../../assets/images/background_LaDolceVita.png'
import { Container } from '../../styles'
import { ContentHero, ImgHero, TextHero } from './styles'

export const Hero = () => (
  <ContentHero>
    <Container>
      <TextHero>
        <p>Italiana</p>
        <h4>La Dolce Vita Trattoria</h4>
      </TextHero>
    </Container>
    <ImgHero src={backgorund_LaDolceVita} alt="imagem do hero" />
  </ContentHero>
)
