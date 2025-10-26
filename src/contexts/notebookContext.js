import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
const NotebookContext = createContext(undefined);
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
export default NotebookContext;
