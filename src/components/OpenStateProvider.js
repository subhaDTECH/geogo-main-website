// OpenStateProvider.js
import React, { createContext, useContext, useState } from "react"

// Create a context for managing the open state
const OpenStateContext = createContext()

// Create a provider component
export const OpenStateProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <OpenStateContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenStateContext.Provider>
  )
}

// Custom hook to use the open state and setOpen function
export const useOpenState = () => {
  const context = useContext(OpenStateContext)
  if (!context) {
    throw new Error("useOpenState must be used within an OpenStateProvider")
  }
  return context
}
