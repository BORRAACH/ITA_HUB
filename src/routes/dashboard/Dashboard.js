import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export default function Dashboard() {
    return (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsx("div", { className: 'text-neutral-200' }) }));
}
