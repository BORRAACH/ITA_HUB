import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./header.css";
import Links from "./links";
export default function Header() {
    return (_jsx("div", { className: "max-h-[1rem]", children: _jsx("div", { className: "flex items-center justify-center text-white py-2 gap-8", children: Links.map((item, key) => {
                return (_jsxs(Link, { to: item.path, viewTransition: true, className: "relative select-none text-[1.1rem] text-neutral-300 hover:scale-110 active:scale-90 hover:text-neutral-100 active:text-neutral-400 transition-all", children: [" ", item.name] }, key));
            }) }) }));
}
