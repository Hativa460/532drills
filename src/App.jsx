import { useState } from 'react'
import StartPage from './components/StartPage/StartPage.jsx'
<<<<<<< HEAD
=======
// import InstructionsPage from './components/InstructionsPage/InstructionsPage.jsx'
>>>>>>> cb99bd4bde7644041e7702f9cd931f3a79d5e255
import InstructionsPage from './components/InstructionsPage/InstructionsPage.jsx'
import SelectionPage from './components/SelectionPage/SelectionPage.jsx'
import TothanPage from './components/TothanPage/TothanPage.jsx'
import './App.css'

function App() {
  const [page, setPage] = useState("start")

  // const onSelection = () => {
    // if() {
    //   setPage("Instructions")
    // }
  //   
  // }

  return (
    <>
     {page === "start" && (
      <StartPage onStart={() => setPage("Instructions")} />
     )}
     {page === "Instructions" && (
      <InstructionsPage onReady={() => setPage("selection")} />
     )}
     {page === "selection" && (
<<<<<<< HEAD
      <SelectionPage />
      // <TothanPage />
=======
      // <SelectionPage />
      <TothanPage />
>>>>>>> cb99bd4bde7644041e7702f9cd931f3a79d5e255
     )}
    </>
  )
}

export default App




