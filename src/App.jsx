import { useState } from 'react'
import StartPage from './components/StartPage/StartPage.jsx'
import InstructionsPage from './components/InstructionsPage/InstructionsPage.jsx'
import SelectionPage from './components/SelectionPage/SelectionPage.jsx'
import GunnerPage from './components/GunnerPage/GunnerPage.jsx'
import LoaderPage from './components/LoaderPage/LoaderPage.jsx'
import DriverPage from './components/DriverPage/DriverPage.jsx'
import './App.css'

function App() {
  const [page, setPage] = useState("start");
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelection = (role) => {
    setSelectedRole(role);
  };

  if (selectedRole) {
    switch (selectedRole.id) {
      case 'gunner':
        return <GunnerPage />;
      case 'loader':
        return <LoaderPage />;
      case 'driver':
        return <DriverPage />;
      default:
        return null;
    }
  }

  return (
    <>
     {page === "start" && (
      <StartPage onStart={() => setPage("Instructions")} />
     )}
     {page === "Instructions" && (
      <InstructionsPage onReady={() => setPage("selection")} />
     )}
     {page === "selection" && (
      <SelectionPage onSelection={handleSelection}/>
      // <OpenQuestion questionNum={1}/>
     )}
    </>
  )
}

export default App;




