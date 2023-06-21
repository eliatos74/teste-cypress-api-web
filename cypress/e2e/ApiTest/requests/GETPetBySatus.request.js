/// <reference types="cypress"/>

function getPetByStatus(status) {

    return cy.request({
        method: 'GET',
        url: `pet/findByStatus?status=${status}`,
        failOnStatusCode: false
    });
}

export { getPetByStatus };