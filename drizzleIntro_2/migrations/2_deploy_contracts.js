//to deploy contracts javascript file
const StringStore = artifacts.require("StringStore");

module.exports = function(deployer){
    deployer.deploy(StringStore);
};