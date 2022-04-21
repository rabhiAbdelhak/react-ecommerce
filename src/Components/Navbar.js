import React from "react";
import styled from "styled-components";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { FaBars, FaWindowClose } from "react-icons/fa";

//local imports
import { tablette } from "../Utilities/Responsive";
import { useAppContext } from "../context";
import {largescreen} from '../Utilities/Responsive';

const Navbar = () => {
  const { showSidebar, setShowSidebar } = useAppContext();
  return (
    <Wrapper>
      <Logo>
        <span>
          Shoo<strong>Ping</strong>
        </span>
      </Logo>
      <Menu className="links-container">
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Checkout</a>
          </li>
        </ul>
      </Menu>
      <Actions>
        <CartIcon>
          Cart
          <FiShoppingCart className="icon" />
          <Badge className="_flex_center">0</Badge>
        </CartIcon>
        <Logout>
          Logout
          <FiLogOut className="icon" />
        </Logout>
      </Actions>
      {!showSidebar ? (
        <ToggleMenu
          className="_flex_center"
          onClick={() => setShowSidebar(true)}
        >
          <FaBars />
        </ToggleMenu>
      ) : (
        <CloseMenu
          className="_flex_center"
          onClick={() => setShowSidebar(false)}
        >
          <FaWindowClose />
        </CloseMenu>
      )}
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.header`
  min-height: 70px;
  background: var(--neutral-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 0px 3px 5px #cb0040;
  font-family: "Ms Madi", cursive;
  strong {
    color: #cb0040;
  }
`;
const Menu = styled.div`
  ul {
    display: flex;
    align-items: center;
  }

  a {
    padding: 7px 15px;
    color: var(--secondary-color);
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 1.5px;
    transition: var(--transition);
    position: relative;
  }

  a:hover {
    background: var(--neutral-light);
    color: var(--primary-color);
  }

  a::before {
    content: "";
    width: 0;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--primary-color);
    transition: var(--transition);
  }

  a:hover::before {
    width: 100%;
  }

  ${tablette({ display: "none" })}
`;
const Actions = styled.div`
  display: flex;
  gap: 20px;

  .icon {
    font-size: 25px;
    margin-left: 5px;
  }
  ${tablette({ display: "none" })}
`;

const CartIcon = styled.div`
  position: relative;
  font-weight: bold;
  color: var(--secondary-color);
  font-size: 20px;
  cursor: pointer;
`;
const Badge = styled.span`
  position: absolute;
  background: var(--primary-color);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: -20px;
  right: -15px;
  color: var(--neutral-light);
  font-size: 13px;
`;
const Logout = styled.button`
  background: transparent;
  border: none;
  color: var(--secondary-color);
  font-size: 20px;
  font-weight: bold;
`;

const ToggleMenu = styled.button`
  font-size: 30px;
  color: var(--primary-color);
  transition: var(--transition);
  background: transparent;
  display: none;

  :hover {
    transform: scale(1.2);
  }
  ${tablette({ display: "flex" })}
`;

const CloseMenu = styled.button`
  font-size: 30px;
  color: tomato;
  transition: var(--transition);
  background: transparent;
  ${largescreen({display: 'none'})};
  :hover {
    transform: scale(1.2);
  }
`;
