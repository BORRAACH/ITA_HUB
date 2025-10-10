import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Time from "../routes/Time.tsx";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./Dashboard.tsx";

export default function Root() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path={'/'} element={<Time />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  )
}
