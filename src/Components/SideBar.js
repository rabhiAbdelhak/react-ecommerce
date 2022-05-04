import React from "react";
import styled from "styled-components";
import NavButtons from "./NavButtons";
import { NavLink } from "react-router-dom";

//local imports
import { useComponentContext } from "../contexts/component_context";
import { largescreen } from "../Utilities/Responsive";
import { links } from "../Utilities/constants";

const SideBar = () => {
  const { showSidebar , closeSidebar} = useComponentContext();
  return (
    <Wrapper show={showSidebar}>
      <Menu className="links-container">
        <ul className="links">
          {links.map((item) => {
            const { id, name, link } = item;
            return (
              <li key={id} onClick={closeSidebar}>
                <NavLink to={link}>{name}</NavLink>
              </li>
            );
          })}
          <li>
            <NavLink to="/checkout" onClick={closeSidebar}>Checkout</NavLink>
          </li>
        </ul>
      </Menu>
      <NavButtons />
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  position: fixed;
  top: 90px;
  right: 0;
  height: 100vh;
  width: 270px;
  border-top: 1px solid var(--primary-color);
  background: var(--neutral-dark);
  transition: 0.8s;
  z-index: 999;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  ${largescreen({ display: "none" })};
  header {
    min-height: 70px;
    background: var(--neutral-dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
  }
`;

const Menu = styled.div`
  ul {
    width: 100%;
    margin: 30px 0;
  }

  a {
    padding: 10px 15px;
    color: var(--secondary-color);
    transition: var(--transition);
  }

  a:hover,
  a.active {
    background: var(--neutral-light);
    color: var(--primary-color);
  }
`;
