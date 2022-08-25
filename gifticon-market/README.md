# 니콘 내콘 모바일 페이지 클론

## 프로젝트 소개

> 모바일 쿠폰 중고 거래 사이트이며, 앱 형태의 모습으로 웹에서 구현하였습니다.

## member

<table>
  <tr>
        </td>
      <td align="center">
      <a href="https://github.com/LEEHYUNHO2001"
        ><img
          src="https://avatars.githubusercontent.com/LEEHYUNHO2001"
          width="100px;"
          alt=""
        /><br /><sub><b>이현호</b></sub></a>
    <br />
    </td>
    <td align="center">
      <a href="https://github.com/hoonjoo-park"
        ><img
          src="https://avatars.githubusercontent.com/hoonjoo-park"
          width="100px;"
          alt=""
        /><br /><sub><b>박훈주</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/Yoon-CH"
        ><img
          src="https://avatars.githubusercontent.com/Yoon-CH"
          width="100px;"
          alt=""
        /><br /><sub><b>윤창현</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/devjoylee"
        ><img
          src="https://avatars.githubusercontent.com/devjoylee"
          width="100px;"
          alt=""
        /><br /><sub><b>이주영</b></sub></a
      ><br />
  </tr>
</table>

| 팀 구성 | 담당                                           |
| ------- | ---------------------------------------------- |
| 이현호  | 메뉴창 , 고객 센터 페이지                      |
| 박훈주  | 메인 홈 케러셀, 상품 상세 페이지               |
| 윤창현  | 메인 홈 카테고리 카드, 카테고리 페이지, footer |
| 이주영  | 상품 리스트 페이지, 땡처리 리스트, header      |

<br />

## 배포 주소

### [https://gifticon-market.vercel.app/](https://gifticon-market.vercel.app/)

<br />

## 실행 방법

### To Start

```bash
$ yarn dev
```

### E2E 테스트

```bash
$ yarn test
```

<br />

## 사용 기술 및 스택

- Stack
  - Next.js + React Hooks
  - TypeScript
  - styled-components
  - Deploy : Vercel
  - Other : Git / GitHub
  - Build Tool (Create Next App)
  - Code Quality Tool (Prettier)

<br />

## 과제 구현 목록

### 메뉴 박스 , 고객센터 페이지: 이현호

- 고객 센터 페이지
  - QnA에서 구매와 판매라는 목록의 데이터인 `qa-types` API 엔드포인트는 유동적으로 변하지 않을 것이라는 생각에 pages에서 SSG 적용을 하여 컴포넌트에 반환.
  - 구매 또는 판매를 클릭함에 따라 state가 변경되고, 이 값을 `useData`에서 쿼리에 변수로 넘겨주어 알맞은 데이터를 받아오는 토글 및 컴포넌트 생성.
  - 질문과 답변 열고 닫는 기능을 1:1로 수행하기 위해 map 메서드 안에서 컴포넌트를 생성하여 state를 관리. 첫 번째 질문을 클릭했을 경우 첫 번째 답변만 노출.
  - 웹 표준 준수 및 Semaintic 마크업을 설계하며 SEO를 고려. 스크린 리더에서만 읽히고 UI에서는 보이지 않는 `sr-only` className을 global에 추가.
- 메뉴창
  - 햄버거 버튼을 클릭했을 때, 메뉴바가 왼쪽에서 슬라이드 되며 나타나도록 UI 구현.

### 메인 홈 케러셀 , 상품 상세 페이지 : 박훈주

- 메인 홈 케러셀
  - Fake 배너를 양 옆에 배치한 뒤, 트랜스폼 및 트랜지션 효과를 적용하여 무한 슬라이드 기능을 구현
  - 드래그 슬라이드의 경우, `mouseDown`과 `mouseUp` 간의 마우스 이벤트의 page.X값의 차를 이용하여 구현
  - 캐러셀 이미지의 경우 직접 figma를 통해 제작하였음
- 상품 상세 페이지
  - 상품 유의사항(설명) 부분의 ApiData가 figma 요구사항의 템플릿과 동일하지 않았다. 하지만, 최대한 홈페이지 및 figma 요구사항에 맞추기 위해 정규표현식 및 String 제어를 통해 정제하여 뷰에 띄워 구현.
  - 이후의 옵션 아코디언과 옵션 선택에 따른 뷰의 변화는 useState와 props 등의 변화, 그리고 조건문을 통해 구현

### 메인 홈 카테고리 카드, 카테고리 페이지, footer : 윤창현

- 메인 카테고리 카드
  - 메인 홈페이지에 `concard` 컴포넌트를 만들어 재사용이 가능하도록 구현.
  - `grid`를 사용하여 레이아웃을 구현하고 `useData`를 통해 데이터를 연동.
