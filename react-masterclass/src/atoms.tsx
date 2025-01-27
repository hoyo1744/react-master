import {atom, selector} from "recoil";

export const minuteState = atom({
    key:"minutes",
    default: 0,
});

export const hourSelect = selector<number>({
    key:"hours",
    get:({get}) => {
        const minutes = get(minuteState);
        return minutes / 60;
    },
    set:({set}, newValue) => {
        // console.log(newValue);
        // string to number
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
    }
})
