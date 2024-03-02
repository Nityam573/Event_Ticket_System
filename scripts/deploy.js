const hre = require("hardhat");

async function main() {

  const EventTicketingSystem = await hre.ethers.getContractFactory("WorkingContract");
  const _EventTicketingSystem = await EventTicketingSystem.deploy();
  await _EventTicketingSystem.waitForDeployment();
  console.log("EventTicketingSystem contract deployed to:", _EventTicketingSystem.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});