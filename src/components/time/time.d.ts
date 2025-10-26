declare class NumberResult {
    private value;
    constructor(valuePram: number);
    getValue(): number;
    floor(): number;
}
declare class Time {
    private dateOfTest;
    private currentDate;
    private timeGapInMs;
    constructor(dateOfTestParam: string);
    getYears(): NumberResult;
    getMonths(): NumberResult;
    getDays(): NumberResult;
    getHours(): NumberResult;
}
export default Time;
