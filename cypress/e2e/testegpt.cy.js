/// <reference types="cypress"/>

describe('GET Dispositivo', () => {
    it('Deve obter os detalhes do dispositivo com ID 12', () => {

        // Enviar uma requisição GET para a URL especificada
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/12',
            failOnStatusCode: false // Permite continuar o teste mesmo se o status da resposta não for 2xx
        }).then((response) => {
            // Validações de status e estrutura da resposta
            expect(response.status, 'Status Code').to.equal(200);
            expect(response.body.id).equal('12');
            expect(response.body).to.have.property('name').and.not.be.empty;
            expect(response.body).to.have.property('data').and.not.be.empty;

            // Validações dos campos específicos, se necessário
            expect(response.body.data.Price).equal('419.99');
            expect(response.body.data.Capacity).equal('64 GB').and.be.a('string');
        });
    });
});