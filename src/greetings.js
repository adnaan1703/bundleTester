import {toUpper} from "./make_me_cap";

export function sayHello(name) {
    const x = 1;
    return "Jarvis says Hello " + name;
}

export const sayBye = (name) => {
    return toUpper(`Jarvis says Bye ${name}`);
};