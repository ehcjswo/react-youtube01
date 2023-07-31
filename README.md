## react.js, youtube api를 사용한 사이트 만들기

<img src="https://raw.githubusercontent.com/ehcjswo/react-youtube01/main/src/assets/images/gitImg01.jpg" />
<br><br>
 
react로 youtube API를 활용해 제작한 유튜브 API 입니다. 
useState와 useEffect, useParams를 사용하여 유튜브 API 데이터와 서치 기능을 구현하였습니다.
<br><br>

- Live Demo : https://react-youtube01.netlify.app/

## 사용 스택 
- React: JavaScript 기반의 프론트엔드 라이브러리로, 사용자 인터페이스를 구축하기 위해 사용됩니다.
- react-router-dom: React 애플리케이션에서 클라이언트 사이드 라우팅을 구현하기 위한 라이브러리입니다. , , 그리고 와 같은 컴포넌트들을 사용하여 각 URL 경로에 해당하는 컴포넌트들을 렌더링합니다.
- useEffect: 컴포넌트 렌더링과 관련하여 부수효과를 처리하기 위해 사용되는 Hook으로, API 호출 등의 비동기 작업을 수행합니다.
- useState: 컴포넌트의 상태를 관리하기 위해 사용되는 Hook으로, selectCategory와 videos 상태를 관리합니다.
- useNavigate: React Router의 Hook으로, 프로그래밍적으로 라우팅을 처리하기 위해 사용됩니다. 검색 결과 페이지로 이동하는데 사용됩니다.
- useParams: React Router의 Hook으로, 현재 URL의 파라미터 값을 추출하는데 사용됩니다.
- fetch: 비동기적으로 YouTube API를 호출하여 검색 결과를 가져옵니다.
- onKeyPress: 키보드 이벤트를 처리하는 함수로, 검색어를 입력한 후 엔터 키를 누르면 검색 기능을 수행합니다.
- 아이콘 라이브러리 : react-icons에서 제공하는 아이콘으로 npm i react-icons로 설치 후, import로 연동할 수 있습니다. (https://react-icons.github.io/react-icons/)
<br><br>

## 구현 내역

- 채널 카테고리
- 서치 기능
- 영상 정보
<br>
