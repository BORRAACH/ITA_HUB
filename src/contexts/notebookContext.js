import { jsx as _jsx } from "react/jsx-runtime";
import React, { useContext, useState } from "react";
const NotebookContext = React.createContext(undefined);
export const NotebookProvider = ({ children }) => {
    const [notebookData, setNotebookData] = useState({
        physic: '',
        math: '',
        chemstry: '',
        portuguese: '',
        english: ''
    });
    const updateNotebookData = (data) => {
        setNotebookData(data);
    };
    return (_jsx(NotebookContext.Provider, { value: { notebookData, updateNotebookData }, children: children }));
};
export const useNotebook = () => {
    const context = useContext(NotebookContext);
    if (context === undefined) {
        throw new Error("useNotebook must be used within a NoteboookProvider");
    }
    return context;
};
export default NotebookContext;
