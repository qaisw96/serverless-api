'use strict';

const People = require('./schema')

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null
        if(id) {
            await People.delete({id})
            
        } else {
            return {
                err: 'ENTER THE ID'
            }
        }
        return {
            statusCode: 200,
            body: JSON.stringify({})
        }


    } catch(e) {
        return {
            statusCode: 500,
            err: e.message
        }
    }
}