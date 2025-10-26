export interface NotebookDataType {
    physic: string;
    math: string;
    chemstry: string;
    portuguese: string;
    english: string;
}
export interface NotebookContextType {
    notebookData: NotebookDataType;
    updateNotebookData: (data: NotebookDataType) => void;
}
