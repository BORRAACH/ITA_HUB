import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import { FaPlus } from "react-icons/fa6";
import z from 'zod';
import "./AddNewNoteComponent.css";
const hoursSchema = z.object({
    physic: z.string().min(1, "Campo obrigatório"),
    math: z.string().min(1, "Campo obrigatório"),
    chemstry: z.string().min(1, "Campo obrigatório"),
    portuguese: z.string().min(1, "Campo obrigatório"),
    english: z.string().min(1, "Campo obrigatório"),
});
export default function AddNewNoteComponent() {
    const [rotation, setRotation] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [createNewNote, setCreateNewNote] = useState(false);
    const [hoursInput, setHoursInput] = useState({ physic: '', math: '', chemstry: '', portuguese: '', english: '' });
    const cursorPositionRef = useRef({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(hoursSchema),
        defaultValues: {
            physic: '',
            math: '',
            chemstry: '',
            portuguese: '',
            english: ''
        }
    });
    const onSubmit = async (data) => {
        try {
            await axios.post("http://localhost:3000/note", data)
                .then((res) => [
                console.log(res)
            ]);
            reset();
            setCreateNewNote(false);
        }
        catch (error) {
            console.log(error);
        }
    };
    const handleClickButton = () => {
        setRotation(rotation + 90);
        setCreateNewNote(true);
    };
    const handleHoursInputChange = (event) => {
        const { name, value, selectionStart } = event.target;
        const numericValue = value.replace(/hours/g, '').replace(/[^0-9]/g, '');
        cursorPositionRef.current[name] = selectionStart;
        setHoursInput({ ...hoursInput, [name]: numericValue });
    };
    const handleInputValue = (courseParam) => {
        return courseParam ? `${courseParam} hours` : '';
    };
    return (_jsxs("div", { className: "settings-body flex justify-center gap-5 text-neutral-200", children: [_jsxs("button", { className: "group rounded-md bg-neutral-900 p-3 hover:scale-110 active:scale-90 transition-all", type: 'button', onClick: handleClickButton, onMouseLeave: () => setIsHovering(false), onMouseEnter: () => setIsHovering(true), children: [_jsx(FaPlus, { className: "transition-all", style: { transform: `rotate(${rotation}deg)` } }), _jsx(motion.div, { className: "font-custom absolute whitespace-nowrap top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-neutral-950 text-neutral-400 rounded-md", initial: { opacity: 0, y: 10 }, animate: { opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 10 }, exit: { opacity: 0, y: 10 }, transition: { duration: 0.2, delay: 0.4 }, children: "Create a new note" })] }), _jsx("input", { type: "text", placeholder: "search", className: 'input-text' }), _jsx(AnimatePresence, { children: createNewNote && (_jsx(motion.div, { className: 'fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50', initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => setCreateNewNote(false), children: _jsxs(motion.form, { onSubmit: handleSubmit(onSubmit), className: 'bg-neutral-950 p-8 rounded-md shadow-md max-w-xl w-fit', initial: { scale: 0.6, y: -50 }, animate: { scale: 1, y: 0 }, exit: { scale: 0.6, y: -50 }, transition: { duration: 0.4 }, onClick: (e) => e.stopPropagation(), children: [_jsx("h2", { className: 'font-title text-xl select-none mb-4 transition-all hover:scale-105 w-fit block text-neutral-200', children: "Formul\u00E1rio" }), _jsxs("div", { className: '', children: [_jsx("h3", { className: 'select-none hover:scale-101 transition-all', children: "Horas estudadas" }), _jsxs("div", { className: 'flex gap-4 py-2 mt-3 flex-wrap', children: [_jsxs("div", { className: 'input-box', children: [_jsx("label", { className: 'label-input', children: "Physic" }), _jsx("input", { type: 'text', className: 'input-text', placeholder: 'physic', ...register('physic', { required: "Campo obrigatório" }) }), errors.physic && _jsx("span", { className: 'error-input', children: errors.physic.message })] }), _jsxs("div", { className: 'input-box', children: [_jsx("label", { className: 'label-input', children: "Math" }), _jsx("input", { type: 'text', className: 'input-text', placeholder: 'math', ...register('math', { required: "Campo obrigatório" }) }), errors.math && _jsx("span", { className: 'error-input', children: errors.math.message })] }), _jsxs("div", { className: 'input-box', children: [_jsx("label", { className: 'label-input', children: "Chemstry" }), _jsx("input", { type: 'text', className: 'input-text', placeholder: 'chemstry', ...register('chemstry', { required: "Campo obrigatório" }) }), errors.chemstry && _jsx("span", { className: 'error-input', children: errors.chemstry.message })] }), _jsxs("div", { className: 'input-box', children: [_jsx("label", { className: 'label-input', children: "Portuguese" }), _jsx("input", { type: 'text', className: 'input-text', placeholder: 'portuguese', ...register('portuguese', { required: "Campo obrigatório" }) }), errors.portuguese && _jsx("span", { className: 'error-input', children: errors.portuguese.message })] }), _jsxs("div", { className: 'input-box', children: [_jsx("label", { className: 'label-input', children: "English" }), _jsx("input", { type: 'text', className: 'input-text', placeholder: 'english', ...register('english', { required: "Campo obrigatório" }) }), errors.english && _jsx("span", { className: 'error-input', children: errors.english.message })] })] })] }), _jsxs("div", { className: 'flex gap-2', children: [_jsx("button", { type: 'submit', className: 'mt-4 py-2 px-4 bg-neutral-900 hover:bg-blue-500 outline-none focus:bg-blue-500 active:bg-blue-600 transition-all hover:scale-110 focus:scale-110 active:scale-95 text-neutral-200 rounded', children: "Submit" }), _jsx("button", { type: 'button', onClick: () => setCreateNewNote(false), className: 'mt-4 py-2 px-4 bg-neutral-900 hover:bg-red-500 outline-none focus:bg-red-500 active:bg-red-600 transition-all hover:scale-110 focus:scale-110 active:scale-95 text-neutral-200 rounded', children: "Exit" })] })] }, "modal-form") }, "background-modal-form")) })] }));
}
