import * as POSTPets from '../requests/POSTPet.request'


describe('POST', () => {

    it('Adiconar Pet', () => {
        POSTPets.addPet().then((res)=>{
            //let petId = res.body.id;
        }).should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq("Musgo");
        })
    });

});
