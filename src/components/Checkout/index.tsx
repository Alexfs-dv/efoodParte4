import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, clear } from '../../store/reducers/cart'

import { ProductButton as CheckoutButton } from '../Product/styles'
import { CheckoutSideBar, InputGroup } from './styles'
import { Overlay, CartContainer as CheckoutContainer } from '../Cart/styles'
import { getTotalPrice, parseToBrl } from '../../utils'
import Cart from '../Cart'

const Checkout = ({ onBackToCart }: { onBackToCart: () => void }) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)
  const [showCart, setShowCart] = useState(true)
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const openPayment = () => {
    setPayment(true)
  }

  const closeCart = () => {
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      residenceNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(4, 'Nome muito curto')
        .required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(10, 'O campo precisa ter 8 caracteres')
        .max(10, 'O campo precisa ter 8 caracteres')
        .required('Campo obrigatório'),
      residenceNumber: Yup.string().required('Campo obrigatório'),
      complement: Yup.string(),
      cardOwner: Yup.string()
        .min(4, 'Nome muito curto')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O campo precisa ter 16 caracteres')
        .max(19, 'O campo precisa ter 16 caracteres')
        .required('Campo obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .required('Campo obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('Campo obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter 4 caracteres')
        .max(2, 'O campo precisa ter 4 caracteres')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.cardapio.preco
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: 12,
            completment: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputError = (fildName: string) => {
    const isTouched = fildName in form.touched
    const isInvalid = fildName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      form.resetForm()
      setPayment(false)
    }
  }, [isSuccess])

  useEffect(() => {
    if (isOpen) {
      setPayment(false)
      setShowCart(true)
    }
  }, [isOpen])

  return (
    <>
      {showCart ? (
        <Cart onCheckout={() => setShowCart(false)} />
      ) : (
        <CheckoutContainer className={isOpen ? 'is-open' : ''}>
          <Overlay />
          <CheckoutSideBar>
            {isSuccess && data ? (
              <div>
                <h2>Pedido realizado - ID: {data.orderId}</h2>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço fornecido
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <CheckoutButton onClick={closeCart}>Concluir</CheckoutButton>
              </div>
            ) : (
              <>
                {!payment ? (
                  <>
                    <h2>Entrega</h2>
                    <form onSubmit={form.handleSubmit}>
                      <InputGroup $margintop="8px">
                        <label htmlFor="fullName">Quem irá receber</label>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={form.values.fullName || ''}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputError('fullName') ? 'error' : ''}
                        />
                      </InputGroup>
                      <InputGroup $margintop="8px">
                        <label htmlFor="address">Endereço</label>
                        <input
                          id="address"
                          type="text"
                          name="address"
                          value={form.values.address || ''}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputError('address') ? 'error' : ''}
                        />
                      </InputGroup>
                      <InputGroup $margintop="8px">
                        <label htmlFor="city">Cidade</label>
                        <input
                          id="city"
                          type="text"
                          name="city"
                          value={form.values.city || ''}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputError('city') ? 'error' : ''}
                        />
                      </InputGroup>
                      <span>
                        <InputGroup $margintop="8px" $maxwidth="155px">
                          <label htmlFor="zipCode">Cep</label>
                          <InputMask
                            id="zipCode"
                            type="text"
                            name="zipCode"
                            value={form.values.zipCode || ''}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('zipCode') ? 'error' : ''
                            }
                            mask="99.999-999"
                          />
                        </InputGroup>
                        <InputGroup $margintop="8px" $maxwidth="155px">
                          <label htmlFor="residenceNumber">Número</label>
                          <input
                            id="residenceNumber"
                            type="text"
                            name="residenceNumber"
                            value={form.values.residenceNumber || ''}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('residenceNumber') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                      </span>
                      <InputGroup $margintop="8px">
                        <label htmlFor="complement">
                          Complemento(opcional)
                        </label>
                        <input
                          id="complement"
                          type="text"
                          name="complement"
                          value={form.values.complement || ''}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputError('complement') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <CheckoutButton
                        type="submit"
                        title="Clique aqui para fazer o pagamento"
                        onClick={openPayment}
                      >
                        Continuar com o pagamento
                      </CheckoutButton>
                      <CheckoutButton
                        onClick={onBackToCart}
                        title="Clique aqui para voltar ao carrinho"
                        type="button"
                      >
                        Voltar para o carrinho
                      </CheckoutButton>
                    </form>
                  </>
                ) : (
                  <>
                    <h2>
                      Pagamento - Valor a pagar{' '}
                      {parseToBrl(getTotalPrice(items))}
                    </h2>
                    <form onSubmit={form.handleSubmit}>
                      <InputGroup $margintop="8px">
                        <label htmlFor="cardOwner">Nome no cartão</label>
                        <input
                          id="cardOwner"
                          type="text"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputError('cardOwner') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <span>
                        <InputGroup $margintop="8px" $maxwidth="228px">
                          <label htmlFor="cardNumber">Número do cartão</label>
                          <InputMask
                            id="cardNumber"
                            type="text"
                            name="cardNumber"
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('cardNumber') ? 'error' : ''
                            }
                            mask="9999 9999 9999 9999"
                          />
                        </InputGroup>
                        <InputGroup $margintop="8px" $maxwidth="87px">
                          <label htmlFor="cardCode">CVV</label>
                          <InputMask
                            id="cardCode"
                            type="text"
                            name="cardCode"
                            value={form.values.cardCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('cardCode') ? 'error' : ''
                            }
                            mask="999"
                          />
                        </InputGroup>
                      </span>
                      <span>
                        <InputGroup $margintop="8px" $maxwidth="155px">
                          <label htmlFor="expiresMonth">
                            Mes de vencimento
                          </label>
                          <InputMask
                            id="expiresMonth"
                            type="text"
                            name="expiresMonth"
                            value={form.values.expiresMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('expiresMonth') ? 'error' : ''
                            }
                            mask="99"
                          />
                        </InputGroup>
                        <InputGroup $margintop="8px" $maxwidth="155px">
                          <label htmlFor="expiresYear">Ano de vencimento</label>
                          <InputMask
                            id="expiresYear"
                            type="text"
                            name="expiresYear"
                            value={form.values.expiresYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputError('expiresYear') ? 'error' : ''
                            }
                            mask="99"
                          />
                        </InputGroup>
                      </span>
                      <CheckoutButton
                        type="submit"
                        title="Clique aqui para finalizar a compra"
                        disabled={isLoading}
                      >
                        {isLoading
                          ? 'Finalizando compra...'
                          : 'Finalizar compra'}
                      </CheckoutButton>
                      <CheckoutButton
                        title="Clique aqui para voltar na edição de endereço"
                        onClick={() => setPayment(false)}
                      >
                        Voltar para a edição de endereço
                      </CheckoutButton>
                    </form>
                  </>
                )}
              </>
            )}
          </CheckoutSideBar>
        </CheckoutContainer>
      )}
    </>
  )
}

export default Checkout
