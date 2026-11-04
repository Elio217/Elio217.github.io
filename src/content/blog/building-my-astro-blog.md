---
title: 'Astro와 GitHub Pages로 나만의 블로그 만들기'
description: 'Markdown으로 글을 관리하고, 밤과 낮의 하늘을 담은 화면을 GitHub Pages로 배포하기까지. 이 블로그의 구성과 제작 과정을 정리합니다.'
pubDate: '2026-11-04'
category: '블로그/기술문서'
tags: ['Astro', 'GitHub Pages', '블로그']
draft: false
---

개발과 보안을 공부하면서 남기는 기록을 한곳에 모으고 싶었다. CTF와 Wargame 풀이, 프로젝트, 읽은 기술 문서를 차곡차곡 쌓아갈 공간이 필요했다. 그렇게 만든 곳이 지금 보고 있는 블로그다.

사이트는 Astro로 만들고 GitHub Pages에 배포했다. 글은 Markdown 파일로 관리하고, 프로필과 프로젝트는 별도의 데이터 파일에서 수정하도록 구성했다. 화면에는 밤의 은하수와 날이 개는 낮 하늘을 담았다.

## Astro로 정적 블로그 구성하기

블로그의 중심은 글과 이미지다. 저장소에 있는 콘텐츠로 페이지를 만들고, 방문자는 완성된 화면을 바로 읽을 수 있도록 정적 사이트로 구성했다.

이 프로젝트의 `astro.config.mjs`에서는 사이트 주소와 빌드 방식을 설정한다. 아래는 그중 주소와 출력에 해당하는 부분이다.

```javascript
export default defineConfig({
  site: 'https://elio217.github.io',
  output: 'static',
  trailingSlash: 'always',
  // 사이트맵과 코드 블록 강조 설정도 함께 사용한다.
});
```

저장소 이름이 `Elio217.github.io`여서 사이트의 루트 주소로 배포한다. 별도의 하위 경로를 설정하지 않고 `/blog/`, `/projects/` 같은 주소를 사용한다.

화면은 `.astro` 컴포넌트로 나눴다. `BaseLayout.astro`는 공통 HTML, 헤더와 푸터, 메타 정보를 담당한다. 홈에서는 프로필, 시 구절, 프로젝트 카드, 최근 글 목록을 조합한다. 검색과 테마 전환은 브라우저에서 동작한다.

## Markdown 파일 하나가 글 한 편이 되도록

게시글은 `src/content/blog/`에 둔다. 파일의 앞부분에는 제목, 소개, 날짜, 카테고리와 태그를 적고 그 아래에 Markdown으로 본문을 쓴다.

```markdown
---
title: '오늘의 학습 기록'
description: '직접 확인한 내용과 배운 점을 정리합니다.'
pubDate: '2026-11-04'
category: '개발'
tags: ['학습 기록']
draft: false
---

## 확인하고 싶었던 것

여기부터 본문을 작성한다.
```

`src/content.config.ts`에서 글의 구조를 검사한다. 제목과 소개, 날짜가 필요하고 카테고리는 정해 둔 목록 중에서 선택한다. `draft: true`를 지정한 글은 목록과 배포에서 제외된다.

글을 읽는 화면에는 본문의 `##`, `###` 제목으로 만든 목차가 나타난다. 태그별 목록, 예상 읽기 시간, 이전·다음 글도 같은 콘텐츠 데이터를 바탕으로 만든다. 새 파일을 추가하면 글 목록과 RSS에 함께 반영된다.

## 밤과 낮이 이어지는 화면 만들기

배경은 두 장이다. 어두운 테마에는 은하수를, 밝은 테마에는 구름 사이로 하늘이 개는 이미지를 사용했다. 배경 이미지는 새로 생성했고, 프로필에는 담비 캐릭터를 넣었다.

`SkyBackground.astro`는 두 배경을 불러오고 테마에 따라 보이는 이미지를 전환한다. 원본은 `src/assets/`에서 관리하며 Astro의 이미지 처리를 거쳐 반응형 WebP로 제공한다. 화면의 글자, 카드, 선 색상은 CSS 변수로 함께 바뀐다.

