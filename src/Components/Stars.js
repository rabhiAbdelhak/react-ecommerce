import React from 'react'
import styled from 'styled-components';
import {FaStar, FaRegStar, FaStarHalfAlt} from 'react-icons/fa';

const Stars = ({stars, reviews}) => {


  const sheeps = Array.from({length : 5} , (_, index) => {
      if(stars >= index + 1){
        return <FaStar/>
      }else if(stars > index + 0.5){
        return <FaStarHalfAlt/>
      }else{
        return <FaRegStar/>
      }
  });
  
  return (
    <Wrapper>
         {sheeps.map((star, index) => {
             return <div key={index} className='icon'>{star}</div>;
         })}
         <p> {stars} ({reviews} Reviews) </p>
    </Wrapper>
  )
}

export default Stars;

const Wrapper = styled.div`
display: flex;
align-items: center;

.icon{
    color: orangered;
    margin-right: 5px;
}

p{
    margin-left: 10px;
    color: var(--neutral-light);
    font-size: 16px;
}
`