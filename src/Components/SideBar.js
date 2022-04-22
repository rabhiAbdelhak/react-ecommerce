import React from "react";
import styled from "styled-components";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";

//local imports
import { useAppContext } from "../context";
import Navbar from "./Navbar";
import { largescreen } from "../Utilities/Responsive";
import { links } from "../Utilities/constants";

const SideBar = () => {
  const { showSidebar, setShowSidebar } = useAppContext();
  return (
    <Wrapper show={showSidebar}>
      <Navbar />
      <Menu className="links-container">
        <ul className="links">
          {links.map((item) => {
            const { id, name, link } = item;
            return (
              <li key={id} onClick={() => setShowSidebar(false)}>
                <Link  to={link}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </Menu>
      <NavButtons/>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  border-bottom: 20px solid var(--primary-color);
  background: var(--neutral-dark);
  transition: 0.8s;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-100%)")};
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
    transtion: var(--transition);
  }

  a:hover,
  a.active {
    background: var(--neutral-light);
    color: var(--primary-color);
  }
`;