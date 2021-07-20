import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
 
//WBNB 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
//Factory V3 0x1b15f28630b875c4c83bfbfbfc9b230dec8c33b8
//Router 0x90B3c58eeF196c6647EEB5957c5Ad003d3A1B643
//Multicall2 0xffBe6a2253e03a83D1ddE16e4F5f2F58184AbabB
//Factory V2 0x6075F44F85E185291de927a0aB321f2663eEA68b

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  await deploy("UniswapV2Router01", {
    from: deployer,
    args: ["0x6075F44F85E185291de927a0aB321f2663eEA68b", "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"],
    log: true,
    skipIfAlreadyDeployed: true,
  })
}
export default func
func.tags = ["UniswapV2Router01"]
