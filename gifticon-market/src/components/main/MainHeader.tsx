import styled from '@emotion/styled';
import {
  MenuOutlined,
  SearchOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import { HeaderContainer } from '@components/layout/Header';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setMenu: Dispatch<SetStateAction<boolean>>;
}

export const MainHeader = ({ setMenu }: Props) => {
  const handleMenu = () => {
    setMenu(true);
  };
  return (
    <MainTop>
      <HeaderContainer>
        <MenuOutlined onClick={handleMenu} />
        <h2>니콘내콘</h2>
        <div>
          <SearchOutlined />
          <CreditCardOutlined />
        </div>
      </HeaderContainer>
    </MainTop>
  );
};

const MainTop = styled.div`
  position: relative;
  width: inherit;
  max-width: inherit;
  span.anticon:last-child {
    margin-left: 20px;
  }
  header > div {
    z-index: 1000;
  }
`;
