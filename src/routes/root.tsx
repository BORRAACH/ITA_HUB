import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Time from "../routes/Time.tsx";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./dashboard/Dashboard";
import Layout from "./dashboard/Layout.tsx";
import Settings from "./dashboard/Settings.tsx";
import Notebook from "./dashboard/Notebook/Notebook";

export default function Root() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path={'/'} element={<Time />} />
        <Route path={'/dashboard'} element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={'settings'} element={<Settings />} />
          <Route path={'notebook'} element={<Notebook />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
