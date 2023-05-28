import React,{useEffect, useState} from "react";
import { useSelector,useDispatch } from "react-redux";

export function ThTable(props){

    const cols=useSelector(state=>state.Table.dragOver)
    const [colt, setColt] = useState(cols);
    
   
    const handleDragStart = e => {
        const { id } = e.target;
        const idx = colt.indexOf(id);
        e.dataTransfer.setData("colIdx", idx);
      };
    
      const handleDragOver = e => e.preventDefault();
      const handleDragEnter = e => {
        const { id } = e.target;

      };
    
      const handleOnDrop = e => {
        const { id } = e.target;
        const droppedColIdx = colt.indexOf(id);
        const draggedColIdx = e.dataTransfer.getData("colIdx");
        const tempCols = [...colt];
    
        tempCols[draggedColIdx] = colt[droppedColIdx];
        tempCols[droppedColIdx] = colt[draggedColIdx];
        setColt(tempCols);
      };

      useEffect(()=>{
        props.call(colt);
      },[colt,props]);

    return(
        <>
            <tr>
            {colt.map(col =>
                 <th  id={col} key={col} draggable onDragStart={(e)=>handleDragStart(e)} onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleOnDrop(e)} onDragEnter={(e)=>handleDragEnter(e)}>{col}</th>
            )}
              <th></th> 
            
            </tr>
        
        </>
    )



}