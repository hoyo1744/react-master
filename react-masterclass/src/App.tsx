
import styled, {keyframes} from "styled-components";
import Circle from "./Circle";


// TypeScript를 사용하는 이유는 코드가 실행되기 전에 오류를 확인하기 위함이다. -> 그래서 PropTypes를 사용하지 않는다.

function App() {
  return (
      <div>
          <Circle borderColor="yellow" bgColor="teal"/>
          <Circle bgColor="tomato"/>
      </div>
  )

}

export default App;
