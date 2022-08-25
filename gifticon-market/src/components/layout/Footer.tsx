import { useState } from 'react';
import { COLOR, STYLE } from '@constants';
import { DownOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const Footer = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <FooterContainer>
      <PageInfo>
        <PageDetailInfo>회사소개서</PageDetailInfo>
        <PageDetailInfo>사업/제휴 문의</PageDetailInfo>
        <PageDetailInfo>개인정보처리방침</PageDetailInfo>
      </PageInfo>
      <CompanyBox>
        <Company>(주) 더블앤씨</Company>
        <Arrow onClick={handleClick} className={show ? 'active' : ''} />
      </CompanyBox>
      {show && (
        <CompanyInfo>
          <CompanyDetailInfo>
            대표 : 현호님소고기4조 | 이메일 : plsBeef.com
          </CompanyDetailInfo>
          <CompanyDetailInfo>
            사업자 등록번호 : 123-456-789 | 통신판매업신고번호 :
            제2022-원티드-프리온보딩-프론트엔드
          </CompanyDetailInfo>
          <CompanyDetailInfo>
            개인정보보호책임자 : 현호님소고기사조
          </CompanyDetailInfo>
          <CompanyDetailInfo>코드시 취업로 한다구</CompanyDetailInfo>
          <CompanyDetailInfo>고객센터: 12-345-678</CompanyDetailInfo>
        </CompanyInfo>
      )}
    </FooterContainer>
  );
};

const Arrow = styled(DownOutlined)`
  &.active {
    transform: rotate(180deg);
  }
`;

const CompanyBox = styled.div`
  display: flex;
  align-items: center;
`;

const Company = styled.div`
  margin: 10px 5px;
  font-size: 16px;
  font-weight: 500;
  color: ${COLOR.BLACK};
`;

const CompanyDetailInfo = styled.li`
  padding: 3px;
  font-size: 11px;
  font-weight: 300;
  color: ${COLOR.GRAY_FONT};
`;

const CompanyInfo = styled.ul``;

const PageDetailInfo = styled.li`
  padding: 5px;
  font-size: 12px;
  color: ${COLOR.GRAY_FONT};
  cursor: pointer;
`;

const PageInfo = styled.ul``;

const FooterContainer = styled.footer`
  padding: 20px ${STYLE.PADDING};
  background-color: ${COLOR.GRAY};
`;
