import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
      
    //   <h1 className="text-4xl font-bold text-green-600">
    //     Tailwind v4 fixed 🎉
    //   </h1>
    // </>
    <Home />
  )
}

export default App
