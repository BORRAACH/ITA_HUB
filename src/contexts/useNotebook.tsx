import { useContext } from 'react'
import NotebookContext from '@/contexts/notebookContext'
import type { NotebookContextType } from '@/contexts/notebookTypes'

export function useNotebook(): NotebookContextType {
  const context = useContext(NotebookContext)

  if (context === undefined) {
    throw new Error('useNotebook must be used within a NoteboookProvider')
  }
  return context
}
