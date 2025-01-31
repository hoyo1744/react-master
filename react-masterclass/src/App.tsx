import styled from "styled-components";
import {motion} from "framer-motion"

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    text: "tt";
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    background-color: white;
    height: 70px;
    width: 70px;
    place-self: center;
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    start: {
        opacity: 0,
        scale: 0.5,


    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.2,
        },

    }
}

const circleVariants = {
    start: {
        opacity: 0,
        y:10
    },
    end: {
        opacity: 1,
        y:0
    }
}

function App() {
    return (
        <Wrapper>
            {/*varients는 기본적으로 자식들에게 기본적으로 제공됨. 마치 상속처럼*/}
            {/*그래서 자식컴포넌트들은 initial과 animate에 기본값으로 부모값이 드렁감.*/}
            {/*즉, Box의 애니메이션이 기본적으로 CIrcle에도 적용될것임. 기본값으로 !*/}
            <Box variants={boxVariants} initial="start" animate="end">
                {/*자식은 variants만 다르고 이니셜과 애니메이트는 동일하게 부모와동일한 이름을 사용하도록 되어있음.*/}
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
            </Box>
        </Wrapper>
    );
}

export default App;