# base image
FROM johanbo/ubuntu_node:v1

# MAINTAINER
# MAINTAINER johanbo <t511069160@qq.com>

# 复制文件到容器
ADD . /www/express_server

# 进入工作目录
WORKDIR /www/express_server

# 安装项目依赖包
RUN npm install

# 暴露 端口
EXPOSE 8080

# 开始命令
CMD ["node", "app.js"]
# RUN pm2 start app.js --name "express"  --no-daemon
# CMD ["pm2", "start", "app.js", "--no-daemon"]