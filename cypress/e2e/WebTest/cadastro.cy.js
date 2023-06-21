/// <reference types="cypress"/>

describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit('https://auth.organizze.com.br/cadastro');
    });
    it('Cadastro com Sucesso', () => {

        cy.fixture("usuarioSemCadastro").then((usuario) => {
            cy.get('#email').type(usuario.email);
            cy.get('#password').type(usuario.senha);
            cy.get('#repeatPassword').type(usuario.senha);

            //validaçoes dos campos email e senha
            cy.get('#email').invoke('val').should('contain', '@');
            cy.get('#password').invoke('val').should('have.length.greaterThan', 5);
        })
        cy.get('#termsOfuse').click();
        cy.get('button[type="submit"]').click();

        cy.url().should('eq', 'https://app.organizze.com.br/seja-bem-vindo');

    });

    it('Cadastro com email já existente', () => {

        cy.fixture("usuarioComCadastro").then((usuario) => {
            cy.get('#email').type(usuario.email);
            cy.get('#password').type(usuario.senha);
            cy.get('#repeatPassword').type(usuario.senha);

            //validaçoes dos campos email e senha
            cy.get('#email').invoke('val').should('contain', '@');
            cy.get('#password').invoke('val').should('have.length.greaterThan', 5);
        })
        cy.get('#termsOfuse').click();
        cy.get('button[type="submit"]').click();

        cy.get('.whitespace-pre-line').should('contain', 'E-mail já esta em uso.');
    });

    it('Cadastro com senhas diferentes', () => {
        cy.fixture("usuarioSemCadastro").then((usuario) => {
            cy.get('#email').type(usuario.email);
            cy.get('#password').type(usuario.senha);
            cy.get('#repeatPassword').type("senha-diferente");
        })
        cy.get('#termsOfuse').click();
        cy.get('button[type="submit"]').click();

        cy.get('.whitespace-pre-line').should('contain', 'Campos de senha estão diferentes.');
    });

    it('Cadastro com campos vazios', () => {
        cy.get('#termsOfuse').click();
        cy.get('button[type="submit"]').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('Preencha este campo.');
        });


    });

    it('validar Termos de Uso', () => {
        cy.fixture("usuarioSemCadastro").then((usuario) => {
            cy.get('#email').type(usuario.email);
            cy.get('#password').type(usuario.senha);
            cy.get('#repeatPassword').type(usuario.senha);
        })
        cy.get('button[type="submit"]').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('Marque esta caixa se deseja continuar.');
        });
    });
});
