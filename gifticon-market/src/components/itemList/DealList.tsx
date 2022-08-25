import styled from '@emotion/styled';
import { ItemBox } from '@components/common';
import { useData } from '@hooks/useData';
import { ConItem } from '@types';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const DealList = () => {
  const [items, setItems] = useState<ConItem[]>();
  const { data } = useData('con-items/soon');

  useEffect(() => {
    data && setItems(data.conItems);
  }, [data]);

  return (
    <DealListContainer>
      {items &&
        items.map((item: ConItem) => (
          <li key={item.id}>
            <Link href={`/items/${item.id}`} passHref>
              <a>
                <ItemBox item={item} />
              </a>
            </Link>
          </li>
        ))}
    </DealListContainer>
  );
};

const DealListContainer = styled.ul`
  margin-top: 13px;
`;
