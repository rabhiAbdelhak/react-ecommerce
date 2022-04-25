import React from 'react'
import styled from 'styled-components';
import {FaStar, FaRegStar, FaStarHalfAlt} from 'react-icons/fa';

const Stars = ({stars, reviews}) => {
  
  const ships = [];
  let i = 5;
  let n = stars;
  while(i > 0 ){
      if(n > 1){
         ships.push(<FaStar/>)
         n--;
      }else if(n < 1 && n > 0){
         ships.push(<FaStarHalfAlt/>)
         n--;
      }else{
         ships.push(<FaRegStar/>)
      }
      i--;
  }
  return (
    <Wrapper>
         {ships.map((star, index) => {
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