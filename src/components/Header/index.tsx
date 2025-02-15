import { HeaderBar, HeaderContent, Logo, Text } from './styles'
import logo from '../../assets/images/logo.svg'
import vectorBackground from '../../assets/images/Vector.png';
import { Container } from '../../styles';

export type Props = {
  showText: boolean;
  cartItem?: number;
  restaurantLabel?: string;
  isProfilePage?: boolean;
}

const Header = ({ showText, cartItem, restaurantLabel, isProfilePage }: Props) => (
  <HeaderBar style={{ backgroundImage: `url(${vectorBackground})` }} showText={showText} cartItem={cartItem} restaurantLabel={restaurantLabel}>
    {isProfilePage ? (
      <Container>
        <HeaderContent>
          <p>{restaurantLabel}</p>
          <Logo src={logo} alt='eFood'/>
          <p>{cartItem} Produto(s) no carrinho</p>
        </HeaderContent>
      </Container>
    ) : (
      <>
        <HeaderContent>
          <p>{restaurantLabel}</p>
          <Logo src={logo} alt='eFood'/>
          <p>{cartItem}</p>
        </HeaderContent>
        {showText && (
          <Text showText={showText}>
            Viva experiências gastronômicas no conforto da sua casa
          </Text>
        )}
      </>
    )}
  </HeaderBar>
)

export default Header
