import {decode} from "he";
export const toUpper = (str) => {
    str = str.toUpperCase();
    return decode(`MAKING OF WOW ${str}`);
};