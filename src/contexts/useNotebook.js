import { useContext } from 'react';
import NotebookContext from '@/contexts/notebookContext';
export function useNotebook() {
    const context = useContext(NotebookContext);
    if (context === undefined) {
        throw new Error('useNotebook must be used within a NoteboookProvider');
    }
    return context;
}
