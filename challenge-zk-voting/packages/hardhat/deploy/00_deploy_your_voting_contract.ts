import { artifacts, deployScript } from "../rocketh/deploy.js";
export default deployScript(async ({ deploy, namedAccounts }) => {
  const { deployer } = namedAccounts;
  const v = await deploy("HonkVerifier", { account: deployer, artifact: artifacts.HonkVerifier, args: [] });
  await deploy("Voting", { account: deployer, artifact: artifacts.Voting, args: [deployer, v.address, "Should the DAO allocate 10% to ZK research?"] }, { libraries: { LeanIMT: v.address } });
}, { tags: ["YourVotingContract"] });
