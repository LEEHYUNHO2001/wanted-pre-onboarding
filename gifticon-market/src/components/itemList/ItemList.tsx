import React, { useEffect, useState } from 'react';
import { COLOR } from '@constants';
import styled from '@emotion/styled';
import { useData } from '@hooks/useData';
import { ConCategory2 } from '@types';
import Link from 'next/link';
import { ItemBox } from '../common';

interface ItemListProps {
  id: string | string[];
  categoryId: string | string[];
}

export const ItemList = ({ id, categoryId }: ItemListProps) => {
  const { data } = useData(`con-category1s/${categoryId}/nested`);
  const [brand, setBrand] = useState<ConCategory2>();

  useEffect(() => {
    const brands = data && data.conCategory1.conCategory2s;
    brands &&
      brands.map((brand: ConCategory2) => {
        if (brand.id === Number(id)) {
          setBrand(brand);
        }
      });
  }, [brand, data, id]);

  return (
    <ItemListContainer>
      {brand &&
        brand.conItems.map(item => (
          <li key={item.id}>
            <Link href={`/items/${item.id}`} passHref>
              <a>
                <ItemBox item={item} />
              </a>
            </Link>
          </li>
        ))}
    </ItemListContainer>
  );
};

const ItemListContainer = styled.ul`
  border-top: 1px solid ${COLOR.GRAY_BORDER};
`;
