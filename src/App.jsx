import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo' 
import './components/PersonalInfo.css'
import WorkExperience from './components/WorkExperience'
import WorkPiece from './components/WorkPiece'
import './components/WorkExperience.css'
function App() {
  //state variables and functions for personal info component
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [profession, setProfession] = useState('')
  const [biography, setBiography] = useState('')

  function updateFirst(event) {
      setFirstName(event.target.value)
      
  }
  function updateLast(event) {
      setLastName(event.target.value)
  }
  function updateProfession(event) {
      setProfession(event.target.value)
  }
  function updateBiography(event) {
      setBiography(event.target.value)
  }
  //state variables and functions for work experience component
  const [integer, setInteger] = useState(-1)
  const [workdataarray, setWorkDataArray] = useState([])
  const [workpiecearray, setWorkPieceArray] = useState([<WorkPiece setworkdataarray={setWorkDataArray} workdataarray={workdataarray} integer={integer} setInteger={setInteger}/>])
  function sendtoworkpiecearray () {
    setWorkPieceArray([...workpiecearray, <WorkPiece setworkdataarray={setWorkDataArray} workdataarray={workdataarray} integer={integer} setInteger={setInteger}/>])
    if (workpiecearray.length === 1) {
      let button = document.querySelector('#deleteworkbutton')
      button.classList.remove('hidden')
      button.disabled = false
    }
  }
  function deletefromworkarrays() {
    if (workdataarray.length > 1) {
    const newarray = workpiecearray.filter((item, index) => {
      if (index != workpiecearray.length - 1) {
        return item
      }
    })
    const newdataarray = workdataarray.filter((item, index) => {
      if (index != workdataarray.length - 1) {
        return item
      }
    }) 
    setWorkPieceArray(newarray)
    setWorkDataArray(newdataarray)

  }
  }
  
  console.log(workdataarray)
  console.log(integer)

  return (
    <>
    <PersonalInfo updateFirst={updateFirst} updateLast={updateLast} updateProfession={updateProfession} updateBiography={updateBiography}/>
    <div>{biography}</div>
    <WorkExperience workpiecearray={workpiecearray} sendtoworkpicearray={sendtoworkpiecearray} deletefromworkarrays={deletefromworkarrays}/>
    <div>{workdataarray.length}</div>
    
    </>
  )
}

export default App
