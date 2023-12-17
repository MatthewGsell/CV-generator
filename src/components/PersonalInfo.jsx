import "./styles/PersonalInfo.css";
function PersonalInfo({
  updateFirst,
  updateLast,
  updateProfession,
  updateBiography,
}) {
  return (
    <div id="personalinfo" className="mainbubble">
      <div id="infolabel">Personal Info:</div>
      <div id="infoinputs">
        <div id="nameinputs">
          <input
            type="text"
            id="firstname"
            onChange={updateFirst}
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastname"
            onChange={updateLast}
            placeholder="Last Name"
          />
        </div>
        <input
          type="text"
          id="profession"
          onChange={updateProfession}
          placeholder="Current Profession"
        />
        <textarea
          name="text"
          rows="14"
          cols="10"
          wrap="soft"
          id="biography"
          placeholder="Tell us some skills or personal insight that makes you stand out from other candidates"
          onChange={updateBiography}
        ></textarea>
      </div>
    </div>
  );
}

export default PersonalInfo;
