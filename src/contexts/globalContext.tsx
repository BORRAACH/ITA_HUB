import { createContext } from 'react'

const globalContext = createContext({
  login: false,
  name: "Eduardo",
  theme: 'dark',
})

export default globalContext
