/// <reference types="cypress"/>

function postAddPetImage(idPet) {

    const formData = new FormData();
    formData.append('additionalMetadata', '21/06/2023');
    formData.append('file', 'cypress\\e2e\\ApiTest\\payloads\\petPhoto.png');

    return cy.request({
        method: 'POST',
        url: `/pet/${idPet}/uploadImage`,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    });
}

export { postAddPetImage };

