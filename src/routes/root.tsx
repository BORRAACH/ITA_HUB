import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "@/components/header/Header";
import Time from "@/routes/Time";
import Layout from "@/routes/dashboard/Layout";
import Notebook from "@/routes/dashboard/notebook/Notebook";
import StudyPerformance from "@/routes/dashboard/StudyPerformance";

export default function Root() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path={'/'} element={<Time />} />
        <Route path={'/dashboard'} element={<Layout />}>
          <Route index path={''} element={<Notebook />} />
          <Route path="study-performance" element={<StudyPerformance />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
