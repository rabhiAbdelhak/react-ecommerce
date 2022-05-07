import React , {useRef , useEffect} from 'react'
import styled from 'styled-components';
import { useComponentContext } from '../contexts/component_context';
import { useProductsContext } from '../contexts/products_context';
import Loading from './Loading';
import ProductActions from './ProductActions';

//local imports


const AddTocartComponent = () => {
    const {single_product : product, single_product_loading: loading} = useProductsContext()
    const {openAddToCart, closeAddToCart , AddToCartPosition:position} = useComponentContext()
    const componentRef = useRef(null)

    useEffect(() => {
        const {left, top} = position
        if(left !== '0' && top !== '0'){
            componentRef.current.style.transform = `translate(${left}px, ${top + 55}px)`;
            console.log('here i ma')
        }else{
            componentRef.current.style.transform = `translate(-100%, 50%)`;
        }
      console.log(left, top)
    }, [position])

    useEffect(() => {
      window.addEventListener('scroll' , closeAddToCart);

      return () => window.removeEventListener('scroll', closeAddToCart)
    }, [position])
  if(product)
  return (
    <Wrapper position = {position} ref = {componentRef}>
         {loading ? <Loading/> : <div><h4>{product.name}</h4>{product.stock > 0 ? <ProductActions bySide={true}/> : <h4>Not available !</h4>}</div>}
    </Wrapper>
  )
}

export default AddTocartComponent

const Wrapper = styled.div`
position: fixed;
background: var(--very-light-color);
border-radius: var(--radius);
top: 0;
left: -2px;
width: 180px;
padding: 15px;
transition: 0.3s;
z-index: 1010;
box-shadow: 0px 2px 5px var(--secondary-color);

h4{
    text-transform: capitalize;
    text-align: center;
    margin-bottom: -10px;
    color: var(--primary-color);
}

::before {
content: '';
position: absolute;
width: 0;
height: 0;
top: -20px;
left: 20px;
border-width: 10px;
border-style: solid;
border-color: transparent;
border-bottom-color: var(--very-light-color);
}
`