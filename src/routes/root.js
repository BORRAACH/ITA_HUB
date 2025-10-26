import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "@/components/header/Header";
import Time from "@/routes/Time";
import Layout from "@/routes/dashboard/Layout";
import Notebook from "@/routes/dashboard/notebook/Notebook";
import StudyPerformance from "@/routes/dashboard/StudyPerformance";
export default function Root() {
    const location = useLocation();
    return (_jsxs(AnimatePresence, { children: [_jsx(Header, {}), _jsxs(Routes, { location: location, children: [_jsx(Route, { path: '/', element: _jsx(Time, {}) }), _jsxs(Route, { path: '/dashboard', element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, path: '', element: _jsx(Notebook, {}) }), _jsx(Route, { path: "study-performance", element: _jsx(StudyPerformance, {}) })] })] }, location.pathname)] }));
}
