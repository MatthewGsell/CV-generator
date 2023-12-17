import { useState } from "react";
const key0 = crypto.randomUUID();
const key1 = crypto.randomUUID();
const key2 = crypto.randomUUID();
const key3 = crypto.randomUUID();
const key4 = crypto.randomUUID();
function WorkPiece({
  workdataarray,
  setworkdataarray,
  workInteger,
  setWorkInteger,
  changeA,
}) {
  setWorkInteger(workInteger + 1);
  function updateItem() {
    const inputs = document.querySelectorAll(".workinput");
    const newarray = [...inputs].map((item) => {
      return item.value;
    });
    console.log(newarray);
    setworkdataarray(newarray);
  }

  const arrofitems = [
    <input
      type="text"
      className="positioninput workinput"
      placeholder="Position"
      key={key0}
      onChange={updateItem}
    />,
    <input
      type="text"
      className="companyinput workinput"
      placeholder="Company"
      key={key1}
      onChange={updateItem}
    />,
    <input
      type="text"
      className="startdateinput workinput"
      placeholder="Start Date"
      key={key2}
      onChange={updateItem}
    />,
    <input
      type="text"
      className="enddateinput workinput"
      placeholder="End Date"
      key={key3}
      onChange={updateItem}
    />,
    <textarea
      name=""
      className="maintaskstext workinput"
      placeholder="Main duties and responsibilities?"
      cols="14"
      rows="10"
      wrap="soft"
      key={key4}
      onChange={updateItem}
    ></textarea>,
  ];
  setworkdataarray([...workdataarray, "", "", "", "", ""]);

  return arrofitems;
}
export default WorkPiece;
