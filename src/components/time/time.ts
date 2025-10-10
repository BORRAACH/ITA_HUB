class NumberResult {
  private value: number;

  constructor(valuePram: number) {
    this.value = valuePram;
  }

  public getValue(): number {
    return this.value;
  }

  public floor(): number {
    return Math.floor(this.value)
  }
}

class Time {
  private dateOfTest: Date;
  private currentDate: Date;
  private timeGapInMs: number;

  constructor(dateOfTestParam: string) {
    this.dateOfTest = new Date(dateOfTestParam);
    this.currentDate = new Date();
    this.timeGapInMs = this.dateOfTest.getTime() - this.currentDate.getTime();
  }

  public getYears(): NumberResult {
    const YEARS_IN_MS = 365 * 24 * 60 * 60 * 1000
    return new NumberResult(this.timeGapInMs / YEARS_IN_MS)
  }

  public getMonths(): NumberResult {
    const MONTHS_IN_MS = 30 * 24 * 60 * 60 * 1000
    return new NumberResult(this.timeGapInMs / MONTHS_IN_MS)
  }

  public getDays(): NumberResult {
    const DAYS_IN_MS = 24 * 60 * 60 * 1000
    return new NumberResult(this.timeGapInMs / DAYS_IN_MS)
  }

  public getHours(): NumberResult {
    const HOURS_IN_MS = 60 * 60 * 1000
    return new NumberResult(this.timeGapInMs / HOURS_IN_MS)
  }
}

export default Time



