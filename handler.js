"use strict";
// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");

// const ec2 = new AWS.EC2();
// const s3 = new AWS.S3()
// Set the region
AWS.config.update({ region: "ap-southeast-2" });

module.exports.listSecurityGroup = async (event) => {
  var ec2 = new AWS.EC2();
  const data = await ec2.describeSecurityGroups().promise();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Security Groups Returned.",
      data: data,
    }),
  };
};

// module.exports.auth = async function (event) {
//   const token = event.authorizationToken.toLowerCase();
//   console.log("printer TOKEN", token);
//   const methodArn = event.methodArn;
//   console.log("TOKEN: = ", token === 'allow');
//   if (token === 'allow') {
//     return generatePolicy("user", "Allow", methodArn);
//   } else {
//     return generatePolicy("user", "Deny", methodArn);
//   }
// };

// exports.auth = function (event, context, callback) {
//   var token = event.authorizationToken;
//   switch (token) {
//       case 'allow':
//           return generatePolicy('user', 'Allow', event.methodArn);
//           break;
//       case 'deny':
//         return generatePolicy('user', 'Deny', event.methodArn)
//           break;
//       case 'unauthorized':
//         return "Unauthorized";   // Return a 401 Unauthorized response
//           break;
//       default:
//         return "Error: Invalid token"; // Return a 500 Invalid token response
//   }
// };

// Help function to generate an IAM policy
// var generatePolicy = function (principalId, effect, resource) {
//   var authResponse = {};

//   authResponse.principalId = principalId;
//   if (effect && resource) {
//     var policyDocument = {};
//     policyDocument.Version = "2012-10-17";
//     policyDocument.Statement = [];
//     var statementOne = {};
//     statementOne.Action = "execute-api:Invoke";
//     statementOne.Effect = effect;
//     statementOne.Resource = resource;
//     policyDocument.Statement[0] = statementOne;
//     authResponse.policyDocument = policyDocument;
//   }

//   // Optional output with custom properties of the String, Number or Boolean type.
//   // authResponse.context = {
//   //     "stringKey": "stringval",
//   //     "numberKey": 123,
//   //     "booleanKey": true
//   // };
//   return authResponse;
// };

// A simple token-based authorizer example to demonstrate how to use an authorization token
// to allow or deny a request. In this example, the caller named 'user' is allowed to invoke
// a request if the client-supplied token value is 'allow'. The caller is not allowed to invoke
// the request if the token value is 'deny'. If the token value is 'unauthorized' or an empty
// string, the authorizer function returns an HTTP 401 status code. For any other token value,
// the authorizer returns an HTTP 500 status code.
// Note that token values are case-sensitive.

// module.exports.auth = function (event, context, callback) {
//   var token = event.authorizationToken;
//   switch (token) {
//     case "allow":
//       callback(null, generatePolicy("user", "Allow", event.methodArn));
//       break;
//     case "deny":
//       callback(null, generatePolicy("user", "Deny", event.methodArn));
//       break;
//     case "unauthorized":
//       callback("Unauthorized"); // Return a 401 Unauthorized response
//       break;
//     default:
//       callback("Error: Invalid token"); // Return a 500 Invalid token response
//   }
// };
// module.exports.auth = async function (event) {
//   const token = event.authorizationToken.toLowerCase();
//   console.log("token ==========", token)
//   const methodArn = event.methodArn;

//   if (token === "allow") {
//     return generatePolicy("user", "Allow", methodArn);
//   } else if (token === "deny") {
//     return generatePolicy("user", "Deny", methodArn);
//   } else if (token === "unauthorized") {
//     callback("Unauthorized");
//   } else {
//     callback("Error: Invalid token"); // Return a 500 Invalid token response
//   }
// };


// module.exports.auth = async function (event) {
//   const token = event.authorizationToken.toLowerCase();
//   console.log("printer TOKEN", token);
//   const methodArn = event.methodArn;
//   console.log("TOKEN: = ", token === 'allow');
//   if (token === 'allow') {
//     return generateAuthResponse("user", "Allow", methodArn);
//   } else {
//     return generateAuthResponse("user", "Deny", methodArn);
//   }
// };

// function generateAuthResponse(principalId, effect, methodArn) {
//   const policyDocument = generatePolicyDocument(effect, methodArn);

//   return {
//     principalId,
//     policyDocument,
//   };
// }

// function generatePolicyDocument(effect, methodArn) {
//   if (!effect || !methodArn) return null;

//   const policyDocument = {
//     Version: "2012-10-17",
//     Statement: [
//       {
//         Action: "execute-api:Invoke",
//         Effect: effect,
//         Resource: methodArn,
//       },
//     ],
//   };

//   return policyDocument;
// }
