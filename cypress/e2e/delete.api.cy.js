/// <reference types="cypress"/>

describe('Deletar dispositivos', ()=> {

    it('Deletar um dispositivo', () => {
    
        
        const body = {
            "name": "Pc do Kaio",
            "data": {
                "year": 2024,
                "price": 2999.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "3 TB",
                "owner": "QA Kaio",
            }
        }       
        cy.cadastrarDevice(body)
            .then((response_post) =>{
                expect(response_post.status).equal(200)

        cy.deletarDevice(response_post.body.id)
            .then((response_del) =>{
                expect(response_del.status).equal(200)
                expect(response_del.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
            })

        })
    cy.log('Delete finalizado');
    })
})