import React from 'react'
import { FaWindowClose } from 'react-icons/fa';
import styled from 'styled-components';
import { useComponentContext } from '../contexts/component_context';

//local imports
import { useProductsContext } from '../contexts/products_context';
import { mobile, tablette } from '../Utilities/Responsive';
import ErrorComponent from './ErrorComponent';
import Loading from './Loading';
import ProductSlider from './ProductSlider';

const Modal = () => {
  const {single_product_loading: loading, single_product_error: error} = useProductsContext();
  const {showModal ,closeModal} = useComponentContext();
  
  return (
    <Wrapper className='_flex_center' show={showModal}>
        <button className='modal-close' onClick={closeModal}><FaWindowClose/></button>
        {!loading && !error ? <ProductSlider/> : loading ? <Loading/> : <ErrorComponent/>}
    </Wrapper>
  )
}

export default Modal

const Wrapper = styled.div`
position: fixed;
background: rgb(0 0 0 / 0.9);
top: 0;
left:0;
padding: 100px;
width: 100%;
height: 100vh;
transition: 0.6s;
transform: ${props => props.show ? 'scale(1)' : 'scale(0)'};
${mobile({padding: '10px'})};
${tablette({padding: '40px'})};
z-index: 1001;

.modal-close{
    position: absolute;
    top: 20px;
    right: 20px;
    color: tomato;
    background: transparent;
    font-size: 20px;
}
`