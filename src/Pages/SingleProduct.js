import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";



//local imports
import { Loading, ErrorComponent, PageTitle, ProductSlider, Stars, ProductActions } from "../Components";

//local imports
import { useProductsContext } from "../contexts/products_context";
import { formatPrice } from "../Utilities/helpers";
import { mobile, tablette } from "../Utilities/Responsive";

const SingleProduct = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const {
    fetchSingleProduct,
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
        if(error){
          navigate('/');
        }
    }, 3000)
    return () => clearTimeout(timeout);
  }, [error])

  if (loading) return <main><Loading /></main>;
  if (error) return <main><ErrorComponent /></main>;
  const {
    shipping,
    price,
    colors,
    category,
    images,
    reviews,
    stars,
    name,
    description,
    company,
    stock,
  } = product;
  
  return (
    <Wrapper>
      <PageTitle title={`Home >> Products >>${name}`} />
      <Container className="container">
        <ProductSlider images={images}/> 
        <Information>
          <h1 className="name">{name}</h1>
            <Stars stars = {stars} reviews= {reviews}/>
          <h4 className='price'>{formatPrice(price)}</h4>
          <p className='desc'>{description}</p>
          <MoreInfo>
            <div>
              <h3>Available : </h3>
              <p>{stock}</p>
            </div>
            <div>
              <h3>SKU :</h3> <p>{id}</p>
            </div>
            <div>
              <h3>Brand : </h3> <p>{company}</p>
            </div>
          </MoreInfo>
          <ProductActions/>
        </Information>
      </Container>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.main`
background: (--very-light-color);
`;

const Container = styled.section`
  display: flex;
  gap: 40px;

  ${tablette({flexDirection: 'column'})}
`;

const Information = styled.div`
flex: 1;

.name {
  color: var(--primary-color);
  text-transform: capitalize;
}

.price{
  color: var(--secondary-color);
  font-size: 17px;
}

.desc {
  color: var(--neutral-light);
  line-height: 1.7;
  letter-spacing: 1px;
  margin: 20px 0;
  font-weight: bold;

}
`;

const MoreInfo = styled.div`

> div {
  display: flex;
  align-items: center;
  gap: 20px;
}

> div h3 {
  width: 200px;
  color: var(--secondary-color);
}

> div p {
  color: var(--neutral-light);

}
`;



