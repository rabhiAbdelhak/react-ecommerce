import React from 'react'
import styled from 'styled-components';
import { mobile, tablette } from '../Utilities/Responsive';

const Newsletter = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Wrapper className = 'container'>
      <Title>
          Subscribe to our Newsletter.
      </Title>
      <Form onSubmit={handleSubmit}>
        <input type='email' placeholder = 'Enter your mail'/>
        <button type='submit'>Subscribe</button>
      </Form>
    </Wrapper>
  )
}

export default Newsletter

const Wrapper = styled.section`
display: flex;
align-items: center;
text-align:center;
flex-direction : column;
`

const Title = styled.h1`
color: var(--primary-color);
margin: bottom: 25px;
text-transform: capitalize;
`

const Form = styled.form`
padding: 50px 10px;
display: flex;
width: 70%;
${mobile({width: '100%', padding: '20px 0'})}

input{
  flex:1; 
  padding: 10px;
  background: white;
  border: 1px solid var(--neutral-light);
  margin-right: 10px;
  border-radius: 5px;
  ${mobile({width: '80px', padding: '10px 5px'})}
}

button{
  padding: 10px 15px;
  background: var(--secondary-color);
  color: var(--neutral-dark);
  ${mobile({padding: '10px 5px'})}
}
`