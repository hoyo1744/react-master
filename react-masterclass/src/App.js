
import styled from "styled-components";

// 2-1
// `` 내부에 css 코드를 넣어준다.
//  return <Father> 이렇게 적용한다. 더 간편하군?
// styled.<html 태그>`css 코드`

// 2-2
// 중복된 코드를 제거하고 확장 가능한 styled-component 사용방법
const Father = styled.div`
  display: flex;
`;

// 컴포넌트도 props를 사용할 수 있다!
// props는 데이터를 전송하는 방법!
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box의 속성은 모두 들고와서 추가해준다. 마치 상속처럼!
const Circle = styled(Box)`
  border-radius: 50px;
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
    <Box bgColor="teal"/>
    <Circle bgColor="whitesmoke"/>
  </Father>
}

export default App;
