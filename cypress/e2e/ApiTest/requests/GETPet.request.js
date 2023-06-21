/// <reference types="cypress"/>

function getPet(idPet) {
    return cy.request({
        method: 'GET',
        url: `pet/${idPet}`,
        failOnStatusCode: false
    });
}

export { getPet };