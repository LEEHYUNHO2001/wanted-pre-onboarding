import { useEffect, useState } from 'react';
import { ConCard } from '@components/common';
import { useData } from '@hooks/useData';
import { Category } from '@types';
import { STYLE } from '@constants';
import styled from '@emotion/styled';

export const MainCategory = () => {
  const { data } = useData(`con-category1s`);
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    data && setCategories(data.conCategory1s);
  }, [data]);

  return (
    <CategoryContainer>
      <ul>
        {categories &&
          categories.map((category: Category) => (
            <ConCard key={category.id} category={category} />
          ))}
      </ul>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.section`
  padding: ${STYLE.PADDING};
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3px;
  }
`;
