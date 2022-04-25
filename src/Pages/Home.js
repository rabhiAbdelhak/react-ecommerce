import React from 'react'
import styled from 'styled-components'

//local imports
import { Hero, Services, Newsletter, FeaturedProducts} from '../Components'
import ProductImagesModal from '../Components/ProductImagesModal'

const Home = () => {
  return (
    <Wrapper>
      <Hero/>
      <FeaturedProducts/>
      <Services/>
      <Newsletter/>
      <ProductImagesModal/>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div``