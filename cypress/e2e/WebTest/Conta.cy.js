/// <reference types="cypress"/>

describe('Gerenciar Conta', () => {

    beforeEach(() => {
        cy.visit('https://auth.organizze.com.br/login');
        cy.fixture("usuarioComCadastro").then((usuario) => {
            cy.get('#email').type(usuario.email);
            cy.get('#password').type(usuario.senha);
        })
        cy.get('button[type="submit"]').click();
    });

    it('Adiconar Despesa', () => {
        let valor;
        cy.contains("[ui-sref='dashboard']", "visão geral").click();

        //Assert para verificar se esa na pagina Visao Geral e guardar valor para testar se a despesa foi concluida com exito.
        cy.get('p.amount.expense.ng-binding')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                valor = text.trim();
            });

        cy.contains('p.btn-title', 'DESPESA').click();
        cy.get('#showDescription').type('Conta de Luz');
        cy.get('#amountValue').type('100,00');
        cy.get('#showCategories-selectized').type('Assinaturas e serviços');

        cy.get('button')
            .find('i.icon-done-light')
            .click();

        cy.wait(2000);

        cy.get('p.amount.expense.ng-binding')
            .should('be.visible')
            .then((element) => {
                const novoValor = element.text().trim();
                expect(novoValor).not.to.eq(valor);
            });

    });

    it('Adicionar Receita', () => {
        let valor;
        cy.contains("[ui-sref='dashboard']", "visão geral").click();

        //Assert para verificar se esa na pagina Visao Geral e guardar valor para testar se a receita foi adicionada com exito.
        cy.get('p.amount.earning.ng-binding')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                valor = text.trim();
            });

        cy.contains('p.btn-title', 'RECEITA').click();
        cy.get('#showDescription').type('Mais Dinheiro');
        cy.get('#amountValue').type('1000,00');
        cy.get('#showCategories-selectized').type('Salário');

        cy.get('button')
            .find('i.icon-done-light')
            .click();

        cy.wait(2000);

        cy.get('p.amount.earning.ng-binding')
            .should('be.visible')
            .then((element) => {
                const novoValor = element.text().trim();
                expect(novoValor).not.to.eq(valor);
            });

    });

    it('Realizar Transferencia', () => {
        let valor;
        cy.contains("[ui-sref='dashboard']", "visão geral").click();

        //Assert para verificar se esa na pagina Visao Geral e guardar valor para testar se a receita foi adicionada com exito.
        cy.get('h1.ng-binding.ng-scope')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                valor = text.trim();
            });

        cy.contains('p.btn-title', 'TRANSF.').click();

        cy.get('#accountOut-selectized').type('Conta inicial{enter}');
        cy.get('#accountIn-selectized').type('Conta Nu{enter}');
        cy.get('#amountValue').type('1000,00')
        cy.get('#date').type('21/06/2023{enter}');


        cy.get('button')
            .find('i.icon-done-light')
            .click();

        cy.wait(2000);

        cy.get('h1.ng-binding.ng-scope')
            .should('be.visible')
            .then((element) => {
                const novoValor = element.text().trim();
                expect(novoValor).not.to.eq(valor);
            });

    });

    it('Importar', () => {
        cy.contains("[ui-sref='dashboard']", "visão geral").click();

        cy.contains('p.btn-title', 'IMPORTAR').click();
        cy.contains('div.account-details span.name.ng-binding', 'Conta inicial').click();

        cy.get('a.spread').invoke('text').then((text) => {
            expect(text).to.contain('Quer importar uma planilha?');
        });
          

    });
});