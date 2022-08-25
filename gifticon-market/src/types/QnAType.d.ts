export interface QCD {
  id: number;
  answer: string;
  question: string;
}

export interface QTD {
  id: number;
  key: string;
  name: string;
}

export interface QTDProps {
  QnATypeData: QTD[];
}

export interface QCDProps {
  QnAContentData: QCD[];
  name: string;
}
