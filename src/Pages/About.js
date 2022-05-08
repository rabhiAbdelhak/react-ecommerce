import React from "react";
import styled from "styled-components";
import { tablette } from "../Utilities/Responsive";

const About = () => {
  return (
    <Wrapper>
      <Container className="container">
        <Text>
          <h1>Our Story</h1>
          <p>
            Tempor quis dolor cupidatat sit nostrud exercitation aliqua
            incididunt amet sunt nostrud cillum minim. Exercitation cillum
            ullamco deserunt incididunt quis eu aute laboris fugiat magna veniam
            elit exercitation id. Qui eiusmod cupidatat do ex aliqua ea irure.
            Dolore aliqua adipisicing sint fugiat amet occaecat ullamco nostrud
            tempor laboris veniam enim minim enim. Qui anim culpa non laborum
            culpa non.
            Tempor quis dolor cupidatat sit nostrud exercitation aliqua
          </p>
        </Text>
        <ImageContainer >
          <img src='assets/image/about.jpg' alt='about'/>
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.main`

`;

const Container = styled.section`
display: flex;

${tablette({flexDirection: 'column-reverse'})}
`;

const Text = styled.div`
flex:1;

h1{
  color: var(--primary-color);
  font-size: 50px;
}

p{
  line-height: 1.7;
  color: var(--neutral-light);
  text-align: justify;
  letter-spacing: 1px;
  margin: 20px 0;
  font-size: 18px;
}
`

const ImageContainer = styled.div`
flex:1;
overflow: hidden;
margin-left: 60px;
${tablette({marginLeft: 0})};

img{
  height: 100%;
  border-radius: var(--radius);
}
`
