import { SITE } from '../site';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  artwork: 'browser' | 'security';
  status: '운영 중' | '준비 중';
  repository?: string;
  notes: { title: string; text: string }[];
}

// 실제 프로젝트를 추가하거나 아래 준비 중인 항목을 수정하세요.
export const PROJECTS: Project[] = [
  {
    id: 'elio-blog', title: 'Elio Blog',
    description: '학습과 프로젝트를 연결하는 개인 기록 공간',
    tags: ['Astro', 'TypeScript', 'Markdown'], artwork: 'browser', status: '운영 중', repository: SITE.repository,
    notes: [
      { title: '프로젝트 소개', text: '개발하며 배운 내용과 프로젝트의 과정을 정리하는 개인 블로그입니다. Astro로 정적 페이지를 만들고 GitHub Pages로 배포합니다.' },
      { title: '담고 있는 기능', text: 'Markdown 글 작성, 태그와 카테고리 탐색, 검색, RSS를 지원합니다. 밤에는 은하수, 낮에는 맑아지는 하늘을 보여주는 테마를 적용했습니다.' },
      { title: '계속 만들어가는 공간', text: '직접 만들고 개선한 과정을 코드와 글로 함께 남깁니다. 새로운 학습과 프로젝트에 맞춰 조금씩 확장합니다.' },
    ],
  },
  {
    id: 'web-security-lab', title: 'Web Security Lab',
    description: '웹 보안 실험과 학습 과정을 정리할 실습 노트',
    tags: ['Web', 'Security'], artwork: 'security', status: '준비 중',
    notes: [
      { title: '준비 중인 프로젝트', text: '웹 보안을 공부하며 정리할 실습 기록을 위한 공간입니다. 구체적인 실습 내용과 결과는 프로젝트를 진행하면서 추가할 예정입니다.' },
      { title: '정리하고 싶은 내용', text: '웹의 동작 원리, 인증과 인가, 입력과 출력 처리 등을 직접 이해하고 실습 과정과 배운 점을 기록하려 합니다.' },
    ],
  },
];

export interface CareerEntry {
  category: string;
  organization: string;
  detail: string;
  period?: string;
  description?: string;
}

// 기간과 활동 설명은 확인된 내용이 있을 때 선택적으로 추가하세요.
export const CAREER: CareerEntry[] = [
  { category: '소속', organization: '고려대학교(세종)', detail: '인공지능사이버보안학과' },
  { category: '외부활동', organization: '화이트햇스쿨', detail: '4기' },
];

export const projectUrl = (project: Project) => `/projects/${project.id}/`;
