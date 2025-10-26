import { NotebookProvider } from "@/contexts/notebookContext"
import AddNewNoteComponent from "@/components/addNewNoteComponent/AddNewNoteComponent"
import axios from "axios"
import { io } from "socket.io-client"
import { useEffect, useState } from "react"
import "./notebook.css"

type NoteValues = {
  physic: string,
  math: string,
  chemstry: string,
  portuguese: string,
  english: string
}

const socket = io("http://localhost:3000")

export default function Notebook() {
  const [responseData, setResponseData] = useState(Array<NoteValues>)

  useEffect(() => {
    socket.on("notesUpdated", (updatedNotes) => {
      setResponseData(updatedNotes)
    })

    const handleNotesUpdated = (updatedNotes: NoteValues[]) => {
      setResponseData(updatedNotes)
    }

    async function fetchNotes() {
      try {
        const response = await axios.get("http://localhost:3000/note/find-all-notes")
        setResponseData(response.data)
        console.log(response)
      }
      catch (error) {
        console.error("Erro ao buscar notas: ", error)
      }
    }

    fetchNotes()

    return () => {
      socket.off("notesUpdated", handleNotesUpdated)
    }
  }, [])





  return (
    <NotebookProvider>
      <AddNewNoteComponent />
      <div className="text-neutral-200 flex justify-center py-10">
        <table className="table-auto border-separete border-spacing-10">
          <thead className="">
            <tr className="gap-10">
              <th>Physics</th>
              <th>Math</th>
              <th>Chemstry</th>
              <th>Portuguese</th>
              <th>English</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>

            {
              responseData.map((item, key) => {
                return (
                  <tr className="group" key={key}>
                    <td >
                      <span className="span-value">{item.physic}</span>
                      <span className="span-hours">h</span>
                    </td>
                    <td>
                      <span className="span-value">{item.math}</span>
                      <span className="span-hours">h</span>
                    </td>
                    <td>
                      <span className="span-value">{item.chemstry}</span>
                      <span className="span-hours">h</span>
                    </td>
                    <td >
                      <span className="span-value">{item.portuguese}</span>
                      <span className="span-hours">h</span>
                    </td>
                    <td>
                      <span className="span-value">{item.english}</span>
                      <span className="span-hours">h</span>
                    </td>
                    <td className=" td-date">{2025}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </NotebookProvider>
  )
}
