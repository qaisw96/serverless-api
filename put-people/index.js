'use strict';


const People = require('./schema.js')

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        
        if(id) {
            const {name, phone} = JSON.parse(event.body)
            
            let updated = await People.update({id}, {name, phone})

            return {
                statusCode: 200,
                body: JSON.stringify(updated)
            }
        } else {
            return {
                err: 'ENTER THE ID' 
            }
        }
    } catch(e) {
        return {
            statusCode: 500,
            err: e.message
        }

    }
}