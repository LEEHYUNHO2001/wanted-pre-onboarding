import styled from "@emotion/styled";
import { AsidMenu, JobMenu } from ".";
import { Navigation } from ".";

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
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;
