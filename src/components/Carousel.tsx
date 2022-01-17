import React, { useState, useCallback, useLayoutEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CarouselCard } from "./CarouselCard";
import { carouselData } from "../constants";

type WrapperProps = {
  imgSRCLen: any;
  curIdx: any;
};

type ContainerProps = {
  curIdx: any;
};

export const Carousel = () => {
  const [curIdx, setCurIdx] = useState(0);
  const [isFlowing, setIsFlowing] = React.useState(true);
  const imgSRCLen = carouselData.length;

  // useLayoutEffect(() => {
  //   let intervalId: any;
  //   if (isFlowing) {
  //     intervalId = setInterval(() => {
  //       setCurIdx(curIdx + 1);
  //     }, 2000);
  //   }
  //   return () => clearTimeout(intervalId);
  // }, [isFlowing, setCurIdx, curIdx]);

  const getStaticIndex = useCallback(
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
      onMouseOver={() => setIsFlowing(false)}
      onMouseOut={() => setIsFlowing(true)}
    >
      <CarouselWrapper imgSRCLen={WrapperTransform} curIdx={WrapperTransform}>
        <CarouselContainer curIdx={ContainerTransform}>
          {Array(imgSRCLen * 2 + 1)
            .fill(1)
            .map((_, index) => {
              const newID = curIdx + index - imgSRCLen;
              return {
                staticIdx: getStaticIndex(newID),
                newID,
              };
            })
            .map(({ staticIdx, newID }, i) => {
              return (
                <CarouselItem key={newID}>
                  <Link href={carouselData[staticIdx].PATH}>
                    <a>
                      {curIdx === curIdx - i ? (
                        <ImgCurrent src={carouselData[staticIdx].SRC} />
                      ) : (
                        <ImgOther src={carouselData[staticIdx].SRC} />
                      )}
                    </a>
                  </Link>
                  {curIdx === curIdx - i && (
                    <CarouselCard data={carouselData[staticIdx]} />
                  )}
                </CarouselItem>
              );
            })}
        </CarouselContainer>
      </CarouselWrapper>
      <BtnContainer>
        <button onClick={() => setCurIdx(curIdx - 1)} aria-label="이전 버튼">
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </button>
        <button onClick={() => setCurIdx(curIdx + 1)} aria-label="다음 버튼">
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </button>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const WrapperTransform = ({ imgSRCLen, curIdx }: WrapperProps) => css`
  transform: translateX(${-100 * imgSRCLen - 100 * curIdx}vw);
`;

const CarouselWrapper = styled.div`
  ${WrapperTransform}
  transition: 1s;
`;

const ContainerTransform = (props: ContainerProps) => css`
  transform: translateX(${100 * props.curIdx}vw);
`;

const CarouselContainer = styled.div`
  ${ContainerTransform}
  display: inline-flex;
`;

const BtnContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    display: flex;
    align-items: center;
    height: 60px;
    width: 30px;
    border-radius: 15px;
    justify-content: center;
    background-color: #dbdbdb;
    margin: 40px;
  }
  button > svg {
    width: 16px;
    height: 16px;
  }
`;
const CarouselItem = styled.div`
  margin: 25px 10px;
`;
const ImgCurrent = styled.img`
  border-radius: 5px;
`;
const ImgOther = styled.img`
  border-radius: 5px;
  filter: brightness(0.5);
`;
