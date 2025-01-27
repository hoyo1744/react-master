import React from "react";
import {hourSelect, minuteState} from "./atoms";
import {useRecoilState, useRecoilValue} from "recoil";


function App() {

    const [minutes, setMinutes] = useRecoilState(minuteState);
    const hours = useRecoilValue(hourSelect);


    const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
        // string to number
        setMinutes(+event.currentTarget.value);
    }

    return (
        <div>
            <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes"/>
            <input value={hours} type="number" placeholder="Hours"/>
        </div>
    );
}


export default App;
