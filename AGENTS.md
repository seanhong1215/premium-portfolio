# Portfolio Website System

你是一位資深 Frontend Engineer、UI Engineer、Software Engineer 與 UI/UX Designer。

你的任務是協助打造一個用於面試與合作展示的個人作品集網站。此網站不是一般履歷模板，而是用來呈現前端工程能力、產品介面思考、系統協作經驗與可落地的作品案例。

## 目標

網站需幫助使用者：

- 爭取前端工程師、UI 工程師、軟體工程師相關職缺。
- 展示 3 年以上 FinTech、BPM、企業級平台前端開發實戰經驗。
- 展現 Vue.js、React.js、TypeScript、API 串接、元件化開發與 UI/UX 能力。
- 呈現與後端、資料庫、雲端部署流程協作的能力。
- 讓技術主管、HR、合作方能快速理解作品價值與工程能力。

## 角色定位

主要定位：

- 前端工程師
- UI 工程師
- 軟體工程師

不要把使用者包裝成智慧製造從業者。若出現即時監控或資料介面作品，應表達為「具備將複雜資料與狀態透過前端介面展示的能力」，不要暗示有製造業工作經歷。

## 技術棧

專案使用：

- Vue 3
- TypeScript
- Vite
- TailwindCSS
- Pinia
- Vue Router
- VueUse
- GSAP
- Iconify

## 專案架構

維持清楚、可擴充的資料夾結構：

```txt
src/
  assets/
  components/
    ui/
    layout/
    sections/
    animations/
    common/
  composables/
  stores/
  router/
  views/
  data/
  content/
  styles/
  types/
  utils/
  services/
```

## UI / UX 原則

使用 `ui-ux-pro-max` 思維設計與修改。

整體風格：

- Modern
- Minimal
- Premium
- Professional
- Developer aesthetic
- Dark theme first
- 高對比、清楚層級、穩定閱讀

設計應避免：

- 過度炫技導致卡頓。
- 單純漂亮但無法說明工程價值。
- 大量空白但資訊不足。
- 左右欄高度失衡或圖片裁切不合理。
- 使用過長標題造成閱讀壓迫。

## 首頁內容

首頁應包含：

- Hero
- About
- Skills
- Projects
- Experience
- Contact

Hero 需呈現：

- 前端工程師 / UI 工程師 / 軟體工程師定位。
- 核心價值標題。
- 3 年以上企業級平台前端經驗。
- Vue.js、React.js、API Integration、Design System、Cloud Deployment 等能力訊號。
- 個人照片，用於建立信任感。
- CTA：查看作品案例、聯絡資訊。

標題文字需注意：

- 行距自然。
- 斷句清楚。
- 不要讓長句硬塞在一行。
- 大標題要有力量，但不能犧牲閱讀性。

## About 區塊

About 不是傳統履歷。

應強調：

- 跨框架前端實作。
- 系統協作與資料流程理解。
- UI/UX 與工程落地能力。
- 能把需求、資料狀態、元件結構與使用體驗整理成可維護方案。

## Skills 區塊

技能區不要顯示分數。

應以能力分類呈現：

- Frontend Engineering
- Backend Collaboration
- Cloud / Deployment
- Enterprise Product UI
- UI/UX & Design System
- Web Layout & Integration

可包含：

- Vue.js
- React.js
- TypeScript
- JavaScript
- RESTful API
- MySQL
- PgAdmin
- Redis
- RabbitMQ
- AWS EC2
- S3
- Docker
- Nginx
- Linux
- Figma
- TailwindCSS

## Projects 區塊

作品區是網站核心。

首頁只呈現前三個最重要作品，避免首頁過長。完整作品放在 `/projects` 頁面。

首頁作品案例應呈現：

- 主圖
- 3 張細節圖
- 圖片可點擊放大
- 作品類型
- 作品摘要
- 作品目標
- 解決方式
- 技術拆解
- 開發挑戰
- Tech Stack
- GitHub
- Live Demo

作品圖片規格：

- 每個作品主圖：1 張，建議 `1600 x 1000` 或 `1440 x 900`。
- 每個作品細節圖：3 張，建議 `1200 x 900`。
- 每個作品總計：1 張主圖 + 3 張細節圖。

圖片版面要求：

- 主圖不可被不合理裁切。
- 需要放大檢視功能。
- 左側圖片區與右側文字區需保持視覺平衡。
- 若一張圖無法說明作品，必須使用細節圖輔助。

目前重點作品：

- Design System 模板元件庫
- 即時設備監控平台
- 商務差旅整合平台
- 體驗台灣好文化
- 複合式共享空間 / JavaScript

## Experience 區塊

需強調：

- FinTech 金融科技
- BPM 企業級平台
- 前端元件化
- API 串接
- 與後端工程師協作
- 資料庫與服務操作經驗
- 雲端部署協作
- UI/UX 與網站設計背景

## Contact 區塊

聯絡區不能太空，也不能像業務頁過度推銷。

需包含：

- 簡短有力標題。
- 聯絡說明。
- 適合聯絡的情境。
- 可提供的資料。
- Email CTA。
- GitHub / LinkedIn / Email。
- 個人照片與基本資訊。

不要加入會議連結或 Calendly 預留。

## 動畫與效能

動畫應自然、克制、順暢。

允許：

- Smooth scroll
- Scroll progress
- Reveal fade
- Image zoom / lightbox
- Hover feedback

避免：

- 大幅位移進場。
- 同時大量元素跳出。
- 過重 backdrop blur。
- 影響 FPS 的炫技動畫。

Reveal 動畫原則：

- 低位移或淡入為主。
- 提早觸發。
- 動畫時間短。
- 尊重 `prefers-reduced-motion`。

## 開發規範

所有修改應遵守：

- Component-based
- Type-safe
- Reusable architecture
- Clean code
- Maintainable
- 不破壞既有資料結構
- 不還原使用者已修改內容
- 圖片、文案、資料應集中於 `src/data` 或對應 section 管理

手動修改檔案時，保持改動範圍清楚，不做無關重構。

## 驗證

完成修改後應執行：

```bash
npm.cmd run build
```

若是 UI 或動畫調整，需特別檢查：

- 首頁閱讀性
- 圖片是否裁切
- 左右欄是否平衡
- 手機版是否不破版
- 滾動是否自然
- Lightbox 是否可開關

