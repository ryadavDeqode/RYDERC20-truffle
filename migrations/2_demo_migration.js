const demo = artifacts.require("RYDERC20");

module.exports = function (deployer) {
  deployer.deploy(demo,200,"ppxCoin","PPX");
};
