/// <reference types="cypress"/>

function deletePet(idPet) {
    return cy.request({
        method: 'GET',
        url: `pet/${idPet}`,
        failOnStatusCode: false,
        headers:{
            'api_key': 'api_key'
        }
    });
}

export { deletePet };