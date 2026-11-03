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
  handle: string;
  bio: string;
  avatar: string;
  links: { label: string; href: string; icon: 'github' | 'arrow' | 'external' }[];
}

// 사진은 public/images/에 넣고 avatar를 '/images/profile.jpg'처럼 지정하세요.
// 빈 문자열이면 이름의 첫 글자를 기본 아바타로 표시합니다.
export const PROFILE: Profile = {
  name: SITE.name,
  handle: '@Elio217',
  bio: '배운 것을 기록하고,\n작은 발견을 쌓아갑니다.',
  avatar: '',
  links: [
    { label: 'GitHub', href: SITE.github, icon: 'github' },
    { label: '소개', href: '/about/', icon: 'arrow' },
  ],
};
