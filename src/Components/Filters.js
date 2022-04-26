import React from 'react';
import styled from 'styled-components';
import { middleScreen, mobile } from '../Utilities/Responsive';

const Filters = () => {
  return (
    <Wrapper>
        Filters    
    </Wrapper>
  )
}

export default Filters

const Wrapper = styled.section`
width: 200px;
${middleScreen({display: 'none'})}
${mobile({display: 'none'})};
`