# 🎮 去中心化游戏平台 - 区块链钱包系统

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-^0.8.19-blue.svg)](https://soliditylang.org/)
[![Web3.js](https://img.shields.io/badge/Web3.js-^4.16.0-orange.svg)](https://web3js.readthedocs.io/)
[![Node.js](https://img.shields.io/badge/Node.js-≥16.0.0-green.svg)](https://nodejs.org/)

## 📋 项目简介

这是一个基于区块链技术和智能体相结合的去中心化游戏平台，集成了完整的钱包系统、游戏中心、协议网关等功能。项目采用现代化的Web3技术栈，为游戏开发者提供完整的区块链基础设施。

### 🌟 核心特性

- 💰 **多币种钱包**: 支持ETH充值/提取、游戏代币管理
- 🎯 **游戏中心**: 集成多款区块链游戏（黄金矿工等）
- 🔄 **跨钱包转账**: 支持钱包间资产转移
- 🌐 **MetaMask集成**: 安全的Web3钱包连接
- 🚀 **本地测试网络**: 基于Ganache的完整开发环境
- 📡 **协议网关**: 游戏链路协议支持
- 🎨 **现代化UI**: 响应式设计，动态背景效果

## 🚀 快速开始

### 环境要求

- Node.js ≥ 16.0.0
- npm ≥ 8.0.0
- MetaMask 浏览器扩展
- Git

### 1. 克隆项目

```bash
git clone https://github.com/swjxiaoyu/-.git
cd blockchain-wallet-simple
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动服务

#### 方法一：一键启动（推荐）
```bash
# Windows
start-all.bat

# Linux/Mac
chmod +x start-all.sh
./start-all.sh
```

#### 方法二：手动启动
```bash
# 1. 启动Ganache本地网络
npx ganache --host 0.0.0.0 --port 8545 --accounts 10 --defaultBalanceEther 100

# 2. 启动Web服务器
node server.js
```

### 4. 配置MetaMask

1. 打开MetaMask扩展
2. 点击网络下拉菜单 → "添加网络"
3. 填写以下信息：
   - **网络名称**: `Game Wallet Test Network`
   - **RPC URL**: `http://localhost:8545`
   - **链ID**: `1337`
   - **货币符号**: `ETH`
   - **区块浏览器**: `http://localhost:8545`

### 5. 部署智能合约

1. 打开 [Remix IDE](https://remix.ethereum.org/)
2. 创建新文件 `GameWallet.sol`
3. 复制 `contracts/GameWallet.sol` 的内容
4. 编译合约（Solidity 0.8.19+）
5. 部署到本地网络
6. 复制合约地址到前端代码

## 🌐 访问地址

- **主应用**: http://localhost:3000/index.html
- **游戏中心**: http://localhost:3000/index-main.html
- **黄金矿工**: http://localhost:3000/gold-miner.html
- **协议测试**: http://localhost:3000/protocol-test-tool.html
- **API健康检查**: http://localhost:3000/api/v1/health

## 📁 项目结构

```
blockchain-wallet-simple/
├── 📄 核心文件
│   ├── server.js                    # 主服务器文件
│   ├── index.html                   # 钱包主界面
│   ├── index-main.html              # 游戏平台主页
│   ├── package.json                 # 项目配置
│   └── package-lock.json           # 依赖锁定文件
├── 📄 智能合约
│   └── contracts/
│       ├── GameWallet.sol          # 主游戏钱包合约
│       ├── SimpleGameWallet.sol    # 简化版合约
│       └── WorkingGameWallet.sol   # 工作版合约
├── 📄 游戏文件
│   ├── gold-miner.html             # 黄金矿工游戏
│   ├── games-list.html             # 游戏中心
│   └── test-contract-auto-load.html # 合约测试工具
├── 📄 协议相关
│   ├── protocol-test-tool.html     # 协议测试工具
│   ├── game-link-protocol-schema.json # 协议规范
│   └── README-协议.md              # 协议说明
├── 📄 配置文件
│   ├── 配置信息.txt                 # 完整配置
│   ├── 配置信息-简化版.txt          # 简化配置
│   └── contract-update-log.json     # 合约更新日志
├── 📄 启动脚本
│   ├── start-all.bat               # 一键启动所有服务
│   ├── stop-all.bat                # 停止所有服务
│   └── start.bat                   # 简单启动脚本
└── 📄 文档
    ├── README.md                   # 项目说明
    ├── API文档.md                   # API文档
    ├── 游戏链路协议规范.md          # 协议规范
    ├── 合约部署指南.md              # 部署指南
    └── 项目说明.md                  # 详细说明
```

## 🔧 技术栈

### 前端技术
- **HTML5**: 语义化标记，现代化结构
- **CSS3**: 响应式设计，动态效果，CSS变量
- **JavaScript ES6+**: 模块化开发，异步处理
- **Web3.js**: 区块链交互，智能合约调用

### 区块链技术
- **Solidity 0.8.19+**: 智能合约开发
- **MetaMask**: 钱包集成，交易签名
- **Ganache**: 本地测试网络
- **Remix IDE**: 合约开发环境

### 后端技术
- **Node.js**: 服务器运行环境
- **Express.js**: Web服务器框架
- **CORS**: 跨域资源共享
- **Helmet**: 安全中间件

### 开发工具
- **npm**: 包管理器
- **Git**: 版本控制
- **VS Code**: 推荐开发环境

## 🎯 功能特性

### 💰 钱包功能
- ✅ **ETH充值**: 向合约存入以太坊
- ✅ **ETH提取**: 从合约提取以太坊
- ✅ **余额查询**: 实时查看钱包和合约余额
- ✅ **交易历史**: 完整的操作日志记录
- ✅ **自动合约地址**: 优先使用最新部署的合约

### 🎮 游戏功能
- ✅ **黄金矿工**: 完整的区块链游戏体验
- ✅ **游戏奖励**: 添加游戏代币奖励
- ✅ **跨钱包转账**: 支持钱包间转账
- ✅ **实时更新**: 余额和交易实时更新
- ✅ **游戏中心**: 统一的游戏管理界面

### 🔒 安全特性
- ✅ **MetaMask集成**: 安全的钱包连接
- ✅ **交易确认**: 所有交易需要用户确认
- ✅ **错误处理**: 完善的错误提示和异常处理
- ✅ **输入验证**: 前端和后端双重验证
- ✅ **安全中间件**: Helmet安全防护

### 🌐 协议支持
- ✅ **游戏链路协议**: 跨游戏资产转移
- ✅ **API网关**: 统一的接口管理
- ✅ **协议测试**: 完整的测试工具
- ✅ **文档支持**: 详细的协议文档

## 🛠️ 开发指南

### 智能合约开发

1. **修改合约**
   ```bash
   # 编辑 contracts/GameWallet.sol
   # 添加新功能或修改现有逻辑
   ```

2. **编译部署**
   ```bash
   # 在Remix IDE中编译
   # 部署到本地网络
   # 更新合约地址
   ```

3. **更新前端**
   ```bash
   # 修改 index.html 中的合约地址
   # 更新ABI（如需要）
   # 测试新功能
   ```

### 前端开发

1. **添加新页面**
   ```bash
   # 创建新的HTML文件
   # 添加导航链接
   # 实现页面功能
   ```

2. **修改样式**
   ```bash
   # 编辑CSS变量（:root）
   # 添加新的动画效果
   # 优化响应式设计
   ```

3. **添加游戏**
   ```bash
   # 创建游戏HTML文件
   # 实现游戏逻辑
   # 集成区块链功能
   # 添加到游戏中心
   ```

### API开发

1. **添加新接口**
   ```bash
   # 在 server.js 中添加路由
   # 实现业务逻辑
   # 添加错误处理
   # 更新API文档
   ```

2. **测试接口**
   ```bash
   # 使用协议测试工具
   # 检查响应格式
   # 验证错误处理
   ```

## 🐛 常见问题

### Q: MetaMask连接失败？
**A**: 检查以下项目：
- 确保已安装MetaMask扩展
- 检查网络配置（链ID: 1337）
- 确认Ganache正在运行
- 检查浏览器控制台错误信息

### Q: 交易失败？
**A**: 可能的原因：
- 账户余额不足
- 网络连接问题
- 合约地址错误
- Gas费用设置过低

### Q: 合约地址在哪里？
**A**: 获取方式：
- Remix IDE部署面板
- Ganache交易记录
- 浏览器控制台日志
- 合约更新日志文件

### Q: 如何获取测试币？
**A**: 测试币来源：
- Ganache自动分配（每个账户100 ETH）
- 使用Ganache显示的私钥导入MetaMask
- 通过充值功能向合约存入ETH

### Q: 游戏无法运行？
**A**: 检查项目：
- 确保服务器正在运行
- 检查游戏文件路径
- 验证区块链连接
- 查看浏览器控制台错误

## 📊 项目统计

- **代码行数**: 5000+ 行
- **文件数量**: 25+ 个
- **智能合约**: 3 个版本
- **游戏数量**: 1 个（可扩展）
- **API接口**: 10+ 个
- **文档页面**: 5+ 个

## 🔮 未来规划

### 短期目标
- [ ] 添加更多区块链游戏
- [ ] 实现代币交换功能
- [ ] 优化移动端体验
- [ ] 添加交易历史记录
- [ ] 实现用户认证系统

### 中期目标
- [ ] 支持多链部署
- [ ] 添加NFT功能
- [ ] 实现去中心化存储
- [ ] 开发移动应用
- [ ] 添加社交功能

### 长期目标
- [ ] 构建完整的游戏生态
- [ ] 实现跨链互操作
- [ ] 添加AI智能体支持
- [ ] 建立开发者社区
- [ ] 商业化运营

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献类型
- 🐛 Bug修复
- ✨ 新功能开发
- 📚 文档改进
- 🎨 UI/UX优化
- ⚡ 性能优化
- 🧪 测试用例

## 📞 技术支持

### 获取帮助
- 📧 提交Issue: [GitHub Issues](https://github.com/swjxiaoyu/-/issues)
- 💬 讨论交流: [GitHub Discussions](https://github.com/swjxiaoyu/-/discussions)
- 📖 查看文档: [项目Wiki](https://github.com/swjxiaoyu/-/wiki)

### 开发团队
- **项目维护者**: swjxiaoyu
- **技术栈**: 区块链、Web3、游戏开发
- **联系方式**: 通过GitHub Issues联系

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢以下开源项目和技术：
- [Web3.js](https://web3js.readthedocs.io/) - 区块链交互库
- [MetaMask](https://metamask.io/) - 以太坊钱包
- [Ganache](https://trufflesuite.com/ganache/) - 本地区块链网络
- [Remix IDE](https://remix.ethereum.org/) - 智能合约开发环境
- [Express.js](https://expressjs.com/) - Web应用框架

---

**⭐ 如果这个项目对你有帮助，请给我们一个Star！**

*最后更新: 2025-09-26*