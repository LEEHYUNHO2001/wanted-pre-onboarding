import {
  Beef,
  Calculator,
  Carousel,
  Estimate,
  House,
  Study,
  Messenger,
  Gift,
} from "images/image";

export const CARDS = [6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3];

export const CARDS_INFO = {
  1: {
    title: "캐러셀",
    desc: "소개 페이지에서 사용되는 캐러셀 구현",
    link: "https://onboarding-sable.vercel.app/",
    git: "https://github.com/LEEHYUNHO2001/wanted_pre_onboarding",
    velog: "https://velog.io/@leehyunho2001/Carousel-%EC%8B%AC%ED%99%94",
    image: Carousel,
  },
  2: {
    title: "환율 계산기",
    desc: "API를 활용한 실시간 환율계산기",
    link: "http://beefplz.s3-website.ap-northeast-2.amazonaws.com/",
    git: "https://github.com/LEEHYUNHO2001/Currency-Converter",
    velog:
      "https://velog.io/@leehyunho2001/%EC%8B%A4%EC%8B%9C%EA%B0%84-%ED%99%98%EC%9C%A8-%EA%B3%84%EC%82%B0",
    image: Calculator,
  },
  3: {
    title: "상품 등록 관리자 페이지",
    desc: "플랫폼의 관리자 페이지에서 상품 등록 페이지",
    link: "https://wanted-admin-product.netlify.app/",
    git: "https://velog.io/@leehyunho2001/%EC%96%B4%EB%93%9C%EB%AF%BC-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D-%ED%8E%98%EC%9D%B4%EC%A7%80",
    image: Beef,
  },
  4: {
    title: "견적 요청 페이지",
    desc: "중복 선택이 가능한 필터링을 가진 견적 페이지",
    link: "https://estimate-board-page.herokuapp.com/",
    git: "https://github.com/LEEHYUNHO2001/estimate-board",
    velog:
      "https://velog.io/@leehyunho2001/%EA%B2%AC%EC%A0%81-%EC%9A%94%EC%B2%AD-%ED%8E%98%EC%9D%B4%EC%A7%80",
    image: Estimate,
  },
  5: {
    title: "웹 메신저",
    desc: "Firebase와 Redux로 구현한 실시간 채팅방",
    link: "https://messenger-web-b98e6.web.app/",
    git: "https://github.com/LEEHYUNHO2001/messenger-web",
    velog:
      "https://velog.io/@leehyunho2001/%EC%9B%B9-%EB%A9%94%EC%8B%A0%EC%A0%80",
    image: Messenger,
  },
  6: {
    title: "기프티콘 마켓",
    desc: "Q & A 페이지에서 Pre-Rendering에 대해 고민하며 설계한 플랫폼",
    link: "https://gifticon-market.vercel.app/",
    git: "https://github.com/LEEHYUNHO2001/gifticon-market",
    velog:
      "https://velog.io/@leehyunho2001/%EA%B8%B0%ED%94%84%ED%8B%B0%EC%BD%98-%EC%87%BC%ED%95%91",
    image: Gift,
  },
  7: {
    title: "제작 예정",
    desc: "제작 예정입니다.",
    link: "",
    git: "",
    velog: "",
    image: House,
  },
  8: {
    title: "제작 예정",
    desc: "제작 예정입니다.",
    link: "",
    git: "",
    velog: "",
    image: Study,
  },
};

export const CARD_STYLE = {
  width: 35,
  height: 25,
  radius: "5px",
};

export const SLIDER_STYLE = {
  width: 73.5,
  height: 43,
  transition: "transform 0.3s ease-in-out",
};

export const FIRST_INDEX = CARDS.indexOf(1);
export const LAST_INDEX = CARDS.lastIndexOf(8);
export const CENTER_IN_BOX = (SLIDER_STYLE.width - CARD_STYLE.width) / 2;
export const CALC = {
  firstPosition: FIRST_INDEX * CARD_STYLE.width - CENTER_IN_BOX,
  lastPosition: LAST_INDEX * CARD_STYLE.width - CENTER_IN_BOX,
};
