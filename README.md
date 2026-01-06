# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## GitHub 연동 후 다른 컴퓨터에서 재설정하기

### 1. 저장소 클론하기

```bash
git clone <저장소-URL>
cd my-react-ex01
```

### 2. 의존성 설치하기

```bash
npm install
```

### 3. 개발 서버 실행하기

```bash
npm run dev
```

### 4. 추가 설정 (필요한 경우)

- **환경 변수 설정**: `.env` 파일이 필요한 경우, 프로젝트 루트에 `.env` 파일을 생성하고 필요한 환경 변수를 추가하세요.
- **Git 설정**: 다른 컴퓨터에서 처음 Git을 사용하는 경우, 사용자 정보를 설정하세요:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

### 5. 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## Tailwind CSS 설치 및 설정

이 프로젝트는 Tailwind CSS v3를 사용합니다.

### 설치

의존성 설치 시 Tailwind CSS가 자동으로 설치됩니다:

```bash
npm install
```

### 설정 파일

프로젝트에는 다음 설정 파일이 포함되어 있습니다:

- **`tailwind.config.js`**: Tailwind CSS 설정 파일
- **`postcss.config.js`**: PostCSS 설정 파일 (Tailwind CSS와 Autoprefixer 포함)
- **`src/index.css`**: Tailwind CSS 디렉티브가 포함된 메인 CSS 파일

### 사용 방법

컴포넌트에서 Tailwind CSS 유틸리티 클래스를 직접 사용할 수 있습니다:

```tsx
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
    </div>
  );
}
```

### 새 프로젝트에 Tailwind CSS 추가하기

새로운 프로젝트에 Tailwind CSS를 추가하려면:

1. **패키지 설치**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **설정 파일 생성**:
   ```bash
   npx tailwindcss init -p
   ```

3. **`tailwind.config.js` 설정**:
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **`src/index.css`에 Tailwind 디렉티브 추가**:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

더 자세한 내용은 [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)를 참고하세요.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
