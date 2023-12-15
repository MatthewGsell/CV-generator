import { useState } from "react"

function WorkPiece ({ workdataarray, setworkdataarray, integer, setInteger }) 
{
    const [newarray, setNewArray] = useState(['', '', '', '', ''])
    function changestate0(event) {
        const newnewarray = newarray.map((item, index) => {
            if (index === 0) {
                return event.target.value
            }
            else {
                return item
            }
        })
        setNewArray(newnewarray)
   
        
    }
    function changestate1(event) {
        const newnewarray = newarray.map((item, index) => {
            if (index === 1) {
                return event.target.value
            }
            else {
                return item
            }
        })
        setNewArray(newnewarray)
       
        
    }
    function changestate2(event) {
        const newnewarray = newarray.map((item, index) => {
            if (index === 2) {
                return event.target.value
            }
            else {
                return item
            }
        })
        setNewArray(newnewarray)

        
    }
    function changestate3(event) {
        const newnewarray = newarray.map((item, index) => {
            if (index === 3) {
                return event.target.value
            }
            else {
                return item
            }
        })
        setNewArray(newnewarray)
       
        
    }
    function changestate4(event) {
        const newnewarray = newarray.map((item, index) => {
            if (index === 4) {
                return event.target.value
            }
            else {
                return item
            }
        })
        setNewArray(newnewarray)
        
    }

    const arrofitems = [        <input type="text" className="positioninput" onChange={changestate0}/>,
    <input type="text" className="companyinput" onChange={changestate1} />,
    <input type="text" className="startdateinput" onChange={changestate2} />,
    <input type="text" className="enddateinput" onChange={changestate3}/>,
    <textarea name="" className="maintaskstext" cols="14" rows="10" wrap="soft" onChange={changestate4}></textarea>]
    setworkdataarray([...workdataarray, newarray])
    return arrofitems
}
export default WorkPiece