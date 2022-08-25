import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { COLOR, DEFAULT_DESC } from '@constants';
import { getDescription } from '@utils/getDescription';
import { Description } from '@types';

interface Props {
  desc?: string;
}

export const ItemDescription = ({ desc }: Props) => {
  const [descriptions, setDescriptions] = useState<Description[]>();
  useEffect(() => {
    if (desc) {
      const descFetch = async () => {
        const descResponse = await getDescription(desc);
        setDescriptions(descResponse);
      };
      descFetch();
    }
  }, [desc]);
  return (
    <DescContainer>
      {descriptions
        ? descriptions.map((data, i) => (
            <DescBox key={`desc-${i}`}>
              <Label>{data.label}</Label>
              <p>{data.text}</p>
            </DescBox>
          ))
        : DEFAULT_DESC.map((data, i) => (
            <DescBox key={`desc-${i}`}>
              <Label>{data.label}</Label>
              <p>{data.text}</p>
            </DescBox>
          ))}
    </DescContainer>
  );
};

const DescContainer = styled.div`
  padding: 0 20px;
  margin-top: 30px;
  font-size: 14px;
`;

const DescBox = styled.div`
  margin-bottom: 20px;
  & > p {
    white-space: pre-line;
    margin-bottom: 20px;
    color: ${COLOR.GRAY_FONT};
    line-height: 25px;
  }
`;

const Label = styled.div`
  margin-bottom: 5px;
`;
