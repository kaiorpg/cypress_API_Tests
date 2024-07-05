/// <reference types="cypress"/>

describe('Deletar dispositivos especiais', ()=> {
    cy.log('Starting API Tests');
    it('Deletar um dispositivo não existente ou reservado', () => {

    const id_inexistente = 'Kaio'
    const id_reservado = '7'

        cy.request({
            method: 'DELETE',
            url: `/objects/${id_inexistente}`,
            failOnStatusCode: false,
        }).as('deleteDeviceResult')

            // validações do delete
        cy.get('@deleteDeviceResult').then((response_del) =>{
            expect(response_del.status).equal(404)
            expect(response_del.body.error).equal(`Object with id = ${id_inexistente} doesn't exist.`)
        })
        //deletando device restrito
        cy.request({
            method: 'DELETE',
            url: `/objects/${id_reservado}`,
            failOnStatusCode: false,
        }).as('deleteReservedDevice')

        cy.get('@deleteReservedDevice').then((response_del_reserved) =>{
            expect(response_del_reserved.status).equal(405)
            expect(response_del_reserved.body.error).equal(`${id_reservado} is a reserved id and the data object of it cannot be deleted. You can create your own new object via POST request and try to send a DELETE request with new generated object id.`)
        cy.log('Delete error: 404');
        })
    })
})