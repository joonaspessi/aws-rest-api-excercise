'use strict';

const AWS = require('aws-sdk');

const { createEquipment } = require('./../utils/equipmentUtil');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

module.exports.create = async event => {
  let equipment;
  try {
    equipment = createEquipment(JSON.parse(event.body));
  } catch (e) {
    return {
      statusCode: 400,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/plain'
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
        ...corsHeaders
      },
      body: JSON.stringify(params.Item)
    };
  } catch (error) {
    if (error.code === 'ConditionalCheckFailedException') {
      return {
        statusCode: error.statusCode || 501,
        headers: {
          ...corsHeaders
        },
        body: "Couldn't create duplicate equipment item."
      };
    }
    return {
      statusCode: error.statusCode || 501,
      headers: {
        ...corsHeaders
      },
      body: JSON.stringify(error)
    };
  }
};
