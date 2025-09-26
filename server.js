import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 游戏链路协议数据存储
const wallets = new Map();
const transfers = new Map();
const exchangeRates = new Map();

// 初始化示例数据
function initializeSampleData() {
    // 示例钱包
    wallets.set('game-a-wallet-001', {
        walletId: 'game-a-wallet-001',
        gameId: 'game-a',
        gameName: '魔法世界',
        supportedAssets: [
            {
                assetType: 'currency',
                assetId: 'gold',
                assetName: '金币',
                decimals: 2,
                totalSupply: '1000000.00',
                iconUrl: 'https://example.com/icons/gold.png'
            }
        ],
        lastActivity: new Date().toISOString(),
        status: 'active'
    });

    // 示例汇率
    exchangeRates.set('gold-silver', {
        fromAsset: 'gold',
        toAsset: 'silver',
        rate: '2.5',
        lastUpdated: new Date().toISOString()
    });
}

// 启动时初始化数据
initializeSampleData();

// 创建HTTP服务器
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    const method = req.method;

    // 设置CORS头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 处理预检请求
    if (method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // 健康检查接口
    if (pathname === '/api/v1/health' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            version: '1.0.0',
            services: {
                web: 'running',
                api: 'running'
            }
        }));
        return;
    }

    // 获取合约更新历史
    if (pathname === '/api/contract-history' && method === 'GET') {
        try {
            const logPath = path.join(__dirname, 'contract-update-log.json');
            let logs = [];
            if (fs.existsSync(logPath)) {
                logs = JSON.parse(fs.readFileSync(logPath, 'utf8'));
            }
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: true,
                data: logs.reverse() // 最新的在前
            }));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: false,
                message: '获取历史记录失败',
                error: error.message
            }));
        }
        return;
    }

    // 静态文件服务
    const filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
    
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>404 - 页面不存在</title>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                        h1 { color: #e74c3c; }
                    </style>
                </head>
                <body>
                    <h1>404 - 页面不存在</h1>
                    <p>请求的页面 "${pathname}" 不存在</p>
                    <a href="/">返回首页</a>
                </body>
                </html>
            `);
            return;
        }
        
        const ext = path.extname(filePath);
        const contentType = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon'
        }[ext] || 'text/plain';
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>500 - 服务器错误</title>
                        <style>
                            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                            h1 { color: #e74c3c; }
                        </style>
                    </head>
                    <body>
                        <h1>500 - 服务器错误</h1>
                        <p>服务器内部错误</p>
                        <a href="/">返回首页</a>
                    </body>
                    </html>
                `);
                return;
            }
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 服务器运行在 http://localhost:${PORT}`);
    console.log(`📊 健康检查: http://localhost:${PORT}/api/v1/health`);
    console.log(`🎮 主应用: http://localhost:${PORT}/index.html`);
    console.log(`🎯 游戏中心: http://localhost:${PORT}/index-main.html`);
    console.log(`⛏️ 黄金矿工: http://localhost:${PORT}/gold-miner.html`);
    console.log(`🔧 协议测试: http://localhost:${PORT}/protocol-test-tool.html`);
});

export default server;