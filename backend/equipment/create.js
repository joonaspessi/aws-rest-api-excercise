'use strict';

const AWS = require('aws-sdk');

const { createEquipment } = require('./../utils/equipmentUtil');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = async event => {
  let equipment;
  try {
    equipment = createEquipment(JSON.parse(event.body));
  } catch (e) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: "Couldn't create the equipment item."
    };
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: equipment,
    ConditionExpression: 'id <> :idVal',
    ExpressionAttributeValues: {
      ':idVal': equipment.id
    }
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(params.Item)
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 501,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(error)
    };
  }
};
