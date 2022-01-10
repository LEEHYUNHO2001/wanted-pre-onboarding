import Link from "next/link";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const JobMenu = () => {
  return (
    <Container>
      <h2 className="sr-only">원티드 직군별 목록</h2>
      <button>
        <Img
          src="https://static.wanted.co.kr/images/icon-menu.png"
          alt="hamberger menu"
        />
      </button>
      <Link href="/">
        <Home>wanted</Home>
      </Link>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  margin-right: 50px;
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET1}) {
    margin-right: 70px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET2}) {
    margin-right: 40px;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET3}) {
    width: 100vw;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE1}) {
    padding-left: 20px;
  }
`;
const Img = styled.img`
  width: 17px;
  height: 14px;
  object-fit: contain;
  margin: 6px 15px 0 0;
`;
const Home = styled.a`
  font-size: 22px;
  font-weight: 700;
`;
