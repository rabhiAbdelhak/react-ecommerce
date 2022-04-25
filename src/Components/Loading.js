import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper className='_flex_center'>
        Loading...
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.div`
min-height: 300px;
`