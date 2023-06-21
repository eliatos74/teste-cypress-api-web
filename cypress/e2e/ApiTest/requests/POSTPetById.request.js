function postUpdatePetId(petId) {
    const data = {
      name: 'GURU',
      status: 'sold'
    };
  
    return cy.request({
      method: 'POST',
      url: `/pet/${petId}`,
      failOnStatusCode: false,
    //   "consumes":[
    //     "application/x-www-form-urlencoded"
    //  ],
      form: true, // Define o cabeçalho Content-Type como application/x-www-form-urlencoded
      body: data
    });
  }
  
  export { postUpdatePetId };
  

