/// <reference types="cypress"/>

context('Home Page', () => {
  it('홈페이지 렌더링 테스트', () => {
    cy.visit('http://localhost:3000');
  });
  it('홈페이지에 h2태그에 니콘내콘 포함되는지 테스트', () => {
    cy.get('h2').contains('니콘내콘');
  });
  it('땡철이 url 접속 후 h2태그에 땡철이 잘 입력되어 있는지 테스트', () => {
    cy.get('a[href*="categories/1?categoryId="]').click();
    cy.url().should('include', 'categories');
    cy.get('h2').contains('땡철이');
  });
  it('아이템 클릭 후 div태그에 유의사항 포함되어 있는지 테스트', () => {
    cy.get('a[href*="items/429"]').click();
    cy.url().should('include', 'items');
    cy.get('div').contains('유의사항');
    cy.get('button').contains('옵션 선택하기');
  });
  it('다시 홈페이지로 돌아간 후, 헤더 니콘내콘으로 다시 변경 되는지 테스트', () => {
    cy.get('a[href*="/"]').click();
    cy.get('h2').contains('니콘내콘');
  });
  it('캐러셀 버튼 클릭 후 슬라이딩 테스트', () => {
    cy.get('ul').get('button').click({ multiple: true });
  });
});

export {};
