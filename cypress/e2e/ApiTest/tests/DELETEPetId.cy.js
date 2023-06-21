import * as  DELETEPet from '../requests/DELETEPetId.request'
import * as POSTPet from '../requests/POSTPet.request'


describe('DELETE', () => {
    let petId;

    beforeEach(() => {
        POSTPet.addPet().then((res) => {
            petId = res.body.id;
        });
    });


    it('Deletar Pet pelo ID', () => {
        DELETEPet.deletePet(petId).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(petId);
        })
    });

});