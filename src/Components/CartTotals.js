import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//local imports
import {useCartContext} from '../contexts/cart_context';
import { formatPrice } from '../Utilities/helpers';
import { mobile } from '../Utilities/Responsive';

const CartTotals = () => {
    const {total_price, total_items, shipping_fee} = useCartContext()
  return (
    <Wrapper>
        <div className='subtotals-bar'><span className='subtotals-bar-title'>Subotal : </span><p>{formatPrice(total_price)}</p></div>
        <div className='subtotals-bar'><span className='subtotals-bar-title'>shipping fee : </span><p>{formatPrice(shipping_fee)}</p></div>
        <hr/>
        <div className='totals-bar'><strong className='totals-bar-title'>Order Total : </strong><p>{formatPrice(total_price + shipping_fee)}</p></div>
        <Link className='btn totals-checkout-btn' to='/checkout'>Checkout</Link>
    </Wrapper>
  )
}

export default CartTotals

const Wrapper = styled.div`
min-width: 300px;
max-height: 250px;
border-radius: var(--radius);
border: 1px solid var(--neutral-light);
padding: 20px 15px;
${mobile({minWidth: '260px'})};


.subtotals-bar, 
.totals-bar{
display: flex;
align-items: center;
margin: 10px 0;
}

.subtotals-bar-title{
    flex:1;
    font-weight: 500;
    color: var(--secondary-color);
    text-transform: capitalize;
    
}

.totals-bar-title{
    flex:1;
    font-weight: 700;
    font-size:20px;
    color: var(--secondary-color);
    
}

.subtotals-bar p, 
.totals-bar p {
 font-weight: 500;
 font-size: 18px;
 color: var(--secondary-color);
}

.totals-checkout-btn{
    display: block;
    padding: 3px;
    color: white;
    background: black;
    width: 100%;
    text-align: center;
}

`