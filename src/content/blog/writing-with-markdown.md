---
title: 'Markdown으로 글을 쓰는 방법'
description: '새 글을 만들고 제목, 날짜, 태그를 지정하는 방법부터 코드 블록까지. 블로그를 위한 작은 작성 가이드.'
pubDate: '2026-11-03T08:00:00+09:00'
tags: ['Markdown', '블로그']
category: '블로그/기술문서'
draft: false
---

이 글은 블로그의 첫 글을 작성할 때 참고할 수 있는 예제입니다. 별도의 편집기 없이 Markdown 파일 하나로 새로운 기록을 추가할 수 있습니다.

## 새 글 만들기

`src/content/blog/` 폴더에 `.md` 파일을 추가합니다. 파일 이름은 글 주소가 됩니다.

```text
src/content/blog/my-first-post.md
                 ↓
https://elio217.github.io/blog/my-first-post/
```

영문 소문자와 하이픈을 사용하면 관리하기 편합니다. 폴더를 나누면 `notes/my-post.md`처럼 중첩 주소도 사용할 수 있습니다.

## 제목과 태그 설정하기

파일 맨 위에 `---`로 감싼 정보를 적습니다. 이 영역을 **frontmatter**라고 부릅니다.

```yaml
---
title: '나의 첫 번째 글'
description: '이 글에서 다루는 내용을 한두 문장으로 소개합니다.'
pubDate: '2026-11-03'
tags: ['개발', '기록']
draft: false
---
```

`title`, `description`, `pubDate`는 필수입니다. 태그를 추가하면 주제별 페이지가 자동으로 만들어집니다. 글을 수정한 날짜는 `updatedDate`로 추가할 수 있습니다.

아직 공개하고 싶지 않은 글은 `draft: true`로 설정하세요. 초안은 개발 서버와 배포 결과의 글 목록, 검색, RSS에 포함되지 않으며 상세 페이지도 생성되지 않습니다.

## 본문 작성하기

### 제목과 강조

본문의 큰 제목은 `##`, 작은 제목은 `###`를 사용합니다. 글 제목은 자동으로 표시되므로 본문에 `#` 제목을 다시 넣지 않아도 됩니다. `##`와 `###`로 작성한 제목은 글의 목차에 나타납니다.

```markdown
## 오늘 배운 내용

**굵게 강조하기**, *기울여 쓰기*, `코드 표시하기`

- 첫 번째 내용
- 두 번째 내용

[링크 이름](https://astro.build)
```

### 코드 블록

백틱 세 개 뒤에 언어 이름을 적으면 구문을 강조합니다.

````markdown
```typescript
const message: string = 'Hello, universe!';
console.log(message);
```
````

결과는 다음과 같습니다.

```typescript
const message: string = 'Hello, universe!';
console.log(message);
```

### 이미지 넣기

이미지를 `public/images/`에 저장하고 다음과 같이 참조할 수 있습니다.

```markdown
![이미지를 설명하는 대체 텍스트](/images/my-photo.jpg)
```

파일을 `src/` 아래에 두고 상대 경로로 가져오면 Astro의 이미지 처리를 사용할 수도 있습니다. 자세한 사용법은 [Astro 이미지 문서](https://docs.astro.build/en/guides/images/)에서 확인할 수 있습니다.

## 미리 보고 발행하기

```bash
npm run dev
```

로컬에서 화면을 확인하고 다음 명령으로 타입 검사와 배포용 빌드를 실행합니다.

```bash
npm run build
```

GitHub Pages의 배포 소스를 GitHub Actions로 설정한 뒤, 글과 함께 변경 내용을 `main` 브랜치에 푸시하면 자동 배포가 시작됩니다.
