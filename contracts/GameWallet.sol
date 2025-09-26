// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract GameWallet {
    // 事件定义
    event Deposit(address indexed user, uint256 amount, uint256 timestamp);
    event Withdraw(address indexed user, uint256 amount, uint256 timestamp);
    event GameReward(address indexed user, string gameId, uint256 amount, uint256 timestamp);
    event Transfer(address indexed from, address indexed to, uint256 amount, uint256 timestamp);
    
    // 状态变量
    mapping(address => uint256) public balances;
    mapping(address => mapping(string => uint256)) public gameTokens;
    mapping(address => uint256) public lastActivity;
    
    address public owner;
    uint256 public totalSupply;
    
    // 修饰符
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    modifier validAmount(uint256 amount) {
        require(amount > 0, "Amount must be greater than 0");
        _;
    }
    
    // 构造函数
    constructor() {
        owner = msg.sender;
    }
    
    // 充值ETH
    function deposit() external payable validAmount(msg.value) {
        balances[msg.sender] += msg.value;
        totalSupply += msg.value;
        lastActivity[msg.sender] = block.timestamp;
        
        emit Deposit(msg.sender, msg.value, block.timestamp);
    }
    
    // 提取ETH
    function withdraw(uint256 amount) external validAmount(amount) {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        balances[msg.sender] -= amount;
        totalSupply -= amount;
        lastActivity[msg.sender] = block.timestamp;
        
        payable(msg.sender).transfer(amount);
        
        emit Withdraw(msg.sender, amount, block.timestamp);
    }
    
    // 游戏奖励
    function addGameReward(string memory gameId, uint256 amount) external validAmount(amount) {
        gameTokens[msg.sender][gameId] += amount;
        lastActivity[msg.sender] = block.timestamp;
        
        emit GameReward(msg.sender, gameId, amount, block.timestamp);
    }
    
    // 转账
    function transfer(address to, uint256 amount) external validAmount(amount) {
        require(to != address(0), "Invalid recipient address");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        balances[msg.sender] -= amount;
        balances[to] += amount;
        lastActivity[msg.sender] = block.timestamp;
        lastActivity[to] = block.timestamp;
        
        emit Transfer(msg.sender, to, amount, block.timestamp);
    }
    
    // 查询函数
    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }
    
    function getGameToken(address user, string memory gameId) external view returns (uint256) {
        return gameTokens[user][gameId];
    }
    
    function getLastActivity(address user) external view returns (uint256) {
        return lastActivity[user];
    }
    
    function getTotalSupply() external view returns (uint256) {
        return totalSupply;
    }
}