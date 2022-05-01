import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//local imports 
import { tablette } from '../Utilities/Responsive'
const Hero = () => {
  return (
    <Wrapper className="container">
      <Text>
        <h1>Design your comfort zone</h1>
        <p>
          Tempor quis dolor cupidatat sit nostrud exercitation aliqua
          incididunt amet sunt nostrud cillum minim. Exercitation cillum
          ullamco deserunt incididunt quis eu aute laboris fugiat magna veniam
          elit exercitation id. Qui eiusmod cupidatat do ex aliqua ea irure.
          Dolore aliqua adipisicing sint fugiat amet occaecat ullamco nostrud
          tempor laboris veniam enim minim enim. Qui anim culpa non laborum
          culpa non.
        </p>
        <Link className='btn big-small-animation' to='/products'>Shop Now</Link>
      </Text>
      <ImageContainer >
        <img src='assets/image/office.jpg' alt='about'/>
      </ImageContainer>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
display: flex;
align-items: center;
padding-top: 150px;
`;

const Text = styled.div`
flex:1;

h1{
  color: var(--primary-color);
  line-height: 1.2;
  letter-spacing: 2px;
  text-transform: capitalize;
}

p{
  line-height: 1.7;
  color: var(--neutral-light);
  text-align: justify;
  letter-spacing: 1px;
  margin: 20px 0;
  font-size: 18px;
}

a {
  background: var(--secondary-color);
  color: var(--neutral-dark);
  width: 150px;
  text-transform: uppercase;
  padding: 7px;
  text-align: center;
}
`

const ImageContainer = styled.div`
flex:1;
overflow: hidden;
margin-left: 60px;
max-height: 550px;
filter: grayscale(0.6);
${tablette({display: 'none'})};

img{
  max-height: 100%;
  border-radius: var(--radius);
}
`
