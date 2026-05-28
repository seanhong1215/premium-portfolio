import type { Project } from '@/types/portfolio'
import designSystemImage from '@/assets/images/Design_System.png'
import designSystemDetail1 from '@/assets/images/Design_System1.png'
import designSystemDetail2 from '@/assets/images/Design_System2.png'
import designSystemDetail3 from '@/assets/images/Design_System3.png'
import monitoringImage from '@/assets/images/即時設備監控平台.png'
import monitoringDetail1 from '@/assets/images/即時設備監控平台1.png'
import monitoringDetail2 from '@/assets/images/即時設備監控平台2.png'
import monitoringDetail3 from '@/assets/images/即時設備監控平台3.png'
import businessTravelImage from '@/assets/images/商務差旅整合平台.png'
import businessTravelDetail1 from '@/assets/images/商務差旅整合平台1.png'
import businessTravelDetail2 from '@/assets/images/商務差旅整合平台2.png'
import businessTravelDetail3 from '@/assets/images/商務差旅整合平台3.png'
import cultureImage from '@/assets/images/體驗台灣好文化.png'
import workspaceImage from '@/assets/images/複合式書店共享空間.png'

export const projects: Project[] = [
  {
    title: 'Design System 模板元件庫',
    category: 'Design System / Component Library',
    summary: '把常見 UI 模式整理成可重用的元件與模板，讓產品介面能用一致規格快速交付，也降低後續維護成本。',
    coverImage: designSystemImage,
    coverAlt: 'React Design System 模板元件庫作品截圖',
    detailImages: [
      { src: designSystemDetail1, alt: 'Design System 元件總覽細節圖', label: '元件總覽' },
      { src: designSystemDetail2, alt: 'Design System 元件狀態細節圖', label: '狀態規格' },
      { src: designSystemDetail3, alt: 'Design System 模板應用細節圖', label: '模板應用' },
    ],
    problem: '當頁面數量增加時，按鈕、表單、卡片與狀態樣式容易各自發展，造成重複開發、視覺不一致與交接成本。',
    solution: '將常用版型拆成可重用元件，定義狀態、尺寸、樣式變體與使用情境，讓工程實作與介面規格能對齊。',
    architecture: '以 TypeScript 型別、元件 props、設計 token 與模板化資料結構管理 UI pattern，方便後續新增情境。',
    challenge: '需要同時保留彈性與規格一致性，讓元件能被快速套用，也能支援不同頁面與產品需求。',
    techStack: ['Vue.js', 'React', 'TypeScript', 'Design System', 'Component Library', 'Figma'],
    githubUrl: 'https://github.com/seanhong1215/StoryBook_Demo',
    demoUrl: 'https://seanhong1215.github.io/StoryBook_Demo',
  },
  {
    title: '即時設備監控平台',
    category: 'Realtime Monitoring Platform',
    summary: '將即時狀態、事件告警與關鍵數據整理成可掃描的操作介面，展示前端如何承接高資訊密度的資料情境。',
    coverImage: monitoringImage,
    coverAlt: '即時設備監控平台作品截圖',
    detailImages: [
      { src: monitoringDetail1, alt: '即時設備監控平台狀態總覽細節圖', label: '狀態總覽' },
      { src: monitoringDetail2, alt: '即時設備監控平台事件與告警細節圖', label: '事件告警' },
      { src: monitoringDetail3, alt: '即時設備監控平台資料視覺化細節圖', label: '資料視覺化' },
    ],
    problem: '大量狀態與事件若只以列表呈現，使用者很難在短時間內判斷異常來源、影響範圍與處理優先順序。',
    solution: '透過狀態卡、事件流、趨勢圖與顏色規則建立視覺層級，讓重要資訊能在第一時間被看見。',
    architecture: '以前端元件承接狀態資料、事件資料與圖表資料，預留 API、WebSocket 或 polling 等資料來源接入方式。',
    challenge: '高資訊密度介面容易變得混亂，因此需要清楚區分狀態、告警、趨勢與操作回饋的閱讀優先級。',
    techStack: ['Vue.js', 'TypeScript', 'API Integration', 'Status UI', 'Data Visualization'],
    githubUrl: 'https://github.com/seanhong1215/FabOps_Dashboard/tree/main',
    demoUrl: 'https://seanhong1215.github.io/FabOps_Dashboard/',
  },
  {
    title: '商務差旅整合平台',
    category: 'Business Travel Platform',
    summary: '把差旅申請、查詢、審核狀態與資料管理整理成流程型介面，展現企業級平台的表單、列表與狀態設計能力。',
    coverImage: businessTravelImage,
    coverAlt: '商務差旅整合平台作品截圖',
    detailImages: [
      { src: businessTravelDetail1, alt: '商務差旅整合平台申請流程細節圖', label: '申請流程' },
      { src: businessTravelDetail2, alt: '商務差旅整合平台列表查詢細節圖', label: '列表查詢' },
      { src: businessTravelDetail3, alt: '商務差旅整合平台狀態管理細節圖', label: '狀態管理' },
    ],
    problem: '差旅流程涉及不同角色、表單欄位、查詢條件與狀態流轉，若資訊層級不清楚，使用者會難以完成任務。',
    solution: '以任務流程切分頁面，設計表單驗證、列表篩選、狀態標籤與資料回饋，降低企業使用者操作負擔。',
    architecture: '以 React / Vue 的元件化思維拆分表單、列表、權限狀態與 API 資料回饋區塊，方便維護與擴充。',
    challenge: '需要兼顧企業系統的資料完整性、操作效率與跨角色狀態，使流程清楚但不增加畫面負擔。',
    techStack: ['React', 'Vue.js', 'Form UI', 'Workflow UI', 'RESTful API', 'Enterprise UX'],

    githubUrl: 'https://github.com/seanhong1215/business-travel/tree/main',
    demoUrl: 'https://seanhong1215.github.io/business-travel/#/',
  },
  {
    title: '體驗台灣好文化',
    category: 'Culture Experience Website',
    summary: '以台灣文化體驗為主題，規劃內容型網站與互動式導覽，呈現品牌敘事與前端版面能力。',
    coverImage: cultureImage,
    coverAlt: '體驗台灣好文化作品截圖',
    problem: '文化內容若只有靜態文字，較難讓使用者快速理解主題特色與探索路徑。',
    solution: '透過分段內容、視覺節奏、互動導覽與 RWD 版面，建立更清楚的文化體驗網站。',
    architecture: '以前端元件拆分內容區塊、CTA、導覽與響應式版面，讓內容可持續擴充。',
    challenge: '在內容敘事、視覺呈現與手機閱讀體驗之間取得平衡。',
    techStack: ['Vue.js', 'RWD', 'Content UI', 'Animation', 'TailwindCSS', 'SEO'],
    githubUrl: 'https://github.com/seanhong1215/taiwan-culture-project/tree/master',
    demoUrl: 'https://seanhong1215.github.io/taiwan-culture-project/',
  },
  {
    title: '複合式共享空間 / JavaScript',
    category: 'JavaScript Side Project',
    summary: '以個人獨立工作空間需求為發想，設計共享空間服務網站，包含前台展示、使用者流程與後台管理功能。',
    coverImage: workspaceImage,
    coverAlt: '複合式書店共享空間作品截圖',
    problem: '外出工作或閱讀時，使用者需要能快速找到舒適、有氣氛且適合專注的空間。',
    solution: '規劃共享空間服務網站，結合空間展示、互動效果、訂單與會員資料管理，呈現完整服務流程。',
    architecture: '使用 Bootstrap 5、Swiper、Axios、Sweetalert 2、AOS、c3.js 與 Json-server / Vercel 完成互動與資料串接。',
    challenge: '整合前台體驗與後台管理功能，包含身分驗證、訂單列表、商品新增修改刪除與個人資料管理。',
    techStack: ['Bootstrap 5', 'JavaScript', 'Axios', 'AOS', 'c3.js', 'Json-server', 'Vercel'],
    // metrics: [
    //   { label: '功能範圍', value: '前後台', detail: '前台展示、會員流程與後台管理' },
    //   { label: '資料串接', value: 'API', detail: 'Axios 串接 Json-server 模擬資料' },
    //   { label: '圖表展示', value: 'c3.js', detail: '後台數據圖表與狀態呈現' },
    // ],
    githubUrl: 'https://github.com/seanhong1215/work_space/tree/gh-pages',
    demoUrl: 'https://seanhong1215.github.io/work_space/',
  },
]
