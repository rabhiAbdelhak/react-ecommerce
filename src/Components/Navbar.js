import React from "react";
import styled from "styled-components";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

//local imports
import { tablette } from "../Utilities/Responsive";
import { useAppContext } from "../context";
import {largescreen} from '../Utilities/Responsive';
import { links } from "../Utilities/constants";
import NavButtons from "./NavButtons";
import Logo from "./Logo";

const Navbar = () => {
  const { showSidebar, setShowSidebar } = useAppContext();

  return (
    <Wrapper>
      <Logo/>
      <Menu className="links-container">
        <ul className="links">
          {
            links.map(item => {
              const {id, name, link} = item;
              return <Link key={id} to={link}>{name}</Link>
            })
          }
        </ul>
      </Menu>
      <NavButtons container='navbar'/>
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
  height: 90px;
  background: var(--neutral-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;


const Menu = styled.div`
  ul {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--primary-color);
  }

  a {
    padding: 0px 15px;
    color: var(--secondary-color);
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 1.5px;
    transition: var(--transition);
    position: relative;
    width: 120px;
    text-align: left;
    
  }

  a:hover,
  a.active {
    background: var(--neutral-light);
    color: var(--primary-color);
    font-weight: bold;
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
