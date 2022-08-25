import { CAROUSEL_IMAGES, STYLE } from '@constants';
import styled from '@emotion/styled';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CarouselImage } from './CarouselImage';

interface styleProps {
  currentIndex: number;
}
interface Props {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export const CarouselBox = ({ currentIndex, setCurrentIndex }: Props) => {
  const [startX, setStartX] = useState(0);
  const CarouselBoxRef = useRef<HTMLDivElement>(null);
  const carouselLength = CAROUSEL_IMAGES.length - 1;

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    setStartX(e.pageX);
    return;
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLUListElement>) => {
    const movedDistance = e.pageX - startX;
    if (Math.abs(movedDistance) >= 50) {
      movedDistance > 0
        ? setCurrentIndex(prev => prev - 1)
        : setCurrentIndex(prev => prev + 1);
      return;
    }
  };
  const handleTransitionEnd = () => {
    const firstIndex = 0;
    const lastIndex = CAROUSEL_IMAGES.length + 1;
    if (currentIndex === firstIndex) {
      CarouselBoxRef.current!.style.transition = 'none';
      setCurrentIndex(lastIndex - 1);
      return;
    }
    if (currentIndex === lastIndex) {
      CarouselBoxRef.current!.style.transition = 'none';
      setCurrentIndex(firstIndex + 1);
      return;
    }
  };

  useEffect(() => {
    CarouselBoxRef.current!.style.transition = '0.2s';
  }, [currentIndex]);

  return (
    <CarouselBoxContainer
      currentIndex={currentIndex}
      ref={CarouselBoxRef}
      onTransitionEnd={handleTransitionEnd}
    >
      <CarouselUl
        onMouseDown={e => handleMouseDown(e)}
        onMouseUp={e => handleMouseUp(e)}
      >
        <img
          src={CAROUSEL_IMAGES[carouselLength].src}
          alt="carouselImage"
          draggable="false"
        />
        {CAROUSEL_IMAGES.map((img, i) => (
          <CarouselImage key={`carouselImage-${i}`} image={img} />
        ))}
        <img
          src={CAROUSEL_IMAGES[0].src}
          alt="carouselImage"
          draggable="false"
        />
      </CarouselUl>
    </CarouselBoxContainer>
  );
};

const CarouselBoxContainer = styled.div<styleProps>`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  transform: ${props =>
    `translateX(calc(-${props.currentIndex} * ${STYLE.MAIN_WIDTH}))`};
`;

const CarouselUl = styled.ul`
  display: flex;
  cursor: pointer;
  & > img {
    flex-shrink: 0;
    width: ${STYLE.MAIN_WIDTH};
    height: 100%;
    object-fit: cover;
  }
`;
