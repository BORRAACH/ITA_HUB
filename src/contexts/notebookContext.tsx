import { createContext, useState, type ReactNode } from 'react'
import type { NotebookContextType, NotebookDataType } from '@/contexts/notebookTypes'

const NotebookContext = createContext<NotebookContextType | undefined>(undefined)

export const NotebookProvider = ({ children }: { children: ReactNode }) => {
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
    <NotebookContext.Provider value={{ notebookData, updateNotebookData }}>
      {children}
    </NotebookContext.Provider>
  )
}

export default NotebookContext
