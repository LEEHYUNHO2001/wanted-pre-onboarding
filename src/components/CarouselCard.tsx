import styled from "@emotion/styled";
import Link from "next/link";
import { CarouselData } from "../types/carouselData";

interface carouselData {
  data: CarouselData;
}

export const CarouselCard = ({ data }: carouselData) => {
  const { SRC, TITLE, SUB, PATH } = data;
  return (
    <Container>
      <Link href={PATH}>
        <a>
          <img src={SRC} alt={TITLE} />
        </a>
      </Link>
      <CarouselComment>
        <H3>{TITLE}</H3>
        <P>{SUB}</P>
        <Link href={PATH}>
          <a>
            <SvgContainer>
              <span>바로가기</span>
              <svg className="SvgIcon" viewBox="0 0 18 18">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </SvgContainer>
          </a>
        </Link>
      </CarouselComment>
    </Container>
  );
};

const Container = styled.li`
  position: relative;
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
`;
const H3 = styled.h3`
  font-size: 20px;
  line-height: 1.5;
  margin: 20px 0 0 20px;
`;
const P = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 5px 0 20px 20px;
`;
const SvgContainer = styled.div`
  position: relative;
  color: #3366ff;
  fill: #3366ff;
  font-size: 14px;
  font-weight: 700;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ececec;
  }
  span {
    display: inline-block;
    margin: 20px 5px 0 20px;
  }
  .SvgIcon {
    width: 10px;
    height: 10px;
  }
`;
