import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Options } from '@types';
import { COLOR } from '@constants';
import { getDate } from '@utils/getDate';

interface Props {
  option: Options;
  dcRate: number | undefined;
  setSelOtion: Dispatch<SetStateAction<Options | undefined>>;
}

export const OptionContent = ({ option, dcRate, setSelOtion }: Props) => {
  const date = getDate(option.expireAt);
  const price = Number(option.sellingPrice).toLocaleString();
  const handleClick = () => {
    setSelOtion(option);
  };
  return (
    <OptionBox onClick={handleClick}>
      <div>
        <MainTop>
          <LabelText>유효기간</LabelText>
          <span>{date} 까지</span>
        </MainTop>
        <MainBottom>
          <LabelText>할인가</LabelText>
          <span>{price}원</span>
        </MainBottom>
      </div>
      <DiscounteRate>{dcRate}%</DiscounteRate>
    </OptionBox>
  );
};

const OptionBox = styled.li`
  display: flex;
  flex-shrink: 0;
  height: 70px;
  padding: 0 17px;
  align-items: center;
  border-bottom: 1px solid ${COLOR.GRAY_BORDER};
  cursor: pointer;
`;

const LabelText = styled.span`
  display: inline-block;
  width: 44px;
  font-size: 12px;
  color: ${COLOR.GRAY_DARK};
  margin-right: 9px;
`;
const MainTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;
const MainBottom = styled.div`
  display: flex;
  align-items: center;
`;
const DiscounteRate = styled.div`
  color: ${COLOR.RED};
  font-size: 17px;
  margin-left: auto;
`;
