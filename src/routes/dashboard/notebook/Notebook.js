import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NotebookProvider } from "@/contexts/notebookContext";
import AddNewNoteComponent from "@/components/addNewNoteComponent/AddNewNoteComponent";
import axios from "axios";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import "./notebook.css";
const socket = io("http://localhost:3000");
export default function Notebook() {
    const [responseData, setResponseData] = useState((Array));
    useEffect(() => {
        socket.on("notesUpdated", (updatedNotes) => {
            setResponseData(updatedNotes);
        });
        const handleNotesUpdated = (updatedNotes) => {
            setResponseData(updatedNotes);
        };
        async function fetchNotes() {
            try {
                const response = await axios.get("http://localhost:3000/note/find-all-notes");
                setResponseData(response.data);
                console.log(response);
            }
            catch (error) {
                console.error("Erro ao buscar notas: ", error);
            }
        }
        fetchNotes();
        return () => {
            socket.off("notesUpdated", handleNotesUpdated);
        };
    }, []);
    return (_jsxs(NotebookProvider, { children: [_jsx(AddNewNoteComponent, {}), _jsx("div", { className: "text-neutral-200 flex justify-center py-10", children: _jsxs("table", { className: "table-auto border-separete border-spacing-10", children: [_jsx("thead", { className: "", children: _jsxs("tr", { className: "gap-10", children: [_jsx("th", { children: "Physics" }), _jsx("th", { children: "Math" }), _jsx("th", { children: "Chemstry" }), _jsx("th", { children: "Portuguese" }), _jsx("th", { children: "English" }), _jsx("th", { children: "Date" })] }) }), _jsx("tbody", { children: responseData.map((item, key) => {
                                return (_jsxs("tr", { className: "group", children: [_jsxs("td", { children: [_jsx("span", { className: "span-value", children: item.physic }), _jsx("span", { className: "span-hours", children: "h" })] }), _jsxs("td", { children: [_jsx("span", { className: "span-value", children: item.math }), _jsx("span", { className: "span-hours", children: "h" })] }), _jsxs("td", { children: [_jsx("span", { className: "span-value", children: item.chemstry }), _jsx("span", { className: "span-hours", children: "h" })] }), _jsxs("td", { children: [_jsx("span", { className: "span-value", children: item.portuguese }), _jsx("span", { className: "span-hours", children: "h" })] }), _jsxs("td", { children: [_jsx("span", { className: "span-value", children: item.english }), _jsx("span", { className: "span-hours", children: "h" })] }), _jsx("td", { className: " td-date", children: 2025 })] }, key));
                            }) })] }) })] }));
}
