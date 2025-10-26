import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
export default function GraphOfIncome() {
    return (_jsxs(AreaChart, { style: { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }, responsive: true, data: data, margin: {
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
        }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, { width: "auto" }), _jsx(Tooltip, {}), _jsx(Area, { type: "monotone", dataKey: "uv", stackId: "1", stroke: "#8884d8", fill: "#8884d8" }), _jsx(Area, { type: "monotone", dataKey: "pv", stackId: "1", stroke: "#82ca9d", fill: "#82ca9d" }), _jsx(Area, { type: "monotone", dataKey: "amt", stackId: "1", stroke: "#ffc658", fill: "#ffc658" })] }));
}