- 카테고리 페이지
  - `id 값`을 넘겨주어 카테고리 카드와 탭을 구현.
  - `id === category.id`일 경우 className 활용해 현재 카테고리 탭의 색상 변경
- footer
  - 회사 이름 옆에 위 / 아래 방향 아이콘을 활용해 세부 기업 정보를 show / hide 하는 기능을 구현.

### 상품 리스트 페이지, 땡처리 리스트, header : 이주영

- 기프티콘 리스트
  - `useRouter`로 동적으로 `id`값을 가져와 클릭된 카테고리 id와 리스트가 노출 될 브랜드 id를 각각 저장하여 카테고리>브랜드>아이템리스트 순서로 페이지 라우팅 구현
  - `useData`로 해당 카테고리의 아이템 목록을 가져와 리스트 컴포넌트를 만들고 `Link` 태그를 사용해 클릭 시 해당 아이템의 상세페이지로 이동하도록 구현.
- 땡처리 리스트
  - `useData`로 땡처리 아이템 정보를 가져와 컴포넌트를 만들고 `Link` 태그를 사용해 클릭 시 해당 아이템의 상세페이지로 이동하도록 구현.
  - 땡처리 컴포넌트는 메인과 카테고리 섹션에 각각 전달하여 같은 정보가 노출되도록 구현.
- 동적 Header
  - 라우팅이 동작할때마다 data에서 해당 페이지`name` 값을 가져와 title로 출력
  - `<Head>`태그를 사용해 브라우저 창 제목도 함께 수정되도록 구현.

<br />

## CRA 구조

```markdown
src
│
├─components
│ ├─carousel
│ ├─category
│ ├─common
│ ├─item
│ ├─itemList
│ ├─layout
│ ├─main
│ └─QnA
├─constants
├─hooks
├─images
├─pages
│ ├─api
│ ├─brands
│ ├─categories
│ └─items
├─styles
├─types
└─utils
```

<br />

## 커밋 컨벤션

깃모지를 사용하여 직관성을 높이고, 기능이나 UI 설계에 따른 메세지를 커밋 메세지에 담는것을 컨벤션으로 결정했습니다. 깃모지로 인해 상대방이 어떤 작업을 수행했는지 한 눈에 확인할 수 있고, 메세지를 보며 조금 더 상세한 상황을 파악할 수 있습니다.

| 깃모지 | 사용 예시               |
| ------ | ----------------------- |
| 🎉     | init                    |
| 🚚     | 디렉토리 또는 파일 이동 |
| ✨     | 기능 구현               |
| 💄     | CSS 스타일링            |
| ♻️     | 리팩토링                |
| 📝     | Readme 수정             |
| ➕     | 모듈 추가               |
| 🐛     | 버그 해결               |
| 🚑️    | 치명적인 오류 해결      |

<br />

## 과제 후기

### **이현호** 😎

CSR, SSR, SSG에 대한 개념을 코드와 디버깅으로 확인하며 확실하게 이해할 수 있었습니다. 이 세가지 방법을 어떤 상황에서 사용해야 할지에 대한 고민을 하며 프로젝트를 설계하는 것이 중요하는 것을 알게 되었습니다. 그리고 SEO를 신경쓰며 웹 표준을 준수하려는 노력과 데이터를 어디에서 불러올지에 대한 생각도 성장하는데 영향을 많이 끼친 것 같습니다.

### 윤창현 ✨

Next.js를 사용하기 전에 왜 사용하며, 어떠한 장점이 있는지를 알고 사용하게 되니 처음 경험하는 것이지만 동기분들의 설명을 듣고 더 빠르게 이해하고 습득 할 수 있었던 것 같고 문제를 마주하면 해결하기 위해 노력하는 습관이 자리잡아가는 것을 느낄 수 있었던 좋은 시간이었다.

### **박훈주** 🍙

Next.js를 활용한 협업을 하며, SSR과 CSR 간의 차이를 팀원들과 함게 학습할 수 있는 좋은 기회였다고 생각합니다. 또한, Next.js에서의 데이터 전달과 라우팅 등에 대한 이해도를 높일 수 있었습니다. 마지막으로 정규표현식과 String데이터의 정제, 그리고 typescript에 대한 숙련도를 높일 수 있었기에 굉장히 유익하고 값진 프로젝트였다고 생각합니다.

### **이주영 👧🏻**

이번 프로젝트를 통해 Next.js를 사용해 데이터를 불러오고 동적으로 라우팅하는 방식에 대해 배울 수 있었습니다. 팀원들이 각각 다른 라우팅 작업을 맡아서 좀더 효율적으로 협업을 할 수 있었고 중간 점검에서 진행한 코드리뷰로 코드의 퀄리티 또한 높힐 수 있었습니다.
