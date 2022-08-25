import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { CloseOutlined, RightOutlined } from '@ant-design/icons';
import { COLOR, STYLE } from '@constants';
import { isMenu } from '@pages';
import Link from 'next/link';

interface Props {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({ menu, setMenu }: Props) => {
  const handleMenu = () => {
    setMenu(false);
  };

  return (
    <Container menu={menu}>
      <h2 className="sr-only">메뉴창</h2>
      <Header>
        <CloseOutlined onClick={handleMenu} />
        <p>마이 페이지</p>
        <div></div>
      </Header>
      <Link href="/contacts" passHref>
        <Contacts>
          고객센터 <RightOutlined />
        </Contacts>
      </Link>
    </Container>
  );
};

const Container = styled.section<isMenu>`
  position: absolute;
  top: 0;
  left: ${({ menu }) => (!menu ? `-${STYLE.MAIN_WIDTH}` : 0)};
  width: inherit;
  height: 100vh;
  max-width: inherit;
  transition: all 0.2s ease-in-out;
  background-color: ${COLOR.WHITE};
  z-index: 1000;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${STYLE.HEADER_H};
  padding: 0 ${STYLE.PADDING};
  background-color: ${COLOR.WHITE};
  border-bottom: 1px solid ${COLOR.GRAY};
  span {
    font-size: 24px;
    cursor: pointer;
    z-index: 1000;
  }
  p {
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
  }
`;

const Contacts = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${COLOR.WHITE};
  border-top: 12px solid ${COLOR.GRAY};
  border-bottom: 12px solid ${COLOR.GRAY};
`;
