import styled from "@emotion/styled";
import { AsidMenu, JobMenu } from ".";
import { Navigation } from ".";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1 className="sr-only">wanted 헤더</h1>
      <JobMenu />
      <Navigation />
      <AsidMenu />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 50px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET3}) {
    height: 110px;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0 50px;
  }
`;
