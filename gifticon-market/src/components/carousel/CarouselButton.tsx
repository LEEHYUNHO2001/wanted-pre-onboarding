import { CAROUSEL_IMAGES, COLOR } from '@constants';
import styled from '@emotion/styled';
import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export const CarouselButton = ({ currentIndex, setCurrentIndex }: Props) => {
  let index: number = currentIndex;
  useEffect(() => {
    const maxCarouselLength = CAROUSEL_IMAGES.length - 1;
    if (currentIndex === 0) {
      index = 1;
      return;
    } else if (currentIndex === maxCarouselLength) {
      index = maxCarouselLength - 1;
      return;
    }
    index = currentIndex;
  }, [currentIndex]);
  const handleClick = (i: number) => {
    setCurrentIndex(i);
  };
  return (
    <ButtonUl>
      {CAROUSEL_IMAGES.map((image, i) => (
        <IndexButton
          key={`button-${i}`}
          className={i + 1 === index ? 'active' : ''}
          onClick={() => handleClick(i + 1)}
        ></IndexButton>
      ))}
    </ButtonUl>
  );
};

const ButtonUl = styled.ul`
  position: absolute;
  bottom: 5px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80px;
  height: 25px;
`;

const IndexButton = styled.button`
  width: 12px;
  height: 12px;
  background-color: ${COLOR.WHITE};
  border-radius: 50%;
  cursor: pointer;
  &.active {
    background-color: ${COLOR.BLACK};
  }
`;
