# 🎮 去中心化游戏平台 | Decentralized Gaming Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-14.0+-green.svg)](https://nodejs.org/)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.0+-blue.svg)](https://soliditylang.org/)
[![Web3.js](https://img.shields.io/badge/Web3.js-1.0+-orange.svg)](https://web3js.readthedocs.io/)

## 📋 项目简介 | Project Overview

### 🇨🇳 中文简介
这是一个基于区块链技术的去中心化游戏平台，集成了智能合约钱包系统、游戏中心和跨游戏资产互操作功能。平台支持多种区块链游戏，提供安全的数字资产管理，并实现了基于游戏链路协议的跨游戏资产转移。

### 🇺🇸 English Overview
This is a blockchain-based decentralized gaming platform that integrates smart contract wallet systems, game centers, and cross-game asset interoperability. The platform supports multiple blockchain games, provides secure digital asset management, and implements cross-game asset transfers based on the Game Link Protocol.

## ✨ 核心特性 | Core Features

### 🎮 游戏功能 | Gaming Features
- **黄金矿工游戏** | **Gold Miner Game** - 经典的挖矿游戏体验
- **游戏中心** | **Game Center** - 统一的游戏入口和展示
- **动态背景效果** | **Dynamic Background Effects** - 沉浸式视觉体验
- **响应式设计** | **Responsive Design** - 支持多设备访问

### 💰 钱包功能 | Wallet Features
- **智能合约钱包** | **Smart Contract Wallet** - 基于以太坊的钱包系统
- **ETH充值/提取** | **ETH Deposit/Withdrawal** - 原生代币管理
- **游戏奖励代币** | **Game Reward Tokens** - 游戏内货币系统
- **跨钱包转账** | **Cross-Wallet Transfer** - 安全的资产转移
- **MetaMask集成** | **MetaMask Integration** - 浏览器钱包支持

### 🔗 协议功能 | Protocol Features
- **游戏链路协议** | **Game Link Protocol** - 标准化跨游戏互操作
- **API接口** | **API Interface** - RESTful API设计
- **数据验证** | **Data Validation** - JSON Schema验证
- **错误处理** | **Error Handling** - 完善的错误处理机制

## 🚀 快速开始 | Quick Start

### 方法一：一键启动 | Method 1: One-Click Start
```bash
# 双击运行启动脚本 | Double-click to run startup script
start-all.bat
```

### 方法二：手动启动 | Method 2: Manual Start
```bash
# 1. 启动Ganache本地网络 | Start Ganache local network
npx ganache --host 0.0.0.0 --port 8545 --accounts 10 --defaultBalanceEther 100

# 2. 启动Web服务器 | Start web server
node server.js
```

### 方法三：停止服务 | Method 3: Stop Services
```bash
# 双击运行停止脚本 | Double-click to run stop script
stop-all.bat
```

## 🌐 访问地址 | Access URLs

- **主应用** | **Main App**: http://localhost:3000/index.html
- **游戏中心** | **Game Center**: http://localhost:3000/index-main.html
- **游戏列表** | **Game List**: http://localhost:3000/games-list.html
- **黄金矿工** | **Gold Miner**: http://localhost:3000/gold-miner.html
- **协议测试** | **Protocol Test**: http://localhost:3000/protocol-test-tool.html

## 📋 系统要求 | System Requirements

### 必需软件 | Required Software
- **Node.js**: v14.0.0 或更高版本 | v14.0.0 or higher
- **Ganache**: 用于本地区块链网络 | For local blockchain network
- **MetaMask**: 浏览器钱包扩展 | Browser wallet extension
- **现代浏览器** | **Modern Browser**: Chrome, Firefox, Edge 等 | Chrome, Firefox, Edge, etc.

### 推荐配置 | Recommended Configuration
- **内存**: 4GB+ | **RAM**: 4GB+
- **存储**: 1GB+ | **Storage**: 1GB+
- **网络**: 稳定的互联网连接 | **Network**: Stable internet connection

## 🔧 MetaMask 配置 | MetaMask Configuration

### 网络设置 | Network Settings
- **网络名称** | **Network Name**: `Game Wallet Test Network`
- **RPC URL**: `http://localhost:8545`
- **链ID** | **Chain ID**: `1337`
- **货币符号** | **Currency Symbol**: `ETH`
- **区块浏览器** | **Block Explorer**: `http://localhost:8545`

### 默认账户信息 | Default Account Information
- **地址** | **Address**: `0x0D6475cfC10d1bc30ff79c21325243ff471fA81d`
- **私钥** | **Private Key**: `0xd87e72671d124473105bdbfc5025f6057bdcca368831f6e1f556210db8e5bde2`
- **余额** | **Balance**: `100 ETH`

## 📁 项目结构 | Project Structure

```
Decentralized-gaming-platform_s_h_i_t/
├── 📄 核心文件 | Core Files
│   ├── server.js                    # 主服务器文件 | Main server file
│   ├── index.html                   # 钱包主界面 | Wallet main interface
│   ├── index-main.html              # 游戏中心主页 | Game center homepage
│   ├── games-list.html              # 游戏列表页面 | Game list page
│   ├── gold-miner.html              # 黄金矿工游戏 | Gold miner game
│   ├── package.json                 # 项目配置 | Project configuration
│   └── package-lock.json           # 依赖锁定文件 | Dependency lock file
├── 📄 智能合约 | Smart Contracts
│   └── contracts/
│       └── GameWallet.sol          # 游戏钱包合约 | Game wallet contract
├── 📄 协议相关 | Protocol Related
│   ├── protocol-test-tool.html     # 协议测试工具 | Protocol test tool
│   ├── game-link-protocol-schema.json # 协议规范 | Protocol schema
│   └── API文档.md                   # API文档 | API documentation
├── 📄 配置文件 | Configuration Files
│   ├── contract-update-log.json     # 合约更新日志 | Contract update log
│   └── 配置信息.txt                 # 配置信息 | Configuration info
├── 📄 启动脚本 | Startup Scripts
│   ├── start-all.bat               # 一键启动所有服务 | One-click start all services
│   ├── stop-all.bat                # 停止所有服务 | Stop all services
│   └── start.bat                   # 简单启动脚本 | Simple startup script
└── 📄 文档 | Documentation
    ├── README.md                   # 项目说明 | Project documentation
    ├── 项目说明.md                  # 项目详细说明 | Detailed project description
    └── 游戏链路协议规范.md          # 协议规范 | Protocol specification
```

## 🛠️ 技术栈 | Technology Stack

### 前端技术 | Frontend Technologies
- **HTML5**: 页面结构 | Page structure
- **CSS3**: 样式和动画 | Styling and animations
- **JavaScript**: 交互逻辑 | Interactive logic
- **Web3.js**: 区块链交互 | Blockchain interaction

### 后端技术 | Backend Technologies
- **Node.js**: 服务器运行环境 | Server runtime environment
- **Express.js**: Web框架 | Web framework
- **Ganache**: 本地区块链网络 | Local blockchain network

### 区块链技术 | Blockchain Technologies
- **Solidity**: 智能合约语言 | Smart contract language
- **Ethereum**: 区块链平台 | Blockchain platform
- **MetaMask**: 钱包集成 | Wallet integration

### 协议技术 | Protocol Technologies
- **JSON Schema**: 数据验证 | Data validation
- **RESTful API**: 接口设计 | Interface design
- **Game Link Protocol**: 跨游戏互操作 | Cross-game interoperability

## 🎯 功能特性 | Feature Details

### 智能合约功能 | Smart Contract Features
- ✅ **ETH充值** | **ETH Deposit** (`deposit`)
- ✅ **ETH提取** | **ETH Withdrawal** (`withdraw`)
- ✅ **游戏奖励** | **Game Rewards** (`addGameReward`)
- ✅ **跨钱包转账** | **Cross-Wallet Transfer** (`transfer`)
- ✅ **余额查询** | **Balance Query** (`getBalance`)
- ✅ **事件日志** | **Event Logging** (所有操作都有事件记录 | All operations have event records)

### 前端功能 | Frontend Features
- ✅ **MetaMask连接** | **MetaMask Connection**
- ✅ **网络状态检测** | **Network Status Detection**
- ✅ **实时余额显示** | **Real-time Balance Display**
- ✅ **交易操作界面** | **Transaction Interface**
- ✅ **操作日志记录** | **Operation Logging**
- ✅ **响应式设计** | **Responsive Design**

### 游戏功能 | Gaming Features
- ✅ **黄金矿工游戏** | **Gold Miner Game**
- ✅ **游戏中心界面** | **Game Center Interface**
- ✅ **动态背景效果** | **Dynamic Background Effects**
- ✅ **游戏统计信息** | **Game Statistics**

### 协议功能 | Protocol Features
- ✅ **游戏链路协议** | **Game Link Protocol**
- ✅ **标准化API接口** | **Standardized API Interface**
- ✅ **跨游戏资产转移** | **Cross-Game Asset Transfer**
- ✅ **汇率查询系统** | **Exchange Rate Query System**

## 🛠️ 开发指南 | Development Guide

### 环境搭建 | Environment Setup
1. **克隆项目** | **Clone Project**: `git clone https://github.com/swjxiaoyu/Decentralized-gaming-platform_s_h_i_t.git`
2. **安装依赖** | **Install Dependencies**: `npm install`
3. **启动Ganache** | **Start Ganache**: 本地区块链网络 | Local blockchain network
4. **运行服务器** | **Run Server**: `node server.js`

### 智能合约部署 | Smart Contract Deployment
1. **在Remix IDE中编译合约** | **Compile contract in Remix IDE**
2. **选择"Injected Web3"环境** | **Select "Injected Web3" environment**
3. **确保MetaMask连接到本地网络** | **Ensure MetaMask is connected to local network**
4. **部署合约并复制地址** | **Deploy contract and copy address**

### 前端更新 | Frontend Updates
1. **在 `index.html` 中找到 `contractAddress` 变量** | **Find `contractAddress` variable in `index.html`**
2. **替换为实际部署的合约地址** | **Replace with actual deployed contract address**
3. **保存文件并刷新浏览器** | **Save file and refresh browser**

### 协议集成 | Protocol Integration
1. **参考 `游戏链路协议规范.md`** | **Refer to `游戏链路协议规范.md`**
2. **使用 `game-link-protocol-schema.json` 验证数据格式** | **Use `game-link-protocol-schema.json` to validate data format**
3. **通过 `protocol-test-tool.html` 测试API接口** | **Test API interface through `protocol-test-tool.html`**

## 🐛 常见问题 | Common Issues

### Q: MetaMask连接失败？| MetaMask connection failed?
**A**: 检查是否安装了MetaMask扩展，并确保网络配置正确。| Check if MetaMask extension is installed and ensure network configuration is correct.

### Q: 交易失败？| Transaction failed?
**A**: 检查账户余额是否足够，网络是否连接正常。| Check if account balance is sufficient and network connection is normal.

### Q: 合约地址在哪里？| Where is the contract address?
**A**: 部署合约后，在Remix IDE的部署面板中可以看到合约地址。| After deploying the contract, you can see the contract address in the deployment panel of Remix IDE.

### Q: 如何获取测试币？| How to get test coins?
**A**: Ganache启动后会显示测试账户，每个账户都有100 ETH。| After Ganache starts, test accounts will be displayed, each with 100 ETH.

### Q: 游戏无法加载？| Game cannot load?
**A**: 检查服务器是否启动，端口3000是否被占用。| Check if the server is started and if port 3000 is occupied.

### Q: 资产转移失败？| Asset transfer failed?
**A**: 检查余额是否充足，合约地址是否正确，网络是否稳定。| Check if balance is sufficient, contract address is correct, and network is stable.

## 🔒 安全考虑 | Security Considerations

### 数据安全 | Data Security
- **私钥本地存储** | **Local private key storage**
- **交易签名验证** | **Transaction signature verification**
- **合约权限控制** | **Contract permission control**

### 网络安全 | Network Security
- **HTTPS传输加密** | **HTTPS transmission encryption**
- **API接口认证** | **API interface authentication**
- **输入数据验证** | **Input data validation**

## 📈 性能优化 | Performance Optimization

### 前端优化 | Frontend Optimization
- **资源压缩和缓存** | **Resource compression and caching**
- **图片懒加载** | **Image lazy loading**
- **代码分割** | **Code splitting**

### 后端优化 | Backend Optimization
- **数据库连接池** | **Database connection pool**
- **缓存机制** | **Caching mechanism**
- **负载均衡** | **Load balancing**

### 区块链优化 | Blockchain Optimization
- **Gas费用优化** | **Gas fee optimization**
- **批量交易处理** | **Batch transaction processing**
- **状态同步机制** | **State synchronization mechanism**

## 🔮 未来规划 | Future Plans

### 功能扩展 | Feature Extensions
- [ ] **更多游戏类型** | **More game types**
- [ ] **NFT资产支持** | **NFT asset support**
- [ ] **跨链桥接功能** | **Cross-chain bridging functionality**
- [ ] **移动端适配** | **Mobile adaptation**

### 技术升级 | Technical Upgrades
- [ ] **微服务架构** | **Microservices architecture**
- [ ] **容器化部署** | **Containerized deployment**
- [ ] **自动化测试** | **Automated testing**
- [ ] **持续集成** | **Continuous integration**

## 📞 技术支持 | Technical Support

### 联系方式 | Contact Information
- **GitHub**: https://github.com/swjxiaoyu/Decentralized-gaming-platform_s_h_i_t
- **Issues**: 通过GitHub Issues提交问题 | Submit issues through GitHub Issues
- **文档**: 查看项目文档获取详细说明 | Check project documentation for detailed instructions

### 贡献指南 | Contribution Guidelines
1. **Fork项目仓库** | **Fork project repository**
2. **创建功能分支** | **Create feature branch**
3. **提交代码更改** | **Submit code changes**
4. **发起Pull Request** | **Create Pull Request**

### 问题排查 | Troubleshooting
如有问题，请检查：| If you encounter issues, please check:
1. **Ganache是否正常运行** | **Whether Ganache is running normally**
2. **MetaMask网络配置是否正确** | **Whether MetaMask network configuration is correct**
3. **合约是否成功部署** | **Whether the contract is successfully deployed**
4. **浏览器控制台是否有错误信息** | **Whether there are error messages in the browser console**

## 📄 许可证 | License

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。| This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 致谢 | Acknowledgments

感谢以下开源项目和技术：| Thanks to the following open source projects and technologies:
- [Ethereum](https://ethereum.org/) - 区块链平台 | Blockchain platform
- [Web3.js](https://web3js.readthedocs.io/) - 以太坊JavaScript API | Ethereum JavaScript API
- [Ganache](https://trufflesuite.com/ganache/) - 本地区块链网络 | Local blockchain network
- [MetaMask](https://metamask.io/) - 浏览器钱包 | Browser wallet
- [Express.js](https://expressjs.com/) - Web框架 | Web framework

---

**项目版本** | **Project Version**: v1.0.0  
**最后更新** | **Last Updated**: 2025-01-18  
**维护团队** | **Maintenance Team**: 区块链游戏开发组 | Blockchain Game Development Team