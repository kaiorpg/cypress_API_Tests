/// <reference types="cypress"/>

describe('Alterar dispositivos', ()=> {
    cy.log('Starting API PUT');
    const body_cadastro = require('../fixtures/cadastrar_device_sucesso.json')
    const body_update = require('../fixtures/update_device.json')
    it('Alterar um dispositivo', () => {
        const dataUpdate = new Date().toISOString().slice(0, 16)
        cy.cadastrarDevice(body_cadastro)
            .then((response_post) =>{
                expect(response_post.status).equal(200)
                expect(response_post.body.name).equal(body_cadastro.name)
                expect(response_post.body.data.owner).equal(body_cadastro.data.owner)

        // fazer o PUT
            cy.request({
                method: 'PUT',
                url: `/objects/${response_post.body.id}`,
                failOnStatusCode: false,
                body: body_update
            }).as('putDeviceResult')

            // validações do PUT
            cy.get('@putDeviceResult').then((response_put) =>{
                expect(response_put.status).equal(200)
                expect(response_put.body.name).equal(body_update.name)
                expect(response_put.body.data.owner).equal(body_update.data.owner)
                expect(response_put.body.updatedAt.slice(0, 16)).equal(dataUpdate)
            })
        })
    })
})