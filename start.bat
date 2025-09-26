@echo off
echo ========================================
echo    区块链游戏钱包系统启动脚本
echo ========================================
echo.

echo 1. 启动Ganache本地网络...
start "Ganache" cmd /k "ganache-cli --port 8545 --host 0.0.0.0"

echo 2. 等待5秒让Ganache启动...
timeout /t 5 /nobreak > nul

echo 3. 打开钱包界面...
start "" "index.html"

echo.
echo ========================================
echo    启动完成！
echo ========================================
echo.
echo 下一步操作：
echo 1. 在MetaMask中添加自定义网络
echo 2. 网络名称: Game Wallet Test Network
echo 3. RPC URL: http://localhost:8545
echo 4. 链ID: 1337
echo 5. 货币符号: ETH
echo.
echo 按任意键退出...
pause > nul