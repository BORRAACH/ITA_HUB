import { AnimatePresence, motion } from "framer-motion"
import { Link, Outlet, useLocation } from "react-router-dom";
import { NotebookProvider } from "@/contexts/notebookContext";

interface link {
  path: string,
  name: string
}

const linksDashboard: Array<link> = [
  { path: '/dashboard', name: 'notebook' },
  { path: '/dashboard/study-performance', name: 'performance' }
]

export default function Layout() {
  const location = useLocation()

  return (
    <motion.div>
      <div className="grid grid-rows-10 mt-5 gap-5 grid-cols-[12rem_1fr_1fr_1fr_1fr] p-10 justify-center py-[1rem] min-h-[100vh]">
        <div className='text-neutral-100 border-1 border-neutral-950 flex flex-col rounded-md col-span-1 row-span-9'>
          {
            linksDashboard.map((item, key) => {
              return (<Link to={item.path} key={key} className='hover:bg-neutral-900 active:bg-neutral-950 hover:scale-105 active:scale-99 py-[1rem] px-8 transition-all rounded-md'>
                {item.name}
              </Link>)
            })
          }
        </div>
        <div className="row-span-9 col-start-2 col-end-6 border-1 border-neutral-950 p-2 rounded-md ">
          <AnimatePresence mode='wait'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={location.pathname}
            >
              <NotebookProvider>
                <Outlet />
              </NotebookProvider>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
