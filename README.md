# 0306-smartauto-homework
[![build status](https://github.com/connectshark/0306-smartauto-homework/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/connectshark/0306-smartauto-homework/actions/workflows/deploy.yml)
[![create-release](https://github.com/connectshark/0306-smartauto-homework/actions/workflows/create-release.yml/badge.svg?branch=main)](https://github.com/connectshark/0306-smartauto-homework/actions/workflows/create-release.yml)
[![GitHub last commit](https://img.shields.io/github/last-commit/connectshark/0306-smartauto-homework.svg?style=flat)](https://github.com/connectshark/0306-smartauto-homework)
![GitHub stars](https://img.shields.io/github/stars/connectshark/0306-smartauto-homework.svg?style=social&label=Stars&style=plastic)


![https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![https://img.shields.io/badge/tailwindcss-35495E?style=for-the-badge&logo=tailwindcss&logoColor=38BCF8](https://img.shields.io/badge/tailwindcss-35495E?style=for-the-badge&logo=tailwindcss&logoColor=38BCF8)

快速開發模板架構

## 目錄

- [截圖](#截圖)
- [專案已安裝內容](#專案已安裝內容)
- [功能亮點](#功能亮點)
- [如何本地運行](#如何本地運行)
- [版權](#版權)

## 截圖

[![screenshot](/readme/cover.png)](https://connectshark.github.io/0306-smartauto-homework)

[DEMO](https://connectshark.github.io/0306-smartauto-homework)



## 專案已安裝內容

- vite `7`
- vue `3`
- pinia
- vue-router
- tailwindcss `4`
- github action自動部署至 `gh-page`

## 功能亮點
- 虛擬滾動 (Virtual Scrolling)：有效處理大量數據（如 public/data.json），提升渲染效能。
- 響應式設計：支援手機與桌面版。
- 自動化部署：透過 GitHub Actions 實現 CI/CD。

## 如何本地運行

### 新增環境變數

在專案根目錄下創建 `.env` 文件，並添加以下內容：

```
VITE_API_URI=https://api.github.com
VITE_SITE_NAME=0306 SMARTAUTO HOMEWORK
```


### 安裝依賴

```
npm install
```

### 啟動開發伺服器

```
npm run dev
```


## 版權

[MIT](/LICENSE).