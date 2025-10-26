import Clock from "@/components/time/clockElem"
import { motion } from "framer-motion"

export default function Time() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Clock />
    </motion.div>
  )
}
