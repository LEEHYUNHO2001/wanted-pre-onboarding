import React from 'react';
import styled from '@emotion/styled';
import { ConItem } from '@types';
import { COLOR } from '@constants';

interface Props {
  itemData: ConItem;
}

export const ItemContent = ({ itemData }: Props) => {
  return (
    <ContentBox>
      <ImageContainer>
        <ContentImage src={itemData.imageUrl} alt="productImage" />
      </ImageContainer>
      <RightBox>
        <BrandName>{itemData.conCategory2.name}</BrandName>
        <ProductName>{itemData.name}</ProductName>
        <div>
          <DiscountRate>{itemData.discountRate}%</DiscountRate>
          <DiscountPrice>{itemData.minSellingPrice}원</DiscountPrice>
          <OgPrice>{itemData.originalPrice}원</OgPrice>
        </div>
      </RightBox>
    </ContentBox>
  );
};

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 124px;
  padding: 17px;
  margin-bottom: 18.3px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  margin-right: 18px;
  border-radius: 5px;
  background-color: ${COLOR.GRAY};
`;

const ContentImage = styled.img`
  width: 70px;
  height: 70px;
`;

const RightBox = styled.div`
  padding: 10px 0;
`;

const BrandName = styled.h2`
  font-size: 14px;
  color: ${COLOR.GRAY_DARK};
  font-weight: 400;
  margin-bottom: 7px;
`;

const ProductName = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 13px;
`;

const DiscountRate = styled.span`
  color: ${COLOR.RED};
  font-size: 16px;
  font-weight: 500;
  margin-right: 9px;
`;

const DiscountPrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 6px;
`;

const OgPrice = styled.span`
  font-size: 14px;
  color: ${COLOR.GRAY_DARK};
  text-decoration-line: line-through;
`;
