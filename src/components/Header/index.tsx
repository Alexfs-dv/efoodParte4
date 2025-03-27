import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import vectorBackground from '../../assets/images/Vector.png'
import { HashLink } from 'react-router-hash-link'

import { Container } from '../../styles'
import {
  HeaderBar,
  HeaderContent,
  Logo,
  Text,
  LinkCart,
  StyledLink
} from './styles'

export type Props = {
  $showtext: boolean
  $cartitem?: number
  $restaurantlabel?: string
  isProfilePage?: boolean
}

const Header = ({
  $showtext,
  $cartitem,
  $restaurantlabel,
  isProfilePage
}: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar
      style={{ backgroundImage: `url(${vectorBackground})` }}
      $showtext={$showtext}
      $cartitem={$cartitem}
      $restaurantlabel={$restaurantlabel}
    >
      {isProfilePage ? (
        <Container>
          <HeaderContent>
            <StyledLink to="/">
              <p>{$restaurantlabel}</p>
            </StyledLink>
            <Logo src={logo} alt="eFood" />
            <LinkCart onClick={openCart}>
              {' '}
              {items.length} Produto(s) no carrinho
            </LinkCart>
          </HeaderContent>
        </Container>
      ) : (
        <>
          <HeaderContent>
            <HashLink to="/">
              <p>{$restaurantlabel}</p>
            </HashLink>
            <Logo src={logo} alt="eFood" />
            <p>{$cartitem}</p>
          </HeaderContent>
          {$showtext && (
            <Text $showtext={$showtext}>
              Viva experiências gastronômicas no conforto da sua casa
            </Text>
          )}
        </>
      )}
    </HeaderBar>
  )
}

export default Header
