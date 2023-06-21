import * as  POSTPet from '../requests/POSTPet.request'
import * as POSTPetImage from '../requests/POSTPetByImage.request'


describe('GET', () => {
    let petId;

    beforeEach(() => {
        POSTPet.addPet().then((res) => {
            petId = res.body.id;
        });
    });

    it('Adocionar data e imagem', () => {
        POSTPetImage.postAddPetImage(petId).should((response) =>{
            expect(response.status).to.eq(200);
        })
    });

});
