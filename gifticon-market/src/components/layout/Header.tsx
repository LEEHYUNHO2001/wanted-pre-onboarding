import Link from 'next/link';
import styled from '@emotion/styled';
import { HomeOutlined } from '@ant-design/icons';
import { COLOR, STYLE } from '@constants';
import { useData } from '@hooks/useData';
import { ConCategory2 } from '@types';
import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';

interface Props {
  id: string | string[];
}

interface Title {
  id: number;
  name: string;
}

export const Header = ({ id }: Props) => {
  const categoryId = useRef(id);
  const { data } = useData(`con-category1s/${categoryId.current}/nested`);
  const brandTitle = useRef<Title[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (data && id === categoryId.current) {
      data.conCategory1.conCategory2s.map((brand: ConCategory2) => {
        brandTitle.current.push({ id: brand.id, name: brand.name });
      });
      setTitle(data.conCategory1.name);
    } else {
      brandTitle.current.forEach(
        brand => brand.id === Number(id) && setTitle(brand.name)
      );
      brandTitle.current = [];
    }
  }, [data, id, title]);

  return (
    <>
      <Head>
        <title>니콘내콘 - {title}</title>
      </Head>
      <HeaderContainer>
        <Link href="/">
          <a>
            <HomeOutlined />
          </a>
        </Link>
        <h2>{title}</h2>
      </HeaderContainer>
    </>
  );
};

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  max-width: inherit;
  height: ${STYLE.HEADER_H};
  padding: 0 ${STYLE.PADDING};
  background-color: ${COLOR.WHITE};
  z-index: 999;

  span.anticon {
    display: inline-block;
    cursor: pointer;
    svg {
      font-size: 24px;
    }
  }

  h2 {
    flex: 1;
    font-size: 17px;
    letter-spacing: 1px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
  }

  span.anticon,
  a {
    z-index: 999;
  }

  & + section {
    padding-top: ${STYLE.HEADER_H};
  }
`;
