import type { ImageMetadata } from 'astro';
import profileMarten from './assets/profile-marten.png';

export const SITE = {
  title: 'Elio · 개발 기록',
  name: 'Elio',
  description: '배운 것을 기록하고, 더 나은 코드를 고민합니다. Elio의 개발 블로그.',
  github: 'https://github.com/Elio217',
  repository: 'https://github.com/Elio217/Elio217.github.io',
  language: 'ko-KR',
} as const;

interface Profile {
  name: string;
  realName: string;
  handle: string;
  bio: string;
  details?: { label: string; value: string }[];
  avatar: string | ImageMetadata;
  links: { label: string; href: string; icon: 'github' | 'arrow' | 'external' | 'rss' | 'mail' | 'user' | 'file' }[];
}

// src/assets/ 이미지를 import하면 Astro가 웹용으로 최적화합니다.
// public/images/의 사진 경로('/images/profile.jpg')도 사용할 수 있습니다.
// 빈 문자열이면 이름의 첫 글자를 기본 아바타로 표시합니다.
export const PROFILE: Profile = {
  name: SITE.name,
  realName: '김도현',
  handle: '@Elio217',
  bio: '',
  details: [
    { label: '소속', value: 'KUS_AICS' },
    { label: '동아리', value: 'KUality · Korec' },
    { label: '외부활동', value: '화이트햇스쿨 4기' },
  ],
  avatar: profileMarten,
  links: [
    { label: 'GitHub', href: SITE.github, icon: 'github' },
    { label: '소개', href: '/about/', icon: 'user' },
  ],
};

export const POST_CATEGORIES = [
  '개발',
  'CTF/Wargame',
  'BugbBounty',
  '블로그/기술문서',
  '논문/컨퍼런스',
  '공모전/자격증',
] as const;
