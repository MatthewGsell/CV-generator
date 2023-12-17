import { useState, useRef } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import WorkPiece from "./components/WorkPiece";
import Education from "./components/Education";
import EducationPiece from "./components/EducationPiece";
import Page from "./components/Page";
import Contact from "./components/Contact";

function printpage() {
  print();
}
const key0 = crypto.randomUUID();
const key1 = crypto.randomUUID();
function App() {
  //state variables and functions for personal info component
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [biography, setBiography] = useState("");

  function updateFirst(event) {
    setFirstName(event.target.value);
  }
  function updateLast(event) {
    setLastName(event.target.value);
  }
  function updateProfession(event) {
    setProfession(event.target.value);
  }
  function updateBiography(event) {
    setBiography(event.target.value);
  }
  //state variables and functions for work experience component

  const [workInteger, setWorkInteger] = useState(0);
  const [workdataarray, setWorkDataArray] = useState([]);
  const [workpiecearray, setWorkPieceArray] = useState([
    <WorkPiece
      setworkdataarray={setWorkDataArray}
      workdataarray={workdataarray}
      workInteger={workInteger}
      setWorkInteger={setWorkInteger}
      key={key0}
    />,
  ]);

  function sendtoworkpiecearray() {
    const newkey = crypto.randomUUID();
    setWorkPieceArray([
      ...workpiecearray,
      <WorkPiece
        setworkdataarray={setWorkDataArray}
        workdataarray={workdataarray}
        workInteger={workInteger}
        setWorkInteger={setWorkInteger}
        key={newkey}
      />,
    ]);
    if (workpiecearray.length === 1) {
      let button = document.querySelector("#deleteworkbutton");
      button.classList.remove("hidden");
      button.disabled = false;
    }
  }
  function deletefromworkarrays() {
    if (workpiecearray.length > 1) {
      const newarray = workpiecearray.filter((item, index) => {
        if (index != workpiecearray.length - 1) {
          return item;
        }
      });
      const newdataarray = workdataarray.toSpliced(-5, 5);
      setWorkPieceArray(newarray);
      setWorkDataArray(newdataarray);
    }
  }

  //functions and variables needed for education component
  const [educationdataarray, setEducationDataArray] = useState([]);
  const [educationpiecearray, setEducationPieceArray] = useState([
    <EducationPiece
      educationdataarray={educationdataarray}
      seteducationdataarray={setEducationDataArray}
      key={key1}
    />,
  ]);
  function sendtoeducationpiecearray() {
    let newkey = crypto.randomUUID();
    setEducationPieceArray([
      ...educationpiecearray,
      <EducationPiece
        educationdataarray={educationdataarray}
        seteducationdataarray={setEducationDataArray}
        key={newkey}
      />,
    ]);
    if (educationpiecearray.length === 1) {
      let button = document.querySelector("#deleteeducationbutton");
      button.classList.remove("hidden");
      button.disabled = false;
    }
  }
  function deletefromeducationarray() {
    if (educationpiecearray.length > 1) {
      const newarray = educationpiecearray.filter((item, index) => {
        if (index != educationpiecearray.length - 1) {
          return item;
        }
      });
      const newdataarray = educationdataarray.toSpliced(-4, 4);
      setEducationPieceArray(newarray);
      setEducationDataArray(newdataarray);
    }
  }
  //functions and variables needed for contact component
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  function updatePhone(event) {
    setPhone(event.target.value);
  }
  function updateEmail(event) {
    setEmail(event.target.value);
  }
  function updateWebsite(event) {
    setWebsite(event.target.value);
  }

  return (
    <>
      <div id="mainwrapper">
        <div id="left">
          <PersonalInfo
            updateFirst={updateFirst}
            updateLast={updateLast}
            updateProfession={updateProfession}
            updateBiography={updateBiography}
          />
          <WorkExperience
            workpiecearray={workpiecearray}
            sendtoworkpicearray={sendtoworkpiecearray}
            deletefromworkarrays={deletefromworkarrays}
          />
          <Education
            educationpiecearray={educationpiecearray}
            sendtoeducationpiecearray={sendtoeducationpiecearray}
            deletefromeducationarray={deletefromeducationarray}
          />
          <Contact
            updatePhone={updatePhone}
            updateEmail={updateEmail}
            updateWebsite={updateWebsite}
          />
          <button id="printbutton" onClick={printpage}>
            Print
          </button>
        </div>
        <div id="right">
          <Page
            firstName={firstName}
            lastName={lastName}
            profession={profession}
            biography={biography}
            workdataarray={workdataarray}
            phone={phone}
            email={email}
            website={website}
            educationdataarray={educationdataarray}
          />
        </div>
      </div>
    </>
  );
}

export default App;
