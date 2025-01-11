
import styled from "styled-components";

// `` 내부에 css 코드를 넣어준다.
//  return <Father> 이렇게 적용한다. 더 간편하군?
// styled.<html 태그>`css 코드`
const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

// 2-1
// npm i styled-components
//  return <div style={{display:"flex"}}> 이런 방식은 div가 매우 많고 css를 코드로 적용한거임. 보통은 css 파일을 따로 빼내지.
// 장점은 직관적이다.

// styled components를 사용하면 더 편하다.

function App() {
  return <Father>
    <BoxOne>
      <Text>Hello</Text>
    </BoxOne>
    <BoxTwo/>
  </Father>
}

export default App;
