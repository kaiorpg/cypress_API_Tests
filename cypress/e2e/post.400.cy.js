/// <reference types="cypress"/>

describe('Cadastro de dispositivos', ()=> {

    it('Cadastrar um dispositivo sem mandar dados', () => {

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: ''
        }).as('postDeviceResult')

        
        // validações
        cy.get('@postDeviceResult').then((response) =>{
            expect(response.status).equal(400)
            expect(response.body.error)
                .equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')
                cy.log('Starting API POST 400', response.status);

        })
    })
})