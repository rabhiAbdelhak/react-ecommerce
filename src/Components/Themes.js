import React, {useState} from "react";
import styled from "styled-components";
import {AiOutlineBgColors} from 'react-icons/ai'
import {MdOutlineDownloadDone} from 'react-icons/md'
//local imports 
import { themes } from "../Utilities/data";
import { useAppContext } from "../context";

const Themes = () => {
  const { theme, setTheme } = useAppContext();
  const [show, setShow] = useState(false);
  return (
    <Wrapper show = {show}>
      {themes.map((item) => {
        const { id, name, title, color } = item;
        return (
          <Theme key={id} color={color} onClick={() => setTheme(name)} className='_flex_center'>
            {theme === name ? <MdOutlineDownloadDone/> : ''}
          </Theme>
        );
      })}
      <button onClick={() => setShow(prev => !prev)}><AiOutlineBgColors/></button>
    </Wrapper>
  );
};

export default Themes;

const Wrapper = styled.div`
  position: fixed;
  width: fit-content;
  bottom: 20px;
  right: 0;
  padding: 0 15px;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 5px;
  transition: var(--transition);
  box-shadow: 2px 2px 7px rgb(0 0 0 / 0.7);
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

  min-height: 50px;
  display: flex;
  gap: 15px;

  button{
   position: absolute;
   left: -27px;
   width:30px;
   height: 30px;
   border-radius: 5px;
   background: white;
   color: var(--primary-color);
   font-size: 20px;
   
  }

  button:hover{
    background: var(--primary-color);
    color: white;
  }
`;

const Theme = styled.span`
width: 30px;
height:30px;
border-radius: 50%;
background: ${props => props.color};
cursor: pointer;
color: var(--primary-color);
box-shadow: 2px 2px 7px rgb(0 0 0 / 0.7);

:hover{
  opacity: 0.4;
}
`;