첫 방문의 기본 테마는 밝은 화면이다. 테마 버튼으로 선택한 값은 `localStorage`에 저장하고 다음 방문에 다시 적용한다. 저장소를 사용할 수 없는 환경에서도 기본 테마와 전환 버튼은 동작하도록 했다.

홈 상단에는 「서시」의 두 구절을 놓았다. 작은 별과 짧은 선 아래에 문장을 배치했다. 넓게 남긴 하늘과 본문의 시작선이 이어지도록 간격을 맞췄다. 이 부분은 `HomePoem.astro`와 `home.css`에서 관리한다.

## 프로필과 프로젝트를 데이터로 관리하기

프로필은 `src/site.ts`의 `PROFILE`에서 바꾼다. 이름, 계정, 사진, 링크와 함께 소속·동아리·외부활동을 항목으로 나눴다. 항목명과 내용은 두 열로 자동 정렬되므로 공백으로 줄을 맞출 필요가 없다.

```typescript
details: [
  { label: '소속', value: 'KUS_AICS' },
  { label: '동아리', value: 'KUality · korec' },
  { label: '외부활동', value: '화이트햇스쿨 4기' },
],
```

프로젝트는 `src/data/portfolio.ts`의 `PROJECTS`에서 관리한다. 이름과 설명, 태그, 상세 내용을 수정하면 홈 카드와 프로젝트 목록, 상세 페이지에 함께 적용된다. 소속과 외부활동을 소개하는 페이지도 같은 파일의 `CAREER` 데이터를 사용한다.

내용을 바꿀 때 확인할 파일은 다음과 같다.

| 수정할 내용 | 파일 |
| --- | --- |
| 프로필과 카테고리 | `src/site.ts` |
| 프로젝트와 소속·외부활동 | `src/data/portfolio.ts` |
| 홈의 시 구절 | `src/components/HomePoem.astro` |
| 홈의 간격과 배치 | `src/styles/home.css` |
| 글 본문 | `src/content/blog/` |
| 밤·낮 배경과 프로필 원본 | `src/assets/` |

## GitHub Actions로 빌드하고 배포하기

배포는 `.github/workflows/deploy.yml`에서 관리한다. `main` 브랜치에 변경 사항을 push하면 Astro 빌드가 실행되고, 성공한 결과를 GitHub Pages에 배포한다. Pull Request에서는 빌드를 확인하고, 배포는 `main` 반영 시 진행한다.

```text
글·설정 수정 → 로컬 확인 → main에 push
                             ↓
                    GitHub Actions 빌드
                             ↓
                    GitHub Pages 배포
```

로컬에서는 의존성을 설치하고 개발 서버를 실행해 화면을 확인한다. 이 프로젝트의 Node.js 기준 버전은 `.nvmrc`에 기록했다.

```bash
npm ci
npm run dev
```

변경을 마친 뒤에는 배포용 빌드도 실행한다. `npm run build`는 Astro와 TypeScript 검사를 거쳐 정적 파일을 `dist/`에 만든다.

```bash
npm run build
```

확인이 끝나면 소스 파일을 커밋하고 push한다. 생성된 `dist/`는 Git에서 제외하고, 배포 과정에서 다시 만든다. 공개 사이트에 반영됐는지는 저장소의 Actions 실행 결과로 확인한다.

## 앞으로 쌓아갈 기록

이제 블로그의 틀이 마련됐다. 앞으로는 직접 풀어본 문제, 프로젝트에서 마주친 상황, 읽은 문서와 논문을 이곳에 정리하려 한다. 어떤 조건에서 확인했고 무엇을 배웠는지 다시 따라갈 수 있도록 남기는 것이 목표다.

블로그도 그 기록 중 하나다. 화면과 기능을 바꾸면서 배운 내용은 코드와 글에 함께 남겨두려 한다.
