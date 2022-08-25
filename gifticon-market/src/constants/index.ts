export const API_ENDPOINT = 'https://api2.ncnc.app';
import { burgerking, pizza, starbucks } from '@images';

export const COLOR = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: '#F1F3F4',
  GRAY_DARK: '#808080',
  GRAY_FONT: '#999999',
  GRAY_BORDER: '#EBECED',
  GRAY_BUTTON: '#CCCCCC',
  RED: '#FF5757',
};

export const STYLE = {
  MAIN_WIDTH: '672px',
  HEADER_H: '60px',
  PADDING: '17px',
};

export const CAROUSEL_IMAGES = [starbucks, pizza, burgerking];

export const DEFAULT_DESC = [
  {
    label: '유의사항',
    text: ' · 쿠폰 사용처에서 유효기간 내 사용이 가능합니다.\n · 포장 및 배달, 홀 이용 시 쿠폰 사용이 가능합니다. (맥도날드, 롯데리아 등 햄버거 딜리버리는 이용불가/ 각 매장의 영업 방침에 따라 포장 및 배달, 홀 이용이 불가능할 수 있습니다. 구매전 반드시 이용할 매장에 확인바랍니다.)\n · 음료는 브랜드와 매장에 따라 종류가 다를 수 있습니다.\n · 쿠폰에 명시되어 있는 상품으로만 교환이 가능합니다. (타 제품 교환불가)\n · 배달 서비스 요금이 추가될 수 있습니다. 반드시 구매전 해당 매장에 확인 바랍니다. \n · 포인트 적립 및 제휴카드 할인 등은 교환처의 정책에 따릅니다.\n · 공항, 백화점, 대형 쇼핑몰, 휴게소 등 일부 특수매장에서는 사용이 제한될 수 있습니다.',
  },
  {
    label: '환불규정',
    text: ' · 본 쿠폰은 환불 및 유효기간 연장이 불가합니다.\n · 쿠폰 사용이 불가할 경우, 카카오톡 플러스친구 @니콘내콘으로 문의해주시기 바랍니다. ',
  },
];
