import { useState } from "react";
const key0 = crypto.randomUUID();
const key1 = crypto.randomUUID();
const key2 = crypto.randomUUID();
const key3 = crypto.randomUUID();

function EducationPiece({ educationdataarray, seteducationdataarray }) {
  function updateItem() {
    const inputs = document.querySelectorAll(".educationinput");
    const newarray = [...inputs].map((item) => {
      return item.value;
    });
    console.log(newarray);
    seteducationdataarray(newarray);
  }

  const arrofitems = [
    <input
      type="text"
      className="school educationinput"
      placeholder="School or issuing agency"
      key={key0}
      onChange={updateItem}
    />,
    <input
      type="text"
      className="degree educationinput"
      placeholder="Degree or certification"
      key={key1}
      onChange={updateItem}
    />,
    <input
      type="text"
      className="startdate educationinput"
      placeholder="Date of completion"
      key={key2}
      onChange={updateItem}
    />,
    <input
      type="text"
      className="enddateinput educationinput"
      placeholder="Expiration date (leave blank if none)"
      key={key3}
      onChange={updateItem}
    />,
  ];
  seteducationdataarray([...educationdataarray, "", "", "", ""]);
  return arrofitems;
}
export default EducationPiece;
