import React from 'react'
import { render } from 'react-dom'
// 웹팩이 번들에 두 라이브러리를 추가하도록 html이 아닌 js에서 임포트

import Menu from './components/Menu'
// 메뉴 컴포넌트
import data from '../data/recipes'
// 예제 데이터 배열

window.React = React
// window.React 프로퍼티 값을 React로 만들면 브라우저 전체가 리액트 라이브러리를 볼 수 있다.
// 이렇게 하는 것은 React.createElement가 제대로 작동하게 만들기 위함이다.

render(
    <Menu recipes={data} />,
    document.getElementById("react-container")
)
// 이렇게 단 한번 ReactDOM.render를 호출하면 모든 Menu와 관련 하위 컴포넌트가 마운트되고 렌더링된다.