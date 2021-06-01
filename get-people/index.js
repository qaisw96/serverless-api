'use strict';

const People = require('./schema');

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let items
        if(id) {
            items = await People.query('id').eq(id).exec()
            items = items[0]
        } else {
            
            items = await People.scan().exec()
        }

        return {
            statusCode: 200,
            body: JSON.stringify(items)
        }
    } catch(e) {
        return {
            statusCode: 500,
            err: e.message
        }

    }

}