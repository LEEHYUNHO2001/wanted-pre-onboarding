import React from 'react';
import styled from '@emotion/styled';
import { STYLE } from '@constants';

interface Props {
  image: StaticImageData;
}
export const CarouselImage = ({ image }: Props) => {
  return <CarouselImg src={image.src} alt="carouselImage" draggable="false" />;
};

const CarouselImg = styled.img`
  flex-shrink: 0;
  width: ${STYLE.MAIN_WIDTH};
  height: 100%;
  object-fit: cover;
`;
