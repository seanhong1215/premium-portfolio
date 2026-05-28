import type { SkillGroup } from '@/types/portfolio'

export const skills: SkillGroup[] = [
  {
    name: 'Frontend Engineering',
    description: '具備 Vue.js 與 React 開發經驗，能處理企業級產品介面、元件化架構、狀態與 API 串接。',
    tools: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'RWD', 'Component Design'],
  },
  {
    name: 'Backend Collaboration',
    description: '能與後端工程師協作資料流程、API 規格與服務串接，也操作過常見資料庫與訊息服務工具。',
    tools: ['RESTful API', 'MySQL', 'PgAdmin', 'Redis', 'RabbitMQ', 'API Testing'],
  },
  {
    name: 'Cloud / Deployment',
    description: '具備部署與環境設定經驗，能建立 AWS 雲端主機、使用 S3、Docker 部署、Nginx 設定與 Linux 操作。',
    tools: ['AWS EC2', 'S3', 'Docker', 'Nginx', 'Linux', 'Deployment'],
  },
  {
    name: 'Enterprise Product UI',
    description: '具備 FinTech 金融科技與 BPM 企業級平台經驗，熟悉流程型系統、後台管理與複雜狀態介面。',
    tools: ['FinTech', 'BPM', 'Admin System', 'Permission UI', 'Workflow UI'],
  },
  {
    name: 'UI/UX & Design System',
    description: '具備設計背景，能整理 Design System、模板元件庫、Prototype 與介面規格，讓設計與開發銜接更順。',
    tools: ['Figma', 'Design System', 'Template Library', 'Prototype', 'UI Flow'],
  },
  {
    name: 'Web Layout & Integration',
    description: '能完成 RWD、切版、互動效果與網站整合，並依專案需求選擇 TailwindCSS、Bootstrap 或客製 CSS 架構。',
    tools: ['HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'SASS', 'BEM'],
  },
]
