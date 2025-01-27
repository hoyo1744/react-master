import React from "react";
import {hourSelect, minuteState} from "./atoms";
import {useRecoilState, useRecoilValue} from "recoil";


function App() {

    const [minutes, setMinutes] = useRecoilState(minuteState);
    // state가 아니더라도 selector도 똑같다. 첫번째  인자는 get의 결과, 두번째 함수는 set 함수
    const [hours, setHours] = useRecoilState(hourSelect);


    const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
        // string to number
        setMinutes(+event.currentTarget.value);
    };

    const onHoursChange = (event:React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    };

    return (
        <div>
            <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes"/>
            <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours"/>
        </div>
    );
}


export default App;
