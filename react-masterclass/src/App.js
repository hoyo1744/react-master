
import styled, {keyframes} from "styled-components";

//2-4 animation 추가
// keyframes를 추가해줘야 애니메이션을 사용할 수 있음.
const Wrapper = styled.div`
    display: flex;    
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


// span {
//
//   }
// Box안에서 위와 같이 선언해주면 Box안에 존재하는 span을 가리킴
// 그래서 span이라는 styled-component가 아니더라도 Box에서 style을 줄수있다.

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${animation} 1s linear infinite;
  // Box안의 span까지 style을 Box에서 줄 수 있다.
  span {
    font-size: 36px;
    //아래의 코드는 span: hover{}과 같은 코드임., &은 span을 호명하는것과 같다.
    &:hover{
        font-size: 60px;
      
    }
  }
  //span:hover {
  //
  //}
      
  
}
  
`;
function App() {
  return (
      <Wrapper>
        <Box>
        <span>😍</span>
        </Box>
      </Wrapper>
  )

}

export default App;
