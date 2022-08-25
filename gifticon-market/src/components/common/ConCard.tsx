import React from 'react';
import { Category } from '@types';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface CategoryProps {
  category: Category;
}

export const ConCard = ({ category }: CategoryProps) => {
  const router = useRouter();
  const categoryId = router.query.id;
  const href = !!category.conItems
    ? `/brands/${category.id}`
    : `/categories/${category.id}`;

  return (
    <LinkBox>
      <Link
        href={{
          pathname: href,
          query: { categoryId: JSON.stringify(categoryId) },
        }}
        passHref
        key={category.id}
      >
        <a>
          <div>
            <img src={category.imageUrl} />
            <span>{category.name}</span>
          </div>
        </a>
      </Link>
    </LinkBox>
  );
};

const LinkBox = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    background: #fff;
    height: 8rem;
    cursor: default;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      :hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      transition: -webkit-transform 0.25s ease-out;
    }
    span {
      margin-top: 10px;
      font-size: 12px;
    }
    img {
      width: 45px;
      height: 45px;
    }
  }
`;
