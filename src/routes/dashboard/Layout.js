import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import { NotebookProvider } from "@/contexts/notebookContext";
const linksDashboard = [
    { path: '/dashboard', name: 'notebook' },
    { path: '/dashboard/study-performance', name: 'performance' }
];
export default function Layout() {
    const location = useLocation();
    return (_jsx(motion.div, { children: _jsxs("div", { className: "grid grid-rows-10 mt-5 gap-5 grid-cols-[12rem_1fr_1fr_1fr_1fr] p-10 justify-center py-[1rem] min-h-[100vh]", children: [_jsx("div", { className: 'text-neutral-100 border-1 border-neutral-950 flex flex-col rounded-md col-span-1 row-span-9', children: linksDashboard.map((item, key) => {
                        return (_jsx(Link, { to: item.path, className: 'hover:bg-neutral-900 active:bg-neutral-950 hover:scale-105 active:scale-99 py-[1rem] px-8 transition-all rounded-md', children: item.name }, key));
                    }) }), _jsx("div", { className: "row-span-9 col-start-2 col-end-6 border-1 border-neutral-950 p-2 rounded-md ", children: _jsx(AnimatePresence, { mode: 'wait', children: _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsx(NotebookProvider, { children: _jsx(Outlet, {}) }) }, location.pathname) }) })] }) }));
}
