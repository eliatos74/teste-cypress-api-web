import * as  GETPet from '../requests/GETPet.request'
import * as POSTPet from '../requests/POSTPet.request'


describe('GET', () => {
    let petId;

    beforeEach(() => {
        POSTPet.addPet().then((res) => {
            petId = res.body.id;
        });
    });

    it('Retornar Pet pelo ID', () => {
        GETPet.getPet(petId).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq("Musgo");
        })
    });

});
