import React from "react";
interface NotebookDataType {
    physic: string;
    math: string;
    chemstry: string;
    portuguese: string;
    english: string;
}
interface NotebookContextType {
    notebookData: NotebookDataType;
    updateNotebookData: (data: NotebookDataType) => void;
}
declare const NotebookContext: React.Context<NotebookContextType | undefined>;
export declare const NotebookProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useNotebook: () => NotebookContextType;
export default NotebookContext;
