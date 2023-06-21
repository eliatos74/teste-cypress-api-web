import * as  GETPetStatus from '../requests/GETPetBySatus.request'


describe('GET pet por Status', () => {

    it.only('Status available', () => {
        GETPetStatus.getPetByStatus('available').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].status).to.equal('available');
        })
    });

    it.only('Status pending', () => {
        GETPetStatus.getPetByStatus('pending').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].status).to.equal('pending');
        })
    });

    it.only('Status sold', () => {
        GETPetStatus.getPetByStatus('sold').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].status).to.equal('sold');
        })
    });




});