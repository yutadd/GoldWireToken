const GoldWireToken = artifacts.require("GoldWireToken");

module.exports = function(deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(GoldWireToken);
};