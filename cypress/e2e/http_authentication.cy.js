/// <reference types="cypress" />

describe('HTTP Authentication Tests', () => {

    it('Access the page', () => {
        // Acessa a página que está protegida
        cy.visit(('https://stag.nivea.com.br'), {
        // Insere as credenciais no cabeçalho da solicitação
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password'),
            }
        });

        cy.contains('Faça seu login/cadastro');
    });

  })
  