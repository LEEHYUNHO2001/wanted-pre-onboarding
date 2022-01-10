import Link from "next/link";
import styled from "@emotion/styled";

export const JobMenu = () => {
  return (
    <Container>
      <button>
        <Img
          src="https://static.wanted.co.kr/images/icon-menu.png"
          alt="hamberger menu"
        ></Img>
      </button>
      <Link href="/">
        <Home>wanted</Home>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-right: 50px;
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
