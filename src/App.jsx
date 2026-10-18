import { useState } from 'react'
import StartPage from './components/StartPage/StartPage.jsx'
// import InstructionsPage from './components/InstructionsPage/InstructionsPage.jsx'
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
      // <SelectionPage />
      <TothanPage />
     )}
    </>
  )
}

export default App




