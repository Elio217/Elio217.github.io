# Elio · 개발 기록

은하수와 밤하늘을 테마로 만든 한국어 Astro 블로그입니다.

- 사이트 주소: **https://elio217.github.io/**
- Astro 7 + TypeScript, 정적 사이트 생성
- Markdown 콘텐츠 컬렉션, 태그 페이지, 제목·소개·태그 검색
- 글별 목차, 읽기 시간, 이전·다음 글
- 왼쪽 프로필, 대표 프로젝트, 카테고리 필터·검색을 갖춘 홈 화면
- 프로젝트 목록·상세 페이지, 소속·외부활동을 소개하는 이력 페이지
- 다크·라이트 테마, 반응형 레이아웃
- 테마 버튼과 함께 전환되는 은하수 밤하늘·맑아지는 낮 하늘 배경
- 첫 방문의 기본값은 밝은 테마이며, 이후 직접 선택한 테마를 기억합니다.
- 외부 글꼴 서버에 의존하지 않는 Noto Sans KR 한글 글꼴
- RSS, 사이트맵, robots.txt, canonical 및 소셜 공유 메타 정보
- GitHub Actions 빌드 검증 및 GitHub Pages 자동 배포

## 시작하기

Node.js **22.23.4 이상**의 Astro 지원 버전과 npm이 필요합니다. nvm을 사용한다면 `nvm install`과 `nvm use`로 `.nvmrc`의 버전을 선택할 수 있습니다.

```bash
npm ci
npm run dev
```

터미널에 표시되는 로컬 주소(기본 `http://localhost:4321`)를 엽니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버와 실시간 변경 반영 |
| `npm run check` | Astro 및 TypeScript 검사 |
| `npm run build` | 검사 후 `dist/`에 정적 사이트 생성 |
| `npm run preview` | 빌드 결과를 로컬에서 확인 |

## 글 작성하기

`src/content/blog/`에 Markdown 파일을 만듭니다.

```markdown
---
title: '나의 첫 번째 기록'
description: '글에 대한 짧은 소개입니다.'
pubDate: '2026-11-03'
tags: ['개발', '기록']
category: '개발'
draft: false
---

여기부터 본문을 작성합니다.

## 오늘 배운 것

내용을 남겨보세요.
```

- 파일 이름이 글 주소가 됩니다. `my-post.md` → `/blog/my-post/`
- `title`, `description`, `pubDate`는 필수이며 `tags`, `draft`, `updatedDate`는 선택입니다.
- `category`는 `개발`, `CTF/Wargame`, `BugbBounty`, `블로그/기술문서`, `논문/컨퍼런스`, `공모전/자격증` 중 하나이며 생략하면 `개발`입니다. 홈 화면에서는 최근 6개 글을 카테고리와 검색어로 함께 필터링합니다.
- `draft: true`인 글은 개발·배포 모두에서 제외됩니다.
- `##`, `###` 제목은 글 목차에 자동으로 표시됩니다.
- 이미지는 `public/images/`에 넣고 `/images/파일명`으로 참조할 수 있습니다.
- 현재는 블로그 제작 과정을 정리한 `building-my-astro-blog.md` 한 편을 게시했습니다. 새 글은 이 폴더에 추가하세요.

## Pages CMS로 글과 사진 관리하기

저장소 루트의 `.pages.yml`에 이 블로그용 편집 화면을 설정했습니다. 글은 `src/content/blog/`, 사진은 `public/images/`에 저장합니다. 제목·글 소개·게시일·카테고리·태그·초안 여부를 입력하고, 본문 편집기에서 사진을 업로드해 삽입할 수 있습니다.

처음 연결할 때는 다음 순서로 진행합니다.

1. `.pages.yml`, `public/images/.gitkeep`, 이 README를 `main`에 커밋·푸시합니다.
2. [Pages CMS](https://app.pagescms.org/)에 GitHub 계정으로 로그인합니다.
3. 안내에 따라 Pages CMS GitHub App을 설치하고 `Elio217.github.io` 저장소를 선택합니다.
4. Pages CMS에서 `Elio217/Elio217.github.io` 저장소와 `main` 브랜치를 엽니다. 이미 올린 `.pages.yml`을 사용합니다.
5. **글 관리**에서 기존 글을 수정하거나 새 글을 작성합니다. 공개할 때는 **초안으로 저장**을 끄고 저장합니다.

새 글은 기본적으로 초안입니다. 초안도 GitHub에는 저장되지만, 블로그 목록과 상세 페이지에는 나타나지 않습니다. 공개한 글은 기존 GitHub Actions 배포가 완료되면 반영됩니다.

파일명은 날짜와 시간으로 자동 생성되며, 새 글을 만들 때 원하는 영문 파일명으로 수정할 수도 있습니다. 확장자는 `.md`를 사용합니다. 사진은 고유한 이름으로 저장하고 본문에는 `/images/파일명` 경로를 넣으므로 직접 경로를 맞출 필요가 없습니다. **Editor / Source** 전환으로 본문을 편집하거나 Markdown 원문을 확인할 수 있습니다.

Pages CMS에서 글을 저장하면 GitHub에 변경이 생깁니다. 이후 PC에서 다시 작업할 때는 로컬 변경을 먼저 정리한 뒤 원격 변경을 가져옵니다.

공식 문서: [연결 순서](https://pagescms.org/docs/quick-start/), [사진 저장 경로 설정](https://pagescms.org/docs/configuration/media/).

## GitHub Pages에 배포하기

이 저장소는 사용자 사이트이므로 `base` 없이 `https://elio217.github.io`를 사용합니다. 빌드된 `dist/` 폴더를 직접 커밋할 필요는 없습니다.

1. 이 프로젝트 파일과 `package-lock.json`을 GitHub 저장소의 `main` 브랜치에 커밋·푸시합니다.
2. GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 지정합니다.
3. **Actions → Deploy Astro to GitHub Pages**에서 실행 결과를 확인합니다. 첫 실행이 실패했다면 Source 설정 후 **Re-run all jobs**를 누릅니다.
4. 배포가 완료되면 **https://elio217.github.io/**에서 확인합니다.

이후 `main`에 푸시할 때마다 검사와 배포가 자동 실행됩니다. Pull Request에서는 빌드만 검증합니다. 수동 배포는 Actions의 **Run workflow**를 사용합니다.

기준 문서: [Astro 공식 GitHub Pages 배포 가이드](https://docs.astro.build/en/guides/deploy/github/).

## 나에게 맞게 바꾸기

| 파일 | 변경 내용 |
| --- | --- |
| `src/site.ts` | 블로그 기본 정보와 홈 화면의 `PROFILE` 설정(이름, 사진, 소개, 링크) |
| `astro.config.mjs` | 사이트 주소와 Astro 설정 |
| `src/pages/index.astro` | 홈 화면 섹션 |
| `src/components/HomePoem.astro` | 홈 상단의 별 장식과 시 구절 |
| `src/styles/home.css` | 홈 화면의 하늘 여백, 간격과 배치 |
| `src/pages/about.astro` | 소개 글 |
| `src/data/portfolio.ts` | `PROJECTS`의 프로젝트 정보와 `CAREER`의 소속·외부활동 |
| `src/assets/milky-way.png` | AI로 새로 생성한 메인 은하수 이미지 |
| `src/assets/milky-way.prompt.txt` | 이미지 생성 방식과 사용한 프롬프트 |
| `src/assets/clear-sky.png` | 밝은 테마용으로 생성한 맑아지는 하늘 이미지 |
| `src/assets/clear-sky.prompt.txt` | 낮 하늘 이미지의 생성 방식과 프롬프트 |
| `src/assets/profile-marten.png` | 홈과 소개 페이지에 사용하는 담비 프로필 원본 |
| `src/styles/global.css` | 색상, 글꼴, 레이아웃 |
| `src/content/blog/` | Markdown 글 |
| `.pages.yml` | Pages CMS의 글 편집 항목과 사진 저장 경로 |
| `public/images/` | Pages CMS에서 업로드한 본문 사진 |
| `.github/workflows/deploy.yml` | 빌드·배포 자동화 |

홈 화면의 왼쪽 프로필은 `src/site.ts`의 `PROFILE`에서 수정합니다. `realName`에 이름을 넣으면 `Elio` 옆에 작은 글씨로 표시하며, 빈 문자열이면 생략합니다. 현재 `src/assets/profile-marten.png`의 담비 캐릭터를 사용하며, Astro가 작은 WebP 이미지로 최적화해 홈과 소개에 표시합니다. 사진을 바꾸려면 `src/assets/`의 파일을 import해 `avatar`에 지정하거나, `public/images/profile.jpg`처럼 파일을 추가하고 `avatar: '/images/profile.jpg'`로 지정하세요. `avatar`가 빈 문자열이면 이름의 첫 글자를 기본 아바타로 표시합니다. `bio`에는 `\n`으로 줄바꿈을 넣을 수 있으며, `links`에서 링크 이름·주소·아이콘을 바꿀 수 있습니다. 모바일에서는 프로필이 시 구절 위에 표시됩니다.

홈 상단은 `서시.png` 시안의 배치를 반영했습니다. `HomePoem.astro`에서 작은 별·짧은 선과 두 구절을 렌더링하며, 작품명과 작가명은 표시하지 않습니다. 기존 소개 제목과 설명, 노트 그림은 제거했습니다. 하늘의 여백과 아래쪽 배치는 `home.css`의 `.home-intro`에서 조절합니다.

소속·동아리·외부활동은 `PROFILE.details`에서 수정합니다. `label`은 항목명, `value`는 내용이며, 화면에서 두 열로 자동 정렬합니다. `value`에 `\n`을 넣으면 같은 내용 열 안에서 줄바꿈됩니다. `bio`는 자유로운 소개 문구가 필요할 때 함께 사용할 수 있고, 빈 문자열이면 표시하지 않습니다.

```ts
details: [
  { label: '소속', value: 'KUS_AICS' },
  { label: '동아리', value: 'KUality · Korec' },
  { label: '외부활동', value: '화이트햇스쿨 4기' },
],
```

상단 홈 링크는 `src/components/SignatureLogo.astro`의 SVG 필기체 로고입니다. 글씨를 쓰고 잠시 보여준 뒤 다시 쓰는 7초 주기를 반복합니다. 운영체제에서 움직임 줄이기를 선택하면 완성된 서명을 정적으로 표시합니다.

브라우저 탭 아이콘은 `public/favicon.svg`를 원본으로 만든 검은 원 안 흰색 담비 얼굴입니다. 페이지는 새 파일명인 `favicon-marten-face.svg` 및 16px·32px PNG를 참조하며, 브라우저 기본 경로용 `favicon.ico`도 제공합니다. 아이콘을 수정하면 이 파일들을 함께 갱신하세요. 프로필의 작은 이름은 현재 `김도현`으로 설정되어 있습니다. 홈의 프로필과 모든 페이지의 하단에서는 RSS 링크를 표시하지 않습니다.

프로젝트 카드와 상세 내용은 `src/data/portfolio.ts`의 `PROJECTS`에서 관리합니다. 현재는 화이트햇스쿨 4기의 ‘시나리오로 재현하며 배우는 침해사고대응’과 ‘DevSecOps 파이프라인 제작’을 표시합니다. 제목·설명·태그·상세 내용을 수정하면 `/projects/`와 각 프로젝트 상세 페이지에 함께 적용됩니다. `organization`(활동·소속), `status`(상태), `repository`(저장소 주소)는 선택 항목입니다. 기간·진행 상태·사용 도구와 구체적인 성과는 실제 정보가 있을 때 추가하세요.

소개 탭의 이름은 `PROFILE.realName`에서 가져오며, 자기소개 문장은 `src/pages/about.astro`에서 수정합니다. `CAREER`의 소속은 고려대학교(세종) 인공지능사이버보안학과이며, 학교명 옆에 `2026.03 ~ 현재`를 표시합니다. 그 아래 `activities` 목록에서 동아리명과 기간을 관리합니다. KUality는 `2026.11 ~ 현재`, Korec은 `2026.03 ~ 현재`로 설정되어 있습니다. 외부활동은 화이트햇스쿨 4기입니다. `period`(기간), `description`(설명), `activities`(하위 활동 목록)는 선택이며, 입력한 경우에만 표시됩니다. 이메일이나 이력서 링크를 추가하려면 `PROFILE.links`에 실제 주소를 등록하세요. 아이콘은 `mail`, `file` 등을 사용할 수 있습니다.

소개 페이지의 ‘이력’은 소속 → 외부활동 → CTF를 하나의 타임라인으로 연결합니다. CTF 기록은 같은 파일의 `CTF_RESULTS`에서 수정합니다. `name`은 대회명, `placement`는 순위, `startDate`와 선택 항목인 `endDate`는 `YYYY-MM-DD` 형식의 날짜입니다. 종료일이 있으면 기간을, 없으면 하루의 날짜만 표시합니다. 화면에서는 `2026.11.04 ~ 2026.11.06`처럼 보여줍니다.

밤·낮 배경은 내장 이미지 생성 도구로 새로 만들었으며, 최초에 제공된 참고 사진은 현재 배경으로 사용하지 않습니다. 낮 하늘은 새로 생성한 밤하늘의 산 능선 구도를 유지하고 날씨와 조명을 바꿔 만들었습니다. 테마 버튼을 누르면 배경 사진과 글자·버튼 색상이 함께 전환되고 선택한 테마는 다음 방문에도 유지됩니다. 배경 사진은 Astro가 반응형 WebP로 변환하며, 두 배경을 미리 불러와 첫 테마 전환도 바로 시작됩니다. 움직임 줄이기 설정에서는 전환 효과를 생략합니다. 공유 미리보기에는 새 은하수의 JPEG를 사용합니다.

검색은 정적으로 생성된 글 제목·소개·태그를 브라우저에서 필터링하며 본문 전체 검색은 포함하지 않습니다. 로그인이나 별도 서버는 필요하지 않습니다.

## 구조

```text
src/
├── assets/           # 원본 이미지
├── components/       # 공통 UI
├── content/blog/     # Markdown 글
├── content.config.ts # 글 정보 스키마
├── data/             # 프로젝트 및 이력 정보
├── layouts/          # 공통 HTML 및 메타 정보
├── lib/              # 글·태그·날짜 처리
├── pages/            # 홈, 목록, 상세, 태그, 소개, RSS 등
├── site.ts           # 블로그 기본 정보
└── styles/           # 공통 스타일
public/               # 파비콘 등 정적 파일
.github/workflows/    # GitHub Pages 배포
```
