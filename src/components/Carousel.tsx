import React, { useState, useCallback, useLayoutEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CarouselCard } from "./CarouselCard";
import { carouselData } from "../constants";

type ContainerProps = {
  curIdx: number;
};

export const Carousel = () => {
  const [curIdx, setCurIdx] = useState(0);
  const [isFlowing, setIsFlowing] = React.useState(true);
  const imgSRCLen = carouselData.length;

  useLayoutEffect(() => {
    let intervalId: any;
    if (isFlowing) {
      intervalId = setInterval(() => {
        setCurIdx(curIdx + 1);
      }, 3000);
    }
    return () => clearTimeout(intervalId);
  }, [isFlowing, setCurIdx, curIdx]);

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
      <CarouselWrapper curIdx={curIdx}>
        <CarouselContainer curIdx={curIdx}>
          {Array(imgSRCLen * 2 + 1)
            .fill(1)
            .map((_, i) => {
              const newID = curIdx + i - imgSRCLen;
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
      <LeftBtn onClick={() => setCurIdx(curIdx - 1)} aria-label="이전 버튼">
        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </LeftBtn>
      <RightBtn onClick={() => setCurIdx(curIdx + 1)} aria-label="다음 버튼">
        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </RightBtn>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const WrapperTransform = ({ curIdx }: ContainerProps) => css`
  transform: translateX(${-1885 - 1090 * curIdx}px);
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
const LeftBtn = styled.button`
  position: absolute;
  top: 140px;
  left: 200px;
  height: 60px;
  width: 30px;
  border-radius: 15px;
  background-color: #dbdbdb;
  svg {
    width: 16px;
    height: 16px;
  }
`;
const RightBtn = styled.button`
  position: absolute;
  top: 140px;
  right: 200px;
  height: 60px;
  width: 30px;
  border-radius: 15px;
  background-color: #dbdbdb;
  svg {
    width: 16px;
    height: 16px;
  }
`;
const CarouselItem = styled.div`
  margin: 25px 15px;
`;
const ImgCurrent = styled.img`
  border-radius: 5px;
`;
const ImgOther = styled.img`
  border-radius: 5px;
  filter: brightness(0.5);
`;
