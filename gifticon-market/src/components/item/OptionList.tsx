import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Options } from '@types';
import { COLOR } from '@constants';
import { OptionContent } from './OptionContent';
import { OptionSelected } from './OptionSelected';
import { CloseOutlined } from '@ant-design/icons';

interface Props {
  options: Options[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  dcRate?: number;
  setSelOtion: Dispatch<SetStateAction<Options | undefined>>;
  selOption?: Options;
}
interface StyleProps {
  optionBoxHeight: string;
}

export const OptionList = ({
  options,
  isOpen,
  setIsOpen,
  dcRate,
  selOption,
  setSelOtion,
}: Props) => {
  const optionBoxHeight = selOption ? '70px' : '280px';
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <ListContainer className={isOpen ? 'active' : ''}>
      <ListHeader className={selOption ? 'hide' : ''}>
        옵션 선택하기
        <CloseOutlined onClick={handleClose} />
      </ListHeader>
      <OptionBox optionBoxHeight={optionBoxHeight}>
        {selOption ? (
          <OptionSelected option={selOption} setSelOtion={setSelOtion} />
        ) : (
          options.map((option, i) => (
            <OptionContent
              key={`option-${i}`}
              option={option}
              dcRate={dcRate}
              setSelOtion={setSelOtion}
            />
          ))
        )}
      </OptionBox>
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  position: absolute;
  z-index: 100;
  max-height: 0;
  width: 100%;
  bottom: 50px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  &.active {
    max-height: 400px;
  }
`;

const ListHeader = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 17px;
  line-height: 50px;
  background-color: ${COLOR.GRAY};
  font-weight: 500;
  svg {
    font-size: 22px;
    cursor: pointer;
  }
  &.hide {
    display: none;
  }
`;

const OptionBox = styled.ul<StyleProps>`
  display: flex;
  flex-direction: column;
  height: ${props => props.optionBoxHeight};
  overflow: scroll;
  background-color: ${COLOR.WHITE};
  &::-webkit-scrollbar {
    display: none;
  }
`;
