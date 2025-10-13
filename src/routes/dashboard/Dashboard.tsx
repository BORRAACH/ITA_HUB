import { motion } from 'framer-motion'

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='text-neutral-200'>
        <h1>teste</h1>
      </div>
    </motion.div >
  )
}
