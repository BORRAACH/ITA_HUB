import "./notebook.css"

interface note {
  time: {
    course: {
      math: number,
      physic: number,
      chemstry: number,
      english: number,
      portuguese: number
    },
  },
  date: Date
}

const notes: Array<note> = [
  { time: { course: { math: 1, physic: 2, chemstry: 1, english: 0, portuguese: 0 } }, date: new Date('10-10-2025') },
  { time: { course: { math: 1, physic: 2, chemstry: 1, english: 0, portuguese: 0 } }, date: new Date('10-10-2025') },
  { time: { course: { math: 1, physic: 2, chemstry: 1, english: 0, portuguese: 0 } }, date: new Date('10-10-2025') }


]

export default function Notebook() {
  return (
    <div className="text-neutral-200">
      <table className="table-auto">
        <thead className="">
          <tr className="py-10">
            <th>Math</th>
            <th>Physics</th>
            <th>Chemstry</th>
            <th>English</th>
            <th>Portuguese</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((item, key) => {
            return (
              <tr key={key} className="">
                <td>{item.time.course.math}h</td>
                <td>{item.time.course.physic}h</td>
                <td>{item.time.course.chemstry}h</td>
                <td>{item.time.course.english}h</td>
                <td>{item.time.course.portuguese}h</td>
                <td>{item.date.getFullYear()}</td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}
