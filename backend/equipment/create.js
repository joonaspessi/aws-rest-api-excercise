'use strict';

const AWS = require('aws-sdk');

const { createEquipment } = require('./../utils/equipmentUtil');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  let equipment;
  try {
    equipment = JSON.parse(event.body);
  } catch (e) {
    console.error(e);
    callback(null, {
      statusCode: 400,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: "Couldn't create the equipment item. Invalid equipment payload"
    });
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: createEquipment(equipment)
  };

  return dynamoDb.put(params, error => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: "Couldn't create the equipment item."
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
};
