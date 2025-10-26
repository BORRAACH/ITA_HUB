import React from "react";

const globalContext = React.createContext({
  login: false,
  name: "Eduardo",
  theme: 'dark',
})

export default globalContext
