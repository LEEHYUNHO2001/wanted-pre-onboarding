import styled from '@emotion/styled';
import { STYLE, COLOR } from '@constants';
import { DealList } from '@components/itemList';

export const MainDeal = () => {
  return (
    <MainDealContainer>
      <h3>
        <span>놓치지 마세요</span>
        오늘의 땡처리콘!
      </h3>
      <DealList />
    </MainDealContainer>
  );
};

const MainDealContainer = styled.section`
  h3 {
    font-size: 16px;
    padding-left: ${STYLE.PADDING};
    margin-bottom: 14px;

    span {
      display: block;
      font-size: 14px;
      font-weight: 400;
      color: ${COLOR.RED};
    }
  }
`;
