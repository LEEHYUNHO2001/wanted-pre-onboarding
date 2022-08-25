import { QTDProps } from '@types';
import React from 'react';
import { OftenQnA, OneOnOne } from '.';

export const QnAContainer = ({ QnATypeData }: QTDProps) => {
  return (
    <section>
      <h1 className="sr-only">고객 상담 페이지</h1>
      <OneOnOne />
      <OftenQnA QnATypeData={QnATypeData} />
    </section>
  );
};
