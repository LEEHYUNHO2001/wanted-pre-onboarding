import React, { useState } from 'react';
import styled from '@emotion/styled';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { COLOR } from '@constants';
import { QCD } from '@types';

interface Props {
  data: QCD;
}

export const QnAContentItem = ({ data }: Props) => {
  const { question, answer } = data;
  const [onAnswer, setOnAnswer] = useState(false);
  const handleAnswer = () => {
    setOnAnswer(!onAnswer);
  };

  return (
    <div>
      <Question onClick={handleAnswer}>
        <div>
          <Q>Q.</Q>
          {question}
        </div>
        <Icon>{onAnswer === true ? <DownOutlined /> : <UpOutlined />}</Icon>
      </Question>
      {onAnswer === true && <Answer>{answer}</Answer>}
    </div>
  );
};

const Question = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.GRAY_FONT};
  cursor: pointer;
`;
const Q = styled.span`
  margin-right: 10px;
  color: ${COLOR.RED};
`;
const Icon = styled.div`
  color: ${COLOR.GRAY_FONT};
`;
const Answer = styled.div`
  padding: 30px 15px;
  background-color: ${COLOR.GRAY_BORDER};
`;
