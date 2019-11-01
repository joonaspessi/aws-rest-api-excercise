"use strict";

const uuid = require("uuid");
const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const { populateEquipments } = require("./../utils/equipmentUtil");

module.exports.populate = (event, context, callback) => {
  const equipments = populateEquipments();
  console.log("[DEBUG] equipments", equipments);
  const params = {
    RequestItems: {
      [process.env.DYNAMODB_TABLE]: equipments.map(equipment => ({
        PutRequest: {
          Item: equipment
        }
      }))
    }
  };

  console.log("[DEBUG] params");
  console.log(JSON.stringify(params, null, 2));
  return dynamoDb.batchWrite(params, (error, data) => {
    console.log("[DEBUG] Callback");
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: "Couldn't create the equipment items."
      });
    } else {
      console.log("[DEBUG] data", data);

      // create a response
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(equipments)
      };
      callback(null, response);
    }
  });
};
