# 微信卡片分享链接生成工具

一个用于生成微信分享卡片链接的在线工具。该工具可以自定义分享卡片的标题、描述、链接和图片,适用于微信电脑版v3.4.0.50及以下版本。

## 📋 目录

- [功能特点](#功能特点)
- [技术栈](#技术栈)
- [安装部署](#安装部署)
- [使用方法](#使用方法)
- [项目结构](#项目结构)
- [兼容性说明](#兼容性说明)
- [常见问题](#常见问题)
- [更新日志](#更新日志)
- [贡献指南](#贡献指南)
- [相关资源](#相关资源)
- [许可证](#许可证)

## ✨ 功能特点

- 自定义分享卡片标题
- 自定义分享卡片描述
- 自定义分享链接
- 自定义分享图片
- 实时预览分享效果
- 支持微信分享接口
- 响应式设计，适配各种设备
- 操作简单，一键生成分享卡片

## 🛠️ 技术栈

- **前端框架**: Vue.js 2.7.14
- **微信接口**: WeChat JSSDK 1.6.0
- **页面布局**: HTML5/CSS3
- **业务逻辑**: JavaScript
- **样式设计**: 响应式设计，移动端友好

## 📥 安装部署

### 方法一：直接部署

1. 下载本项目所有文件
2. 将文件上传到您的Web服务器
3. 访问index.html即可使用

### 方法二：本地开发

1. 克隆仓库到本地
   ```bash
   git clone https://github.com/yourusername/wxkp.git
   ```
2. 使用本地服务器运行项目（推荐使用http-server或live-server）
   ```bash
   npm install -g http-server
   cd wxkp
   http-server
   ```
3. 浏览器访问 `http://localhost:8080` 即可

## 📝 使用方法

1. 访问工具页面
2. 在表单中填写:
   - 卡片标题(必填)
   - 卡片简介(选填) 
   - 卡片链接(必填)
   - 卡片图片(选填)
3. 点击"制作"按钮生成分享卡片
4. 点击右上角菜单转发给好友或群组

## 📂 项目结构 
wxkp/
├── css/
│ └── style.css # 主样式文件
├── img/ # 图片资源目录
│ ├── default.jpg # 默认分享图片
│ └── ... # 其他图片资源
├── js/
│ ├── vue.js # Vue框架
│ ├── jweixin-1.2.0.js # 微信JSSDK
│ └── wxshare.js # 微信分享相关代码
└── index.html # 主页面
```

## 📱 兼容性说明

- 支持的微信版本：微信电脑版v3.4.0.50及以下版本
- 支持的浏览器：Chrome、Firefox、Safari、Edge等现代浏览器
- 移动端适配：已针对移动设备进行了响应式设计
- 微信分享接口：使用最新的`updateTimelineShareData`和`updateAppMessageShareData`接口，同时保留对旧版微信的兼容性支持

## ❓ 常见问题

### 分享卡片无法正常显示
- 检查微信版本是否支持
- 确认填写的链接格式是否正确（需要包含http://或https://）
- 确认图片URL是否有效

### 分享按钮不可点击
- 请确保在微信内置浏览器中打开页面
- 检查网络连接是否正常

## 📈 更新日志

### v1.0.0 (2023-07-01)
- 初始版本发布
- 支持基本的卡片分享功能

### v1.1.0 (2023-08-15)
- 优化移动端界面
- 修复已知bug

### v1.2.0 (2023-10-01)
- 更新微信JS-SDK至1.6.0版本
- 升级分享接口，使用新版微信推荐的API
- 优化分享体验，提高兼容性

## 🤝 贡献指南

欢迎贡献代码或提出建议，提交PR或issue前请先查看现有问题，避免重复。

1. Fork本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个Pull Request

## 🔗 相关资源

- [微信JSSDK文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
- [Vue.js官方文档](https://vuejs.org/)
- [使用教程](https://www.xuemy.cn/tutorial)

## 📄 许可证

本项目采用MIT许可证 - 详情请参阅[LICENSE](LICENSE)文件

---

© 2023 [薛眠羊](https://www.xuemy.cn). 保留所有权利.