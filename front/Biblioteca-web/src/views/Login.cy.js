import React from 'react'
import Login from './Login'

describe('<email />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Login />)
  })


  it('Entrar na aplicação', () => {

    cy.get("[data-cy=input-email]").type("string@gmail.com");
    cy.get("[data-cy=input-senha]").type("string");

    cy.get("[data-cy=btn-entrar]").click();

    cy.url().should('include', '/Home');

  });

  it('limpar campos', () => {

    cy.get("[data-cy=input-email]").type("string@gmail.com");
    cy.get("[data-cy=input-senha]").type("string");

    cy.get("[data-cy=btn-limpar]").click();

    cy.get("[data-cy=input-email]").should('have.text', '')
    cy.get("[data-cy=input-senha").should('have.text', '')

    cy.url().should('include', '/Home');

  });

  it('ir para pag de cadastro', () => {

    cy.get("[data-cy=input-cadastrarLivros]").click()
   
    cy.url().should('include', '/Cadastro');

  });

})

