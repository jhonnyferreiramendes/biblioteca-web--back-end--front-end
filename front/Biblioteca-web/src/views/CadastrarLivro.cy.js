import React from 'react'
import Login from './Login'
import CadastrarLivro from './CadastrarLivro'

describe('<email />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CadastrarLivro />)
  })


  it('cadastar', () => {

    cy.get("[data-cy=input-nome]").type("Livro 1");
    cy.get("[data-cy=input-isbn]").type("123");
    cy.get("[data-cy=input-area]").type("Humanas");

    cy.get("[data-cy=btn-cadastrar]").click();

    cy.get(Response.toString)

  });

  

  it('ir para pag de lista', () => {

    cy.get("[data-cy=input-listar]").click()
   
    cy.url().should('include', '/ListarLivros');

  });

})

