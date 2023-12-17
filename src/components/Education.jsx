function Education({
  educationpiecearray,
  sendtoeducationpiecearray,
  deletefromeducationarray,
}) {
  return (
    <div id="education" className="mainbubble">
      <div id="educationlabel">Education: </div>
      {educationpiecearray}
      <div id="buttondiv2">
        <button id="addeducationbutton" onClick={sendtoeducationpiecearray}>
          +
        </button>
        <button
          id="deleteeducationbutton"
          type="button"
          className="hidden"
          onClick={deletefromeducationarray}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Education;
