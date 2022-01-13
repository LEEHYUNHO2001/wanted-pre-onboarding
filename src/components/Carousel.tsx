import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { carouselData } from "../constants";
import { CarouselCard } from "./CarouselCard";

export const Carousel = () => {
  const slideRef = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(1);
  const carouselLen = carouselData.length - 1;

  const nextBtn = () => {
    if (current >= carouselLen) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevBtn = () => {
    if (current === 0) {
      setCurrent(carouselLen);
    } else {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${current * 1080}px)`;
    }
  }, [current]);

  return (
    <Container>
      <h2 className="sr-only">원티드 캐러셀</h2>
      <CarouselContainer ref={slideRef}>
        {carouselData.map((data) => {
          return (
            <CarouselCard
              data={data}
              current={current}
              key={`carousel-image-link-${data.ID}`}
            />
          );
        })}
      </CarouselContainer>
      <button onClick={nextBtn}>다음</button>
      <button onClick={prevBtn}>이전</button>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
`;
const CarouselContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 300px;
`;
