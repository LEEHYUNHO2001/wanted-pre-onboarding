import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useData } from '@hooks/useData';
import { Category } from '@types';
import { COLOR, STYLE } from '@constants';
import styled from '@emotion/styled';
import Link from 'next/link';
import { TabButton } from './TabButton';

interface Props {
  id: string | string[];
}

export const CategoryTab = ({ id }: Props) => {
  const [toMove, setToMove] = useState(0);
  const { data } = useData(`con-category1s`);
  const [categories, setCategories] = useState<Category[]>();
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    data && setCategories(data.conCategory1s);
  }, [data]);
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollLeft = toMove;
    }
  }, [sectionRef, toMove]);
  return (
    <TabSection ref={sectionRef}>
      {categories &&
        categories.map((category: Category, i) => (
          <TabButton
            key={`tab-${i}`}
            category={category}
            idx={i}
            id={id}
            setToMove={setToMove}
          />
        ))}
    </TabSection>
  );
};

const TabSection = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  height: 41px;
  background-color: #fff;
  font-size: 16px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
