# React UI 표현하기

> React는 사용자 인터페이스(UI)를 렌더링하기 위한 JavaScript 라이브러리입니다.
>
> UI는 버튼, 텍스트, 이미지와 같은 작은 요소로 구성됩니다.
>
> React를 통해 작은 요소들을 재사용 가능하고 중첩할 수 있는 컴포넌트로 조합할 수 있습니다.
>
> 웹 사이트에서 휴대전화 앱에 이르기까지 화면에 있는 모든 것을 컴포넌트로 나눌 수 있습니다.
>
> 이 프로젝트에서는 React 컴포넌트를 만들고, 사용자화하며, 조건부로 표시하는 방법에 대해서 알아봅니다.

## 📋 프로젝트 개요

이 프로젝트는 React와 TypeScript를 사용하여 UI 컴포넌트를 구성하고 표현하는 방법을 학습하기 위한 예제 프로젝트입니다.

## 🛠️ 기술 스택

- **React** 19.2.0 - UI 라이브러리
- **TypeScript** 5.9.3 - 타입 안정성
- **Vite** 7.2.4 - 빌드 도구 및 개발 서버
- **Tailwind CSS** 3.4.1 - 유틸리티 기반 CSS 프레임워크
- **ESLint** - 코드 품질 관리

## 🚀 빠른 시작

### 필수 요구사항

- Node.js (v18 이상 권장)
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

더 자세한 설치 및 설정 방법은 [INSTALL.md](./INSTALL.md)를 참고하세요.

## ⚠️ 주의사항

### TypeScript에서 JavaScript 파일 import

이 프로젝트는 TypeScript와 JavaScript 파일을 혼용하여 사용합니다. TypeScript 파일에서 JavaScript 파일을 import할 때는 다음을 주의하세요:

1. **확장자 명시**: import 경로에 `.js` 확장자를 반드시 추가해야 합니다.
   ```typescript
   // ✅ 올바른 예
   import Button from './components/button.js';
   
   // ❌ 잘못된 예
   import Button from './components/button';
   ```

2. **TypeScript 설정**: `tsconfig.app.json`에 다음 옵션이 설정되어 있습니다:
   - `allowJs: true` - JavaScript 파일 import 허용
   - `checkJs: false` - JavaScript 파일의 타입 체크 비활성화

## 📚 학습 내용

- React 컴포넌트 생성 및 사용
- Props를 통한 컴포넌트 사용자화
- 컴포넌트 조합 및 중첩
- 조건부 렌더링
- 이미지 및 정적 자산 관리

## 📖 참고 자료

- [React 공식 문서](https://react.dev)
- [TypeScript 공식 문서](https://www.typescriptlang.org)
- [Vite 공식 문서](https://vite.dev)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
