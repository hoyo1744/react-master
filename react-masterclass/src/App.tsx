import styled from "styled-components";
import {motion, useMotionValue, useTransform} from "framer-motion"
import {useEffect, useRef} from "react";

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
    //display: grid;
    //grid-template-columns: repeat(2, 1fr);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    hover: {scale: 1.5, rotateZ: 90},
    click: {scale: 1, borderRadius: "100px"},
    drag:{
        backgroundColor: "rgb(46, 204, 113)",
        transition: {
            duration: 10,
        }

    }
}

const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 40px;
    display: flex; 
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

function App() {

    const biggerBoxRef = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const potato = useTransform(x, [-800, 0, 800], [2,1 ,0.1])
    useEffect(() => {
        potato.onChange( () => console.log(potato.get()))
    }, [x])

    return (
        <Wrapper>
            {/*<BiggerBox ref={biggerBoxRef}>*/}
            {/*varients는 기본적으로 자식들에게 기본적으로 제공됨. 마치 상속처럼*/}
            {/*그래서 자식컴포넌트들은 initial과 animate에 기본값으로 부모값이 드렁감.*/}
            {/*<button onClick={() => x.set(200)}>click me</button>*/}
            {/*즉, Box의 애니메이션이 기본적으로 CIrcle에도 적용될것임. 기본값으로 !*/}
            <Box
                style={{x, scale: potato}}
                drag="x"
                dragSnapToOrigin
                // drag
                // dragConstraints={biggerBoxRef}
                // dragSnapToOrigin
                // dragElastic={0}
                // variants={boxVariants}
                // whileHover="hover"
                // whileDrag="drag"
                // whileTap="click"
            >

            </Box>
            {/*</BiggerBox>*/}
        </Wrapper>
    );
}

export default App;