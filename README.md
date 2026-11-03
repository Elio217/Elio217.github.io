# Elio · 개발 기록

은하수와 밤하늘을 테마로 만든 한국어 Astro 블로그입니다.

- 사이트 주소: **https://elio217.github.io/**
- Astro 7 + TypeScript, 정적 사이트 생성
- Markdown 콘텐츠 컬렉션, 태그 페이지, 제목·소개·태그 검색
- 글별 목차, 읽기 시간, 이전·다음 글
- 다크·라이트 테마, 반응형 레이아웃
- 테마 버튼과 함께 전환되는 은하수 밤하늘·맑아지는 낮 하늘 배경
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
draft: false
---

여기부터 본문을 작성합니다.

## 오늘 배운 것

내용을 남겨보세요.
```

- 파일 이름이 글 주소가 됩니다. `my-post.md` → `/blog/my-post/`
- `title`, `description`, `pubDate`는 필수이며 `tags`, `draft`, `updatedDate`는 선택입니다.
- `draft: true`인 글은 개발·배포 모두에서 제외됩니다.
- `##`, `###` 제목은 글 목차에 자동으로 표시됩니다.
- 이미지는 `public/images/`에 넣고 `/images/파일명`으로 참조할 수 있습니다.
- 현재 포함된 세 편은 시작을 돕는 **예제 글**입니다. 자유롭게 수정하거나 삭제하세요.

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
| `src/site.ts` | 블로그 이름, 설명, GitHub 링크 |
| `astro.config.mjs` | 사이트 주소와 Astro 설정 |
| `src/pages/index.astro` | 메인 문구와 섹션 |
| `src/pages/about.astro` | 소개 글 |
| `src/assets/milky-way.png` | AI로 새로 생성한 메인 은하수 이미지 |
| `src/assets/milky-way.prompt.txt` | 이미지 생성 방식과 사용한 프롬프트 |
| `src/assets/clear-sky.png` | 밝은 테마용으로 생성한 맑아지는 하늘 이미지 |
| `src/assets/clear-sky.prompt.txt` | 낮 하늘 이미지의 생성 방식과 프롬프트 |
| `src/styles/global.css` | 색상, 글꼴, 레이아웃 |
| `src/content/blog/` | Markdown 글 |
| `.github/workflows/deploy.yml` | 빌드·배포 자동화 |

밤·낮 배경은 내장 이미지 생성 도구로 새로 만들었으며, 최초에 제공된 참고 사진은 현재 배경으로 사용하지 않습니다. 낮 하늘은 새로 생성한 밤하늘의 산 능선 구도를 유지하고 날씨와 조명을 바꿔 만들었습니다. 테마 버튼을 누르면 배경 사진과 글자·버튼 색상이 함께 전환되고 선택한 테마는 다음 방문에도 유지됩니다. 배경 사진은 Astro가 반응형 WebP로 변환하며, 두 배경을 미리 불러와 첫 테마 전환도 바로 시작됩니다. 움직임 줄이기 설정에서는 전환 효과를 생략합니다. 공유 미리보기에는 새 은하수의 JPEG를 사용합니다.

검색은 정적으로 생성된 글 제목·소개·태그를 브라우저에서 필터링하며 본문 전체 검색은 포함하지 않습니다. 로그인이나 별도 서버는 필요하지 않습니다.

## 구조

```text
src/
├── assets/           # 원본 이미지
├── components/       # 공통 UI
├── content/blog/     # Markdown 글
├── content.config.ts # 글 정보 스키마
├── layouts/          # 공통 HTML 및 메타 정보
├── lib/              # 글·태그·날짜 처리
├── pages/            # 홈, 목록, 상세, 태그, 소개, RSS 등
├── site.ts           # 블로그 기본 정보
└── styles/           # 공통 스타일
public/               # 파비콘 등 정적 파일
.github/workflows/    # GitHub Pages 배포
```
