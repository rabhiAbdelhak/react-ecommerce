import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../Utilities/Responsive";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const ProductSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const checkCurrentIndex = (index) => {
    if (index >= images.length) return 0;
    if (index < 0) return images.length - 1;
    return index;
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => checkCurrentIndex(prevIndex + 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => checkCurrentIndex(prevIndex - 1));
  };
  return (
    <Wrapper>
      <div className="slider-current-img">
        <img src={images[currentImageIndex].url} alt='mainimage' />
        <button className='slider-btn next _flex_center' onClick={nextImage}><AiOutlineRight/></button>
        <button className='slider-btn previous _flex_center' onClick={previousImage}><AiOutlineLeft/></button>
      </div>
      <div className="slider-wait-list-images">
        {images.map((image, index) => {
          const {
            id,
            filename,
            thumbnails: {
              large: { url },
            },
          } = image;
          return (
            <div
              key={id}
              className={`slider-wait-list-image ${
                index === currentImageIndex && "selected"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img src={url} alt={filename} />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductSlider;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
 

  .slider-current-img {
    height: 400px;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    ${mobile({ height: "300px" })};
    position: relative;
    cursor: pointer;
  }

  .slider-current-img img {
    height: 100%;
    width: 100%;
  }
  .slider-wait-list-images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 8px;
  }

  .slider-wait-list-image {
    flex: 1;
    min-width: 60px;
    max-height: 100px;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    opacity: 0.8;
    transition: var(--transition);
  }

  .slider-wait-list-image:hover {
    opacity: 1;
  }

  .slider-wait-list-image.selected {
    border: 3px solid var(--primary-color);
    transform: scale(0.9);
    opacity: 1;
  }

  .slider-wait-list-image img {
    height: 100%;
    width: 100%;
    filter: grayscale(0.7);
  }

  .slider-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--neutral-light);
    color: var(--secondary-color);
    z-index: 10;
    opacity: 0;
    font-size: 20px;
    transition: 0.3s;
  }
  
  .slider-current-img:hover .slider-btn{
    opacity: 1;
  }

  .slider-btn:hover{
    opacity: 0.6;
  }

  .slider-btn.next{
    right: 10px;
  }

  .slider-btn.previous{
    left: 10px;
  }
`;
