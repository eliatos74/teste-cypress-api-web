import * as  PUTPet from '../requests/PUTPet.request'
import * as POSTPet from '../requests/POSTPet.request'


describe('PUT', () => {
    
    it.only('PUT Pet pelo ID', () => {
        PUTPet.putPet().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq("FAROFA");
        })
    });

});