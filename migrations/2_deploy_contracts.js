const EthSwap = artifacts.require("EthSwap");
const Token = artifacts.require("Token");

module.exports = async function(deployer) {

  //Deploy Token
  await deployer.deploy(Token);

  const token = await Token.deployed()

  // Deploy EthSwap
  await deployer.deploy(EthSwap, token.address); //SI QUEREMOS PASAR EL ADDRESS PRIMERO TIENE QUE EXISTIR EL TOKEN QUE NECESITAMOS

  const ethSwap = await EthSwap.deployed()

  //Transfer all tokens to EthSwap (1 million)
  await token.transfer(ethSwap.address, '1000000000000000000000000')
};
