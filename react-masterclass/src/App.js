
import styled, {keyframes} from "styled-components";

// 2-5 style-component안에서 내부에서 특정 태그에 의존하고 싶지 않다면?
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
    
  }
`;



const Emoji = styled.span`
    font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${animation} 1s linear infinite;
  // Box안의 span까지 style을 Box에서 줄 수 있다. 다만 span이 아니라면? 지금 Box는 span에 의존하고 있다.
  //  그럼 어떻게해야할까? html 태그가 아니라 style-component를 의존하면 되지 않을까?
  //  아래처럼하면 Emoji에 의존하니까 html 태그가 변경되어도 상관없다.
  ${Emoji} {
    &:hover{
        font-size: 98px;
    }
  }
}
  
`;
function App() {
  return (
      <Wrapper>
        <Box>
            <Emoji>😍</Emoji>
        </Box>
        <Emoji>💖</Emoji>
      </Wrapper>
  )

}

export default App;
