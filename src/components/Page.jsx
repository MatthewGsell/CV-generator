function Page({
  firstName,
  lastName,
  profession,
  biography,
  workdataarray,
  educationdataarray,
  phone,
  email,
  website,
}) {
  const itemsnumber = 5;
  let restruturedarray = [];
  for (let i = 0; i < workdataarray.length; i += itemsnumber) {
    const newarray = workdataarray.slice(i, i + itemsnumber);
    restruturedarray.push(newarray);
  }
  let domarray = restruturedarray.map((item) => {
    const a = crypto.randomUUID();
    return (
      <div key={a}>
        <p className="pone">{item[0]}</p>
        <p>{item[1]}</p>
        <p>{item[2]}</p>
        <p>{item[3]}</p>
        <p>{item[4]}</p>
      </div>
    );
  });
  const educationnumber = 4;
  let restructurededucation = [];
  for (let i = 0; i < educationdataarray.length; i += educationnumber) {
    const newarray = educationdataarray.slice(i, i + educationnumber);
    restructurededucation.push(newarray);
  }
  let educationdom = restructurededucation.map((item) => {
    const a = crypto.randomUUID();
    return (
      <div key={a}>
        <p className="pone">{item[0]}</p>
        <p>{item[1]}</p>
        <p>{item[2]}</p>
        <p>{item[3]}</p>
      </div>
    );
  });

  return (
    <div id="pagecontainer">
      <div id="pagepersonalcontainer">
        <div id="pagenamecontainer">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>
        <div id="currentprofessiontitle">Current Profession</div>
        <div id="pageprofession">{profession}</div>
        <div id="pagebiographytitle">About Me</div>
        <div id="pagebiography">{biography}</div>
      </div>
      <div className="label">Work History:</div>
      <div id="pageworkexperience">{domarray}</div>
      <div className="label">Education History:</div>
      <div id="pageeducation">{educationdom}</div>
      <div className="label">Contact Info:</div>
      <div id="pagecontactinfo">
        <div id="phoneemailcontainer">
          <div>{phone}</div>
          <div>{email}</div>
        </div>
        <div id="websitediv">{website}</div>
      </div>
    </div>
  );
}

export default Page;
