import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@constants';
import { Options } from '@types';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selOption?: Options;
}

export const OptionButton = ({ isOpen, setIsOpen, selOption }: Props) => {
  const handleOpen = () => {
    if (selOption)
      window.alert('현재 해당 제품을 구매하실 수 없습니다 죄송합니다.');
    setIsOpen(true);
  };
  return (
    <Button
      className={isOpen && !selOption ? 'active' : ''}
      onClick={handleOpen}
    >
      {isOpen || selOption ? '구매하기' : '옵션 선택하기'}
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 50px;
  bottom: 0;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  &.active {
    background-color: ${COLOR.GRAY_BUTTON};
    color: ${COLOR.WHITE};
  }
`;
