import React, { useContext, useState } from "react"

interface NotebookDataType {
  physic: string,
  math: string,
  chemstry: string,
  portuguese: string,
  english: string
}

interface NotebookContextType {
  notebookData: NotebookDataType,
  updateNotebookData: (data: NotebookDataType) => void
}

const NotebookContext = React.createContext<NotebookContextType | undefined>(undefined)


export const NotebookProvider = ({ children }: { children: React.ReactNode }) => {

  const [notebookData, setNotebookData] = useState<NotebookDataType>({
    physic: '',
    math: '',
    chemstry: '',
    portuguese: '',
    english: ''
  })

  const updateNotebookData = (data: NotebookDataType) => {
    setNotebookData(data)
  }

  return (
    <NotebookContext.Provider value={{ notebookData, updateNotebookData }} >
      {children}
    </NotebookContext.Provider >
  )
}

export const useNotebook = () => {
  const context = useContext(NotebookContext)

  if (context === undefined) {
    throw new Error("useNotebook must be used within a NoteboookProvider")
  }
  return context
}

export default NotebookContext
