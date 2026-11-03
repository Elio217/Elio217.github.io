---
title: 'GitHub Pages로 블로그 배포하기'
description: '저장소와 블로그를 연결하는 마지막 단계. GitHub Actions를 통해 새 기록이 자동으로 발행되는 흐름을 정리합니다.'
pubDate: '2026-11-03T07:00:00+09:00'
tags: ['Astro', 'GitHub Pages', '블로그']
draft: false
---

블로그의 글과 설정은 이 저장소에서 관리합니다. `main` 브랜치가 바뀔 때 GitHub Actions가 사이트를 빌드하고 GitHub Pages로 배포하도록 구성되어 있습니다.

이 글은 처음 배포할 때 참고할 수 있는 예제 가이드입니다.

## 사이트 주소 설정

이 저장소의 이름은 `Elio217.github.io`입니다. 사용자 사이트의 루트 주소에 배포하므로 Astro 설정에 저장소 이름을 `base`로 추가할 필요가 없습니다.

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://elio217.github.io',
  output: 'static',
  trailingSlash: 'always',
});
```

위 코드는 주소 설정만 보여주는 예제입니다. 실제 설정 파일에는 사이트맵과 코드 강조 설정도 들어 있습니다.

## GitHub Pages 연결

저장소의 **Settings → Pages → Build and deployment**에서 **Source**를 **GitHub Actions**로 선택합니다. 이 설정은 최초 한 번 필요합니다.

그다음 프로젝트 파일을 `main` 브랜치에 푸시하면 됩니다.

## 자동 배포의 흐름

`.github/workflows/deploy.yml`은 다음 순서로 실행됩니다.

1. 저장소의 소스 코드를 가져옵니다.
2. Node.js와 잠금 파일을 이용해 의존성을 설치합니다.
3. `npm run build`로 타입 검사와 Astro 정적 빌드를 실행합니다.
4. 빌드한 파일을 GitHub Pages에 배포합니다.

Pull Request에서는 빌드를 검증하고, 병합되어 `main`에 반영되면 실제 사이트를 배포합니다. **Actions** 탭에서 배포 과정을 확인하거나 수동으로 다시 실행할 수 있습니다.

## 배포가 잘되지 않는다면

### 빌드에 실패한 경우

Actions의 실패한 단계를 열어 로그를 확인합니다. 글의 필수 정보가 빠졌거나 날짜 형식이 올바르지 않으면 콘텐츠 검사에서 오류가 발생할 수 있습니다.

먼저 로컬에서 같은 명령을 실행해 보세요.

```bash
npm ci
npm run build
```

Node.js는 `.nvmrc`에 지정된 버전 또는 `package.json`의 최소 버전을 충족하는 지원 버전을 사용합니다.

### 배포 후 화면이 갱신되지 않는 경우

Actions의 배포 작업이 완료되었는지 확인하고, 브라우저를 새로 고칩니다. Pages의 Source가 GitHub Actions로 지정되어 있는지도 확인하세요.

설정의 기준이 되는 자세한 설명은 [Astro의 GitHub Pages 공식 배포 가이드](https://docs.astro.build/en/guides/deploy/github/)에서 확인할 수 있습니다.
