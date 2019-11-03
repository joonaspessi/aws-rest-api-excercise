'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const { populateEquipments } = require('./../utils/equipmentUtil');

module.exports.populate = (event, context, callback) => {
  const equipments = populateEquipments();
  const params = {
    RequestItems: {
      [process.env.DYNAMODB_TABLE]: equipments.map(equipment => ({
        PutRequest: {
          Item: equipment
        }
      }))
    }
  };

  return dynamoDb.batchWrite(params, (error, data) => {
    console.log('[DEBUG] Callback');
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(error)
      });
    } else {
      // create a response
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(equipments)
      };
      callback(null, response);
    }
  });
};
