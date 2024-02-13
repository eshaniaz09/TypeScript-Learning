import inquirer from "inquirer";
class CountdownTimer {
    intervalId;
    endTime;
    constructor(duration) {
        this.endTime = Date.now() + duration;
        this.intervalId = null;
    }
    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                let currentTime = Date.now();
                let remainingTime = this.endTime - currentTime;
                if (remainingTime <= 0) {
                    console.log("Timer Expired");
                    this.stop();
                }
                else {
                    console.log(`Time remaining: ${this.formatTime(remainingTime)}`);
                }
            }, 1000);
        }
    }
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        else {
            console.log("The Timer is not running.");
        }
    }
    static async getInput() {
        let timerDuration = await inquirer.prompt([
            { name: "hours", type: "number", message: "Enter number of hours" },
            { name: "minutes", type: "number", message: "Enter number of minutes" },
            { name: "seconds", type: "number", message: "Enter number of seconds" }
        ]);
        let seconds = timerDuration.hours * 3600 * 1000 + timerDuration.minutes * 60 * 1000 + timerDuration.seconds * 1000;
        return seconds;
    }
    formatTime(milliseconds) {
        let seconds = Math.floor(milliseconds / 1000) % 60;
        let minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
        let hours = Math.floor(milliseconds / (1000 * 3600)) % 24;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}
async function main() {
    let duration = await CountdownTimer.getInput();
    let timer = new CountdownTimer(duration);
    timer.start();
}
main();
