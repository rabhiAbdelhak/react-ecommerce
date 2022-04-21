import React from 'react'
import styled from 'styled-components';
import { FiLogOut, FiShoppingCart  } from 'react-icons/fi';

//local imports
import { useAppContext } from '../context';
import Navbar from './Navbar';
import {largescreen} from '../Utilities/Responsive'

const SideBar = () => {
  const {showSidebar} = useAppContext()
  return (
    <Wrapper show={showSidebar}>
        <Navbar/>
        <Menu className='links-container'>
            <ul className='links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Products</a></li>
                <li><a href='/'>Checkout</a></li>
            </ul>
        </Menu>
        <Actions>
            <CartIcon>
                Cart
                <FiShoppingCart className='icon'/>
                <Badge className='_flex_center'>0</Badge>
            </CartIcon>
            <Logout>
                Logout 
                <FiLogOut className='icon'/>
            </Logout>
        </Actions>
    </Wrapper>
  )
}

export default SideBar;

const Wrapper = styled.aside`
position: fixed;
top:0;
left:0;
height: 100vh;
width: 100%;
border-bottom: 8px solid var(--primary-color);
background: var(--neutral-dark);
transition: var(--transition);
transform: ${props => props.show ? 'translateY(0)' : 'translateY(-100%)'};
${largescreen({display: 'none'})};
header{
  min-height: 70px;
  background: var(--neutral-dark);
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 20px 40px;
}
`

const Menu = styled.div`
ul{
  width: 100%;
  margin: 30px 0;
}

a{
  padding: 10px 15px;
  color: var(--secondary-color);
  transtion: var(--transition);
}

a:hover{
  background:var(--neutral-light);
  color: var(--primary-color)
}
`

const Actions = styled.div`
display: flex;
justify-content: center;
gap: 20px;

.icon{
    font-size: 25px;
    margin-left: 5px;
}`

const CartIcon = styled.div`
position: relative;
font-weight: bold;
color: var(--secondary-color);
font-size: 20px;
cursor:pointer;`

const Badge = styled.span`
position: absolute;
background: var(--secondary-color);
width: 30px;
height:30px;
border-radius: 50%;
top:-20px;
right: -15px;
color: var(--neutral-light);
font-size: 13px;`

const Logout = styled.button`
background: transparent;
border: none;
color: var(--secondary-color);
font-size: 20px;
font-weight: bold;`

