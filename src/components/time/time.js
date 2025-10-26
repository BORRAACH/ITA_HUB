class NumberResult {
    value;
    constructor(valuePram) {
        this.value = valuePram;
    }
    getValue() {
        return this.value;
    }
    floor() {
        return Math.floor(this.value);
    }
}
class Time {
    dateOfTest;
    currentDate;
    timeGapInMs;
    constructor(dateOfTestParam) {
        this.dateOfTest = new Date(dateOfTestParam);
        this.currentDate = new Date();
        this.timeGapInMs = this.dateOfTest.getTime() - this.currentDate.getTime();
    }
    getYears() {
        const YEARS_IN_MS = 365 * 24 * 60 * 60 * 1000;
        return new NumberResult(this.timeGapInMs / YEARS_IN_MS);
    }
    getMonths() {
        const MONTHS_IN_MS = 30 * 24 * 60 * 60 * 1000;
        return new NumberResult(this.timeGapInMs / MONTHS_IN_MS);
    }
    getDays() {
        const DAYS_IN_MS = 24 * 60 * 60 * 1000;
        return new NumberResult(this.timeGapInMs / DAYS_IN_MS);
    }
    getHours() {
        const HOURS_IN_MS = 60 * 60 * 1000;
        return new NumberResult(this.timeGapInMs / HOURS_IN_MS);
    }
}
export default Time;
