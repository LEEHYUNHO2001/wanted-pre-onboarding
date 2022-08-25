import React, { Dispatch, SetStateAction } from 'react';
import { Options } from '@types';
import styled from '@emotion/styled';
import { COLOR } from '@constants';
import { getDate } from '@utils/getDate';
import { EditOutlined } from '@ant-design/icons';

interface Props {
  option: Options;
  setSelOtion: Dispatch<SetStateAction<Options | undefined>>;
}

export const OptionSelected = ({ option, setSelOtion }: Props) => {
  const date = getDate(option.expireAt);
  const price = Number(option.sellingPrice).toLocaleString();
  const handleEdit = () => {
    setSelOtion(undefined);
  };
  return (
    <SelectedOptionBox onClick={handleEdit}>
      <span>{`${date}까지 / ${price}원`}</span>
      <EditOutlined />
    </SelectedOptionBox>
  );
};

const SelectedOptionBox = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 20px;
  width: 622px;
  height: 37px;
  margin: auto;
  border-radius: 5px;
  background-color: ${COLOR.GRAY};
  cursor: pointer;
  span {
    font-size: 15px;
  }
`;
