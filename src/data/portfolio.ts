export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  artwork: 'browser' | 'security' | 'pipeline';
  organization?: string;
  status?: '운영 중' | '준비 중';
  repository?: string;
  notes: { title: string; text: string }[];
}

// 기간, 사용 도구, 저장소와 진행 상태는 실제 정보가 있을 때 추가하세요.
export const PROJECTS: Project[] = [
  {
    id: 'whitehat-incident-response',
    title: '시나리오로 재현하며 배우는 침해사고대응',
    organization: '화이트햇스쿨 4기',
    description: '시나리오 재현을 통해 침해사고 대응 과정을 학습하는 프로젝트',
    tags: ['침해사고대응', '시나리오 재현'], artwork: 'security',
    notes: [
      { title: '프로젝트 소개', text: '화이트햇스쿨 4기의 「시나리오로 재현하며 배우는 침해사고대응」 프로젝트입니다. 시나리오를 재현하며 침해사고 대응을 학습하는 과정을 다룹니다.' },
      { title: '프로젝트 주제', text: '시나리오 재현과 사고 대응을 연결해 이해하는 데 초점을 둡니다. 재현한 상황과 관찰한 내용을 바탕으로 대응 과정을 정리하는 것이 목표입니다.' },
    ],
  },
  {
    id: 'devsecops-pipeline',
    title: 'DevSecOps 파이프라인 제작',
    description: '개발과 배포 흐름에 보안 점검을 연결하는 파이프라인 구축 프로젝트',
    tags: ['DevSecOps', 'CI/CD', '보안 자동화'], artwork: 'pipeline',
    notes: [
      { title: '프로젝트 소개', text: '개발과 배포 흐름에 보안 점검을 연결하는 DevSecOps 파이프라인 제작 프로젝트입니다.' },
      { title: '프로젝트 주제', text: '파이프라인의 단계와 각 단계의 보안 점검을 함께 설계하는 데 초점을 둡니다. 개발 과정에서 반복해서 실행할 수 있는 보안 점검 흐름을 구성하는 것이 목표입니다.' },
    ],
  },
];

export interface CareerEntry {
  category: string;
  organization: string;
  detail: string;
  period?: string;
  description?: string;
  activities?: { name: string; period?: string }[];
}

// 기간과 활동 설명은 확인된 내용이 있을 때 선택적으로 추가하세요.
export const CAREER: CareerEntry[] = [
  {
    category: '소속',
    organization: '고려대학교(세종)',
    detail: '인공지능사이버보안학과',
    period: '2026.03 ~ 현재',
    activities: [
      { name: 'KUality', period: '2026.11 ~ 현재' },
      { name: 'Korec', period: '2026.03 ~ 현재' },
    ],
  },
  { category: '외부활동', organization: '화이트햇스쿨', detail: '4기', period: '2026.06 ~ 현재' },
];

export interface CtfResult {
  name: string;
  placement: string;
  startDate: string;
  endDate?: string;
}

export const CTF_RESULTS: CtfResult[] = [
  {
    name: 'MSG CTF 2026',
    placement: '2nd place',
    startDate: '2026-11-08',
  },
  {
    name: 'WhiteHat School 4th CTF',
    placement: '1st place',
    startDate: '2026-11-04',
    endDate: '2026-11-06',
  },
];

export const projectUrl = (project: Project) => `/projects/${project.id}/`;
