
function WorkExperience({ workpiecearray, sendtoworkpicearray, deletefromworkarrays }) {
return (
<div id="workexperience" className='mainbubble'>
    <div id="worklabel">Work Experience: </div>
    {workpiecearray}
    <div id="buttondiv"><button id="addworkbutton" onClick={sendtoworkpicearray}>+</button><button id="deleteworkbutton" type="button" className="hidden" onClick={deletefromworkarrays}>X</button></div>
</div>
)

}


export default WorkExperience