import React from "react";
import styled from "styled-components";

import { services } from "../Utilities/data";

const Services = () => {
  return (
    <Wrapper >
      <Container className="container">
        <Text>
          <h1>Custom Furniture Built Only For You</h1>
          <p>
            Pariatur Lorem adipisicing minim ea ea velit minim aute laboris.
            Reprehenderit irure nisi{" "}
          </p>
        </Text>
        <Items>
          {services.map((item) => {
            const { id, name, description, icon } = item;
            return (
              <Item key={id}>
                {icon}
                <h2>{name}</h2>
                <p>{description}</p>
              </Item>
            );
          })}
        </Items>
      </Container>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  background: var(--neutral-light);
`;

const Container = styled.div`

`
const Text = styled.div`
  text-align: center;

  h1{
      color: var(--primary-color);
  }
  p{
      color: var(--secondary-color);
      font-size: 18px;
      letter-spacing: 2px;
  }
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content : center;
  padding: 20px;
  margin-top: 30px;
`;

const Item = styled.article`
  text-align: center;
  flex:1;
  background: var(--neutral-dark);
  padding: 25px;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  min-height: 250px;

  :hover {
      transform: translateY(-10px);
  }
  h2 {
    color: var(--primary-color);
    font-size: 25px;
    letter-spacing: 2px;
    line-height: 1.2;
  }

  p {
    color: var(--neutral-light);
    letter-spacing: 1px;
    line-height: 1.7;
  }

  .icon {
    font-size: 40px;
    color: var(--secondary-color);
  }
`;
