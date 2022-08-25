import { Carousel } from '@components/carousel/Carousel';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { COLOR, STYLE } from '@constants';
import { Footer } from '@components/layout';
import { MainHeader, MainCategory, MainDeal, Menu } from '@components/main/';
import { useState } from 'react';

export interface isMenu {
  menu: boolean;
}

const Home: NextPage = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Head>
        <title>니콘내콘</title>
      </Head>
      <Container menu={menu}>
        <Menu menu={menu} setMenu={setMenu} />

        <MainHeader setMenu={setMenu} />
        <MainPage>
          <Carousel />
          <MainCategory />
          <MainDeal />
        </MainPage>
        <Footer />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div<isMenu>`
  position: relative;
  overflow: hidden;
  height: ${({ menu }) => (menu === false ? 'auto' : '100vh')};
  width: ${STYLE.MAIN_WIDTH};
`;

const MainPage = styled.main`
  padding-top: ${STYLE.HEADER_H};
  background-color: ${COLOR.GRAY};
`;
