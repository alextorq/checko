class Throttler {
    constructor(timeDelay) {
        this.timeDelay =  timeDelay || 200;
    }
    delay(func) {
        clearTimeout(this.timeId);
        this.timeId = setTimeout(() => {
            func();
        }, this.timeDelay);
    }
}

export default Throttler;