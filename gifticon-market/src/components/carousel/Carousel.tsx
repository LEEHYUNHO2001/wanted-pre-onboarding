import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CarouselButton } from './CarouselButton';
import { CarouselBox } from './CarouselBox';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  return (
    <CarouselContainer>
      <CarouselBox
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <CarouselButton
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 185px;
  overflow: hidden;
`;
