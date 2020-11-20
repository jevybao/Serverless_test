// const sum = require('./handler');
// const AWSMock = require("aws-sdk-mock");
const { listSecurityGroup } = require("./handler");
const { auth } = require("./handler");
// AWSMock.mock('EC2', 'describeSecurityGroups', () => {
//   return "Succccccc"
// });
// AWSMock.mock("EC2", "describeSecurityGroups", function () {
//   return 200;
// });

describe("Testing listSecurity Group function", () => {
  describe("when we call the API", () => {
    it("It should return all the security groups.", async () => {
      // AWSMock.mock("EC2", "describeSecurityGroups", function (
      //   params,
      //   callback
      // ) {
      //   callback(null, { Item: { Key: "Value" } });
      // });
      // const ec2 = AWSMock.EC2();
      // console.log("EEEEEE", AWSMock.EC2.describeSecurityGroups)
      const result = await listSecurityGroup();
      // const test = await auth({ authorizationToken: "deny" });
      // console.log("testing,, test token", test);
      expect(result.statusCode).toEqual(200);

      // AWSMock.restore("EC2");
    });
  });
});
