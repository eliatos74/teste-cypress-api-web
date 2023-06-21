import * as POSTPet from '../requests/POSTPet.request';
import * as POSTPetId from '../requests/POSTPetById.request';

describe('GET', () => {
  let petId;

  beforeEach(() => {
    POSTPet.addPet().then((res) => {
      petId = res.body.id;
      //cy.log(petId);
    });
  });

  it('Altera nome e status', () => {
    POSTPetId.postUpdatePetId(petId).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
