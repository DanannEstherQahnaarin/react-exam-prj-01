# UI 표현하기

> React는 사용자 인터페이스(UI)를 렌더링하기 위한 JavaScript 라이브러리입니다. 
>
> UI는 버튼, 텍스트, 이미지와 같은 작은 요소로 구성됩니다. 
> 
> React를 통해 작은 요소들을 재사용 가능하고 중첩할 수 있는 컴포넌트로 조합할 수 있습니다. 
> 
> 웹 사이트에서 휴대전화 앱에 이르기까지 화면에 있는 모든 것을 컴포넌트로 나눌 수 있습니다. 
> 
> 이 장에서는 React 컴포넌트를 만들고, 사용자화하며, 조건부로 표시하는 방법에 대해서 알아봅시다. 
>

[프로젝트 설정 방법](INSTALL.md)

TypeScript에서 JavaScript 파일을 import할 때는 다음이 필요합니다:
확장자 명시: import 경로에 .js 확장자를 추가 (ex) import Button from './js/button.js'
TypeScript 설정: tsconfig.app.json에 다음 옵션 추가
allowJs: true - JavaScript 파일 import 허용
checkJs: false - JavaScript 파일의 타입 체크 비활성화 (선택사항)