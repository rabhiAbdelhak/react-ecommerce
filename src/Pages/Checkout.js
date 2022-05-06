import React from 'react'
import styled from 'styled-components'

//local imports
import { PageTitle, StripeCheckout , EmptyCartMessage} from '../Components'
import { useCartContext } from '../contexts/cart_context'

const Checkout = () => {
  const {cart} = useCartContext();
  return (
    <Wrapper>
      { cart.length > 0 ? <StripeCheckout/> : <EmptyCartMessage/>}
    </Wrapper>
  )
}

export default Checkout

const Wrapper = styled.main`
display: flex;
align-items: center;
justify-content: center;
`