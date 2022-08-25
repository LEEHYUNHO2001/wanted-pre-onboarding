import React from 'react';
import styled from '@emotion/styled';
import { QCD, QCDProps } from '@types';
import { COLOR } from '@constants';
import { QnAContentItem } from '.';
import { useData } from '@hooks/useData';

interface Props {
  name: string;
  toggle: number;
}

export const QnAContent = ({ name, toggle }: Props) => {
  const { data: QnAContentData, error: QnAContentError } = useData(
    'qas',
    `qaTypeId=${toggle}`
  );
  if (!QnAContentData) return <div>로딩중..</div>;
  if (QnAContentError) return <div>페이지 에러</div>;

  return (
    <Container>
      <h2 className="sr-only">{name} 고객 센터</h2>
      <ul>
        {QnAContentData.qas.map((data: QCD) => {
          return (
            <QnAContentItem
              key={`QnAContentData_${data.id}`}
              data={data}
            ></QnAContentItem>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.section`
  background-color: ${COLOR.WHITE};
`;
