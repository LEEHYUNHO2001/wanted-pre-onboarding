import React from 'react';
import { useEffect, useState } from 'react';
import { CategoryTab } from './CategoryTab';
import { ConCard } from '@components/common';
import { useData } from '@hooks/useData';
import { ConCategory1 } from '@types';
import { STYLE } from '@constants';
import styled from '@emotion/styled';
import { DealList } from '@components/itemList';

interface Props {
  id: string | string[];
}

export const CategoryBox = ({ id }: Props) => {
  const { data } = useData(`con-category1s/${id}/nested`);
  const [categories, setCategories] = useState<ConCategory1[]>();

  useEffect(() => {
    data && setCategories(data.conCategory1.conCategory2s);
  }, [data]);

  return (
    <>
      <CategoryTab id={id} />
      {id === '1' ? (
        <DealList />
      ) : (
        <CategoryContainer>
          {categories &&
            categories.map((category: ConCategory1) => (
              <ConCard key={category.id} category={category} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

const CategoryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;
  padding: ${STYLE.PADDING};
`;
