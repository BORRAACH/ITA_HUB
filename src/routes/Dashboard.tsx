import { motion } from 'framer-motion'

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='flex justify-center py-[2rem]'>
        <div className='bg-neutral-700 rounded-md p-[15rem]'></div>
      </div>
    </motion.div>
  )
}
