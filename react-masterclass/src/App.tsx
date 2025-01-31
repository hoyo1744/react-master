import styled from "styled-components";
import { motion } from "framer-motion"
import {correctBorderRadius} from "framer-motion/types/projection";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 스타일컴포넌트에 애니메이션을 적용하기 위한 방법
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  text: "tt";
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
    start : {scale:0},
    end : {scale: 1, rotateZ:360, transition: {type:"spring", delay:0.5}}
}

function App() {
    return (
        <Wrapper>
            {/*variants를 적어주면 intiail에서 animate에 적어준걸 찾아서 수행한다.*/}
            <Box variants={myVars} initial="start"
                animate="end"
                // 위 코드와 같은 동작이다.
                // initial={{scale:0}}
                //  animate={{scale: 1, rotateZ: 360}}
                //  transition={{type:"spring", delay: 0.5}}
            />
        </Wrapper>
    );
}

export default App;