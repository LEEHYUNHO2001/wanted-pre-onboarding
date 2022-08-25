import styled from '@emotion/styled';
import { ConItem } from '@types';
import { COLOR } from '@constants';

interface ItemProps {
  item: ConItem;
}

export const ItemBox = ({ item }: ItemProps) => {
  return (
    <ItemContainer>
      <Thumbnail src={item.imageUrl} />
      <ItemInfo>
        <BrandName>{item.conCategory2?.name}</BrandName>
        <ItemName>{item.name}</ItemName>
        <Price>
          <span className="rate">{item.discountRate}%</span>
          <span className="min">{item.minSellingPrice.toLocaleString()}원</span>
          <span className="origin">
            {item.originalPrice.toLocaleString()}원
          </span>
        </Price>
      </ItemInfo>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${COLOR.WHITE};
  border-bottom: 1px solid ${COLOR.GRAY};
`;

const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;

const BrandName = styled.span`
  margin-bottom: 5px;
  color: ${COLOR.GRAY_FONT};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
`;

const ItemName = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
`;

const Price = styled.div`
  span + span {
    margin-left: 10px;
  }
  .rate {
    color: ${COLOR.RED};
  }
  .min {
    font-weight: 700;
  }
  .origin {
    font-size: 14px;
    text-decoration: line-through;
    color: ${COLOR.GRAY_FONT};
  }
`;
