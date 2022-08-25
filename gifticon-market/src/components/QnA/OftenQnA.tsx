import React, { useState } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@constants';
import { QTDProps } from '@types';
import { QnAContent } from '.';

interface Toggle {
  toggle: number;
}

export const OftenQnA = ({ QnATypeData }: QTDProps) => {
  const [toggle, setToggle] = useState(QnATypeData[0].id);
  const handleBuyBtn = () => {
    if (toggle === QnATypeData[1].id) setToggle(QnATypeData[0].id);
  };
  const handleSellBtn = () => {
    if (toggle === QnATypeData[0].id) setToggle(QnATypeData[1].id);
  };

  return (
    <div>
      <Container>
        <Title>자주 묻는 질문</Title>
        <ToggleContainer>
          <BuyBtn type="button" toggle={toggle} onClick={handleBuyBtn}>
            {QnATypeData[0].name}
          </BuyBtn>
          <SellBtn type="button" toggle={toggle} onClick={handleSellBtn}>
            {QnATypeData[1].name}
          </SellBtn>
        </ToggleContainer>
      </Container>
      <QnAContent name={QnATypeData[toggle - 1].name} toggle={toggle} />
    </div>
  );
};

const Container = styled.article`
  padding: 15px 15px 0 15px;
  background-color: ${COLOR.WHITE};
  border-bottom: 12px solid ${COLOR.GRAY_BORDER};
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
`;
const ToggleContainer = styled.div``;
const BuyBtn = styled.button<Toggle>`
  padding: 15px 0;
  color: ${({ toggle }) => (toggle === 1 ? COLOR.RED : COLOR.BLACK)};
  border-bottom: 2px solid
    ${({ toggle }) => (toggle === 1 ? COLOR.RED : COLOR.WHITE)};
  width: 50%;
  cursor: pointer;
`;
const SellBtn = styled.button<Toggle>`
  padding: 15px 0;
  margin-top: 20px;
  color: ${({ toggle }) => (toggle === 2 ? COLOR.RED : COLOR.BLACK)};
  border-bottom: 2px solid
    ${({ toggle }) => (toggle === 2 ? COLOR.RED : COLOR.WHITE)};
  width: 50%;
  cursor: pointer;
`;
