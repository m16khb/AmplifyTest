const AWS = require('aws-sdk');
const uuid = require('uuid');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: 'Board',
    Item: {
      b_id: uuid.v1(),
      title: event.title,
      content: event.content,
    },
    ReturnValues: 'ALL_OLD',
  };

  let response;

  await dynamodb
    .put(params)
    .promise()
    .then((result) => {
      if (result === '{}') {
        response = {
          statusCode: 200,
          message: `update old value`,
          body: JSON.stringify(result),
        };
      } else {
        response = {
          statusCode: 200,
          message: `create new row`,
        };
      }
    })
    .catch((err) => {
      response = {
        statusCode: 404,
        message: `not found`,
        body: JSON.stringify(err),
      };
    });
  return response;
};
