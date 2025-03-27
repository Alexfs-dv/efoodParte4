import logo from '../../assets/images/logo.svg'
import instagram_icon from '../../assets/images/instagram_icon.svg'
import facebook_icon from '../../assets/images/facebook_icon.svg'
import twitter_icon from '../../assets/images/twitter_icon.svg'

import { Logo } from '../Header/styles'
import * as S from './styles'

const Footer = () => (
  <S.FooterBar>
    <div className="containerFooter">
      <Logo src={logo} alt="Logotipo" />
      <S.SocialList>
        <S.SocialItem>
          {' '}
          <img src={instagram_icon} alt="instagram" />
        </S.SocialItem>
        <S.SocialItem>
          {' '}
          <img src={facebook_icon} alt="facebook" />
        </S.SocialItem>
        <S.SocialItem>
          {' '}
          <img src={twitter_icon} alt="twitter" />
        </S.SocialItem>
      </S.SocialList>
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </S.FooterBar>
)
export default Footer
