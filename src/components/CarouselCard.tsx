import Link from "next/link";
import styled from "@emotion/styled";

import { CarouselData } from "../types/carouselData";
import { MEDIA_QUERY_END_POINT } from "../constants";

interface Data {
  data: CarouselData;
}

export const CarouselCard = ({ data }: Data) => {
  const { TITLE, SUB, PATH } = data;
  return (
    <Container>
      <CarouselComment>
        <H3>{TITLE}</H3>
        <P>{SUB}</P>
        <SvgContainer>
          <Link href={PATH}>
            <a>
              <span>바로가기</span>
              <svg className="SvgIcon" viewBox="0 0 18 18">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </a>
          </Link>
        </SvgContainer>
      </CarouselComment>
    </Container>
  );
};

const Container = styled.li`
  list-style: none;
  position: relative;
  width: 100%;
  margin: 0 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const CarouselComment = styled.article`
  position: absolute;
  bottom: 28px;
  left: 34px;
  background-color: #fff;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  box-sizing: border-box;

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    text-align: center;
    width: 90vw;
    height: 90px;
    bottom: -100px;
    left: -10px;
  }
`;
const H3 = styled.h3`
  font-size: 20px;
  line-height: 1.5;
  margin: 20px 0 0 20px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    margin: 5px 0;
    font-size: 18px;
  }
`;
const P = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 5px 0 20px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 240px;
  height: 20px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    width: 90vw;
    margin: 0;
    font-size: 13px;
    color: #666;
  }
`;
const SvgContainer = styled.div`
  position: relative;
  span {
    color: #3366ff;
    font-size: 14px;
    font-weight: 700;
  }
  svg {
    fill: #3366ff;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ececec;
    @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
      display: none;
    }
  }

  span {
    display: inline-block;
    margin: 20px 5px 0 20px;
    @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
      margin: 10px 0 0 20px;
    }
  }

  .SvgIcon {
    width: 10px;
    height: 10px;
  }
`;
