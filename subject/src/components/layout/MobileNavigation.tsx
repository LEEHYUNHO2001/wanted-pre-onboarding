import styled from "@emotion/styled";
import Link from "next/link";

export const MobileNavigation = () => {
  return (
    <div>
      <Container>
        <Item className="on">
          <Link href="/">
            <a>홈</a>
          </Link>
        </Item>
        <Item>
          <Link href="/jobsfeed">
            <a>채용</a>
          </Link>
        </Item>
        <Item>
          <Link href="/events">
            <a>이벤트</a>
          </Link>
        </Item>
      </Container>
    </div>
  );
};

const Container = styled.ul`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  .on::after {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    top: 32px;
    left: 0;
    border-bottom: 2px solid #258bf7;
  }
`;
const Item = styled.li`
  padding: 0 10px 0 20px;
  position: relative;
`;
