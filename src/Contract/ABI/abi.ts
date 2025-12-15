const abi = [
  "function bind(address _inviter) external",
  "function deposit(uint256 pid,uint256 amount) external payable",
  "function maxStakeAmount() public view returns (uint256)",
  "function withdraw(uint256 stakeId) external",
  "function userIdsLength(address _user) external view returns (uint256)",
  "function userInfo(address) external view returns (address inviter,uint256 vip,uint256 validDirect,uint256 teamPerf,uint256 mintageQuota,uint256 totalTeamReward)",
  "function getAmountsJuIn(uint256 usdtAmount) public view returns(uint256)",
];
export default abi