import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Time from "./time";
import "./clockElem.css";
export default function Clock() {
    const time = new Time('10-5-2026');
    return (_jsx("div", { className: 'absolute top-30 left-60 p-[3rem]', children: _jsxs("div", { className: 'text-neutral-400 font-extrabold text-4xl flex justify-center gap-15 py-[5rem]', children: [_jsxs("h1", { className: "time", children: [_jsx("span", { className: "time-number", children: time.getYears().floor() }), _jsx("span", { className: "time-text", children: "years" })] }), _jsxs("h1", { className: "time", children: [_jsx("span", { className: "time-number", children: time.getMonths().floor() }), _jsx("span", { className: "time-text", children: "months" })] }), _jsxs("h1", { className: "time", children: [_jsx("span", { className: "time-number", children: time.getDays().floor() }), _jsx("span", { className: "time-text", children: "days" })] }), _jsxs("h1", { className: "time", children: [_jsx("span", { className: "time-number", children: time.getHours().floor() }), _jsx("span", { className: "time-text", children: "hours" })] })] }) }));
}
