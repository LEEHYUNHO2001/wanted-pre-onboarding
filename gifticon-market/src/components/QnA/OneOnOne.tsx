import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { COLOR } from '@constants';

export const OneOnOne = () => {
  return (
    <Container>
      <Title>상담시간 안내</Title>
      <p>평일 10:00 ~ 18:00</p>
      <Break>점심시간 12:30 ~ 13:30 / 토∙일∙공휴일 휴무</Break>
      <Link href="#" passHref>
        <OneOnOneBtn>1:1 카카오톡 문의</OneOnOneBtn>
      </Link>
    </Container>
  );
};

const Container = styled.article`
  padding: 80px 15px 0 15px;
  background-color: ${COLOR.WHITE};
  border-bottom: 12px solid ${COLOR.GRAY};
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
`;
const Break = styled.p`
  color: ${COLOR.GRAY_DARK};
`;
const OneOnOneBtn = styled.a`
  padding: 10px 0;
  margin: 25px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${COLOR.RED};
  border: 1px solid ${COLOR.RED};
  border-radius: 10px;
`;
