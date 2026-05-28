import type { WorkExperience } from '@/types/portfolio'

export const workExperiences: WorkExperience[] = [
  {
    company: '佑昇科技有限公司',
    role: '前端工程師 / 後端工程師',
    period: '3+ 年以上實戰經驗',
    summary: '參與 FinTech 金融科技與 BPM 企業級平台前端開發，負責產品介面、流程狀態、API 串接與前後端協作。',
    highlights: [
      '使用 Vue.js / React.js 開發企業級產品介面，處理流程型平台、狀態呈現與後台管理需求。',
      '與後端工程師協作 RESTful API、資料表與服務串接，操作過 MySQL、PostgreSQL、Redis、RabbitMQ。',
      '參與 AWS EC2、S3、Docker、Nginx、Linux 等部署與環境設定流程。',
    ],
  },
  {
    company: '華苓科技',
    role: '前端設計師 / 前端元件開發',
    period: 'Sep 2020 - Apr 2022',
    summary: '負責 BPM 企業平台與產品介面優化，參與前端元件開發、Design System 與平台介面整合。',
    highlights: [
      '主導元件庫開發與 Design System 建立，統一產品視覺規範',
      '優化平台介面，整合設計與前端技術實現高品質的使用者介面',
      '從 UX 使用者行為分析出發，整理 Design System、UI Flow chart 與 Prototype。',
    ],
  },
  {
    company: '家多利行銷',
    role: '網頁設計師',
    period: 'Feb 2019 - Feb 2020',
    summary: '負責網頁版型、手機 App UI/UX 設計與客戶溝通，並與後端工程師合作完成網站視覺與功能整合。',
    highlights: [
      '使用 Adobe XD、Figma 與動畫設計工具整合網站開發流程。',
      '依客戶需求規劃網站視覺、互動效果與 RWD 版面。',
      '完成過30+ 企業形象網站、產品頁與行銷活動頁設計',
    ],
  },
  {
    company: '自由接案 / 六角學院',
    role: '設計與前端進修',
    period: 'Mar 2018 - Jan 2019',
    summary: '持續進修網頁設計、RWD、電商網站、SASS、JavaScript 與 UI/UX 設計流程。',
    highlights: [
      '學習視覺設計、CIS、包裝設計與品牌規劃。',
      '完成 RWD 響應式網站、電商網站、SASS 設計開發流程與 JavaScript 訓練。',
      '熟悉 User Story、Function Map、UI Flow、Wireframe 與 Prototype。',
    ],
  }
]
