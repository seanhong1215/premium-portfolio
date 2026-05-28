import type { Profile, Stat, TimelineItem } from '@/types/portfolio'
import formalProfileImage from '@/assets/images/profile_1.png'
import heroProfileImage from '@/assets/images/profile_3.png'

export const profile: Profile = {
  name: '洪尚彬 Shawn Ben',
  role: '前端工程師 / UI 工程師 / 軟體工程師',
  headline: '打造穩定、可維護、可擴充的前端產品介面。',
  summary:
    '具備 3 年以上企業級平台前端開發實戰經驗，熟悉 Vue.js、React.js、API 串接、元件化開發與雲端部署協作。能把需求、資料流程、UI/UX 與工程品質整合成可落地的產品介面。',
  availability: '前端工程師面試作品集',
  location: '希望工作地點：台中、新竹',
  email: 'seanhong1215@gmail.com',
  resumeUrl: '#contact',
  heroImage: heroProfileImage,
  formalImage: formalProfileImage,
  socials: [
    { label: 'GitHub', href: 'https://github.com/seanhong1215', icon: 'mdi:github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/seanhong1215', icon: 'mdi:linkedin' },
    { label: 'Email', href: 'mailto:seanhong1215@gmail.com', icon: 'mdi:email-outline' },
  ],
}

export const heroSignals = [
  'Vue.js',
  'React.js',
  'Frontend Architecture',
  'API Integration',
  'Cloud Deployment',
  'Design System',
]

export const stats: Stat[] = [
  { label: '企業前端經驗', value: '3+ 年', detail: 'FinTech、BPM、企業級平台與產品介面開發' },
  { label: '前端框架', value: 'Vue / React', detail: '元件化、狀態管理、API 串接與複雜流程介面' },
  { label: '協作能力', value: 'Full-stack', detail: '後端資料表、雲端主機、部署與服務設定協作' },
]

export const timeline: TimelineItem[] = [
  {
    period: '前端工程',
    title: 'Vue.js / React.js 企業級產品介面開發',
    description: '具備 3 年以上企業級平台實戰經驗，能處理元件化架構、API 串接、權限狀態、流程介面與產品維護。',
  },
  {
    period: '系統協作',
    title: '與後端、資料庫與雲端部署流程協作',
    description: '操作過 MySQL、PgAdmin、Redis、RabbitMQ，並具備 AWS 主機、S3、Docker、Nginx、Linux 相關部署經驗。',
  },
  {
    period: '產品介面',
    title: 'Design System 與跨情境 UI 交付',
    description: '具備 UI/UX 背景，能將模板元件庫、後台管理、監控平台、差旅平台與內容型網站整理成一致且可擴充的介面。',
  },
]
