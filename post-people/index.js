'use strict';

const People = require('./schema');
const uuid = require('uuid').v4;

exports.handler = async (event) => {

    try {
        const id = uuid()
        const {name, phone} = JSON.parse(event.body)
        let record = new People({id, name, phone})
        let newRecord = await record.save()

        return {
            statusCode: 201,
            body: JSON.stringify(newRecord)
        }
    } catch (e) {
        return {
            statusCode: 500,
            err: e.message
        }
    }
}