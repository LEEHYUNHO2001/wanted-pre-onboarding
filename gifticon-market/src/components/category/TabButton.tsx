import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Category } from '@types';
import styled from '@emotion/styled';
import { COLOR } from '@constants';

interface Props {
  category: Category;
  id: string | string[];
  idx: number;
  setToMove: Dispatch<SetStateAction<number>>;
}

export const TabButton = ({ category, id, setToMove, idx }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isCurrent = category.id.toString() === id;
  useEffect(() => {
    if (buttonRef.current && isCurrent) {
      const distance = idx * 60;
      setToMove(distance);
    }
  }, []);
  return (
    <Link href={`/categories/${category.id}`} key={category.id} passHref>
      <TabName className={isCurrent ? 'active' : ''} ref={buttonRef}>
        {category.name}
      </TabName>
    </Link>
  );
};

const TabName = styled.button`
  padding: 10px 14px;
  height: 41px;
  border-bottom: 1px solid ${COLOR.GRAY_BORDER};
  color: ${COLOR.BLACK};
  cursor: pointer;
  &.active {
    color: ${COLOR.RED};
    border-bottom: 3px solid ${COLOR.RED};
  }
`;
