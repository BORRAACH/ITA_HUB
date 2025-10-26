import { jsx as _jsx } from "react/jsx-runtime";
import Clock from "../components/time/clockElem.tsx";
import { motion } from "framer-motion";
export default function Time() {
    return (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsx(Clock, {}) }));
}
