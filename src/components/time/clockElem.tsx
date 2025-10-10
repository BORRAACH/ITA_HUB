import Time from "./time"
import "./clockElem.css"

export default function Clock() {
  const time = new Time('10-5-2026')

  return (
    <div className='absolute top-30 left-60 p-[3rem]'>
      <div className='text-neutral-400 font-extrabold text-4xl flex justify-center gap-15 py-[5rem]'>
        <h1 className="time">
          <span className="time-number">{time.getYears().floor()}</span>
          <span className="time-text">years</span>
        </h1>
        <h1 className="time">
          <span className="time-number">{time.getMonths().floor()}</span>
          <span className="time-text">months</span>
        </h1>
        <h1 className="time">
          <span className="time-number">{time.getDays().floor()}</span>
          <span className="time-text">days</span>
        </h1>
        <h1 className="time">
          <span className="time-number">{time.getHours().floor()}</span>
          <span className="time-text">hours</span>
        </h1>
      </div>
    </div>

  )
}
