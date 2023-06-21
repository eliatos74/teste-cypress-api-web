/// <reference types="cypress"/>

const payloadAddPetEdit = require('../payloads/add-pet-edit.json')

function putPet() {
    return cy.request({
        method: 'PUT',
        url: 'pet',
        failOnStatusCode: false,
        body: payloadAddPetEdit
    });
}

export { putPet };