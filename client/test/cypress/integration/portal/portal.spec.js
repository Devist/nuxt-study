/* eslint-disable */

describe('포털(메인) 페이지 테스트', () => {
  it('1. 포털(메인) 페이지로 이동', () => {
    cy.visit('/');
    cy.contains('h1', 'nuxt-study');
  });

  it('Go to about page', () => {
    cy.get('a.about-link').click();
    cy.contains('h1', 'About');
  });
});
