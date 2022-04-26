import React from 'react'
import styled from 'styled-components'

//local imports
import { Hero, Services, Newsletter, FeaturedProducts} from '../Components'


const Home = () => {
  return (
    <Wrapper>
      <Hero/>
      <FeaturedProducts/>
      <Services/>
      <Newsletter/>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div``