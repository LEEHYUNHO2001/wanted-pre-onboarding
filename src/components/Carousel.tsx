import React, { useState, useCallback, useLayoutEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CarouselCard } from "./CarouselCard";
import { carouselData, MEDIA_QUERY_END_POINT } from "../constants";

type WrapperProps = {
  curIdx: number;
  imgSRCLen: number;
};

type ContainerProps = {
  curIdx: number;
};

export const Carousel = () => {
  const [curIdx, setCurIdx] = useState(0);
  const [isHover, setIsHover] = useState(true);
  const imgSRCLen = carouselData.length;

  useLayoutEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isHover) {
      intervalId = setInterval(() => {
        setCurIdx(curIdx + 1);
      }, 3000);
    }
    return () => clearTimeout(intervalId);
  }, [isHover, setCurIdx, curIdx]);

  const getStaticIdx = useCallback(
    (newID) => {
      let rest = newID % imgSRCLen;
      if (rest < 0) {
        rest += imgSRCLen;
      }
      return rest;
    },
    [imgSRCLen]
  );

  return (
    <Container
      onMouseOver={() => setIsHover(false)}
      onMouseOut={() => setIsHover(true)}
    >
      <CarouselWrapper curIdx={curIdx} imgSRCLen={imgSRCLen}>
        <CarouselContainer curIdx={curIdx}>
          {Array(imgSRCLen * 2 + 1)
            .fill(1)
            .map((_, i) => {
              const newID = curIdx + i - imgSRCLen;
              return {
                staticIdx: getStaticIdx(newID),
                newID,
              };
            })
            .map(({ staticIdx, newID }, i) => {
              return (
                <CarouselItem key={newID}>
                  <Link href={carouselData[staticIdx].PATH}>
                    <a>
                      {curIdx === curIdx - i + 2 ? (
                        <ImgCurrent src={carouselData[staticIdx].SRC} />
                      ) : (
                        <ImgOther src={carouselData[staticIdx].SRC} />
                      )}
                    </a>
                  </Link>
                  {curIdx === curIdx - i + 2 && (
                    <CarouselCard data={carouselData[staticIdx]} />
                  )}
                </CarouselItem>
              );
            })}
        </CarouselContainer>
      </CarouselWrapper>
      <Btn
        onClick={() => setCurIdx(curIdx - 1)}
        className="prev"
        aria-label="이전 버튼"
      >
        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </Btn>
      <Btn
        onClick={() => setCurIdx(curIdx + 1)}
        className="next"
        aria-label="다음 버튼"
      >
        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </Btn>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin: 25px 0;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    height: 300px;
  }
`;

const WrapperTransform = ({ curIdx, imgSRCLen }: WrapperProps) => css`
  transform: translateX(${-1885 - 1090 * curIdx}px);
  @media (max-width: 1600px) {
    transform: translateX(${-1950 - 1090 * curIdx}px);
  }
  @media (max-width: 1530px) {
    transform: translateX(${-2010 - 1090 * curIdx}px);
  }
  @media (max-width: 1386px) {
    transform: translateX(${-2040 - 1090 * curIdx}px);
  }
  @media (max-width: 1330px) {
    transform: translateX(${-2080 - 1090 * curIdx}px);
  }
  @media (max-width: 1280px) {
    transform: translateX(${-2120 - 1090 * curIdx}px);
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    transform: translateX(${-2130 - 1090 * curIdx}px);
  }
`;

const CarouselWrapper = styled.div`
  ${WrapperTransform}
  transition: 1s;
`;

const ContainerTransform = ({ curIdx }: ContainerProps) => css`
  transform: translateX(${1090 * curIdx}px);
`;

const CarouselContainer = styled.div`
  ${ContainerTransform}
  display: inline-flex;
`;
const Btn = styled.button`
  position: absolute;
  top: 120px;
  height: 60px;
  width: 30px;
  border-radius: 15px;
  opacity: 0.5;
  background-color: #fff;

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    display: none;
  }

  &.prev {
    left: 10vw;
    @media (max-width: 1500px) {
      left: 5vw;
    }
    @media (max-width: 1386px) {
      left: 2vw;
    }
    @media (max-width: 1280px) {
      left: 0.5vw;
    }
  }
  &.next {
    right: 10vw;
    @media (max-width: 1500px) {
      right: 5vw;
    }
    @media (max-width: 1386px) {
      right: 3vw;
    }
    @media (max-width: 1280px) {
      right: 0.5vw;
    }
  }
  svg {
    width: 16px;
    height: 16px;
  }
`;
const CarouselItem = styled.div`
  width: 1060px;
  margin: 0 15px;
`;
const ImgCurrent = styled.img`
  border-radius: 5px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    width: 90vw;
    height: 170px;
  }
`;
const ImgOther = styled.img`
  border-radius: 5px;
  filter: brightness(0.5);
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    width: 90vw;
    height: 170px;
  }
`;
