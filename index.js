#! /usr/bin/env node
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
console.log(chalk.yellowBright("Countdown timer (By:m.a.s)"));
function* timer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
let timerIterator = timer(10);
function displaytimer() {
    let result = timerIterator.next();
    if (!result.done) {
        const now = new Date();
        const timer = new Date(now.getTime() + (result).value * 1000);
        const remaining = differenceInSeconds(timer, now);
        console.log(`Remaining seconds:${remaining}`);
        setTimeout(displaytimer, 1000);
    }
    else {
        console.log("Countdown Complete!");
    }
}
displaytimer();
