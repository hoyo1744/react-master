
import styled, {keyframes} from "styled-components";

// 2-7
// theme 은 기본적으로 모든 색상을 가지고 있는 Object를 의미함.
// color: ${props => props.theme.textColor};
// index.js에서 ThemeProvider에서 지정한 Theme값을 하위 컴포넌트에서 가져와 사용할 수 있다.

const Title = styled.h1`
    color: ${props => props.theme.textColor};
    
`;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.backgroundColor};
`;




function App() {
  return (
      <Wrapper>
        <Title>Hello</Title>
      </Wrapper>
  )

}

export default App;
