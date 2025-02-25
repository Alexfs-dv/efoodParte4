import { HeaderBar, HeaderContent, Logo, Text, LinkCart, StyledLink } from './styles'
import logo from '../../assets/images/logo.svg'
import vectorBackground from '../../assets/images/Vector.png';
import { Container } from '../../styles';

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

export type Props = {
  showText: boolean;
  cartItem?: number;
  restaurantLabel?: string;
  isProfilePage?: boolean;
}

const Header = ({ showText, cartItem, restaurantLabel, isProfilePage }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar style={{ backgroundImage: `url(${vectorBackground})` }} showText={showText} cartItem={cartItem} restaurantLabel={restaurantLabel}>
    {isProfilePage ? (
      <Container>
        <HeaderContent>
          <StyledLink to='/' >
            <p>{restaurantLabel}</p>
          </StyledLink>
          <Logo src={logo} alt='eFood'/>
          <LinkCart onClick={openCart}> {items.length} Produto(s) no carrinho</LinkCart>
        </HeaderContent>
      </Container>
    ) : (
      <>
        <HeaderContent>
        <StyledLink to='/' >
            <p>{restaurantLabel}</p>
          </StyledLink>
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
}

export default Header
