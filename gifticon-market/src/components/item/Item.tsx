import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ItemDescription } from './ItemDescription';
import { OptionButton } from './OptionButton';
import { OptionList } from './OptionList';
import { COLOR, STYLE } from '@constants';
import { useData } from '@hooks/useData';
import { ConItem, Options } from '@types';
import { ItemBox } from '@components/common/ItemBox';

interface Props {
  id: string | string[];
}

export const Item = ({ id }: Props) => {
  const [itemData, setItemData] = useState<ConItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selOption, setSelOtion] = useState<Options>();
  const { data } = useData(`con-items/${id}`);
  useEffect(() => {
    if (data) {
      setItemData(data.conItem);
    }
  }, [data]);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    itemData && (
      <ItemContainer>
        <h2 className="sr-only">상품 정보</h2>
        <ItemBox item={itemData} />
        <ItemDescription desc={itemData.warning} />
        <OptionList
          options={itemData.options}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dcRate={itemData.discountRate}
          selOption={selOption}
          setSelOtion={setSelOtion}
        />
        <OptionButton
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selOption={selOption}
        />
        <Modal className={isOpen ? 'active' : ''} onClick={handleClose}></Modal>
      </ItemContainer>
    )
  );
};

const ItemContainer = styled.section`
  position: relative;
  background-color: ${COLOR.WHITE};
  height: 100vh;
`;
const Modal = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100% - ${STYLE.HEADER_H} - 111px);
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.4);
  &.active {
    display: block;
  }
`;
