import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper className='_flex_center'>
       <div className='updown-animation'></div>
       <div className='updown-animation'></div>
       <div className='updown-animation'></div>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.div`
min-height: 100px;
display: flex;
align-items: flex-end;
gap: 5px;

div {
  background-color: var(--primary-color);
  width: 20px;
  height: 0px;
}

div:first-child{
  animation-delay: 0.3s;
}

div:nth-child(2){
  animation-delay: 0.6s;
}

div:last-child{
  animation-delay: 0.9s;
}
`