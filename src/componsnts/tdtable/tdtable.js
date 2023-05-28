import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { ImgBtn } from "../imgbtn/imgbtn";

export function TdTable(props){
  
    let DataTd=useSelector (state=>state.Table.list)
    DataTd=DataTd.flat();
    let dragOverslector=useSelector(item=>item.Table.dragOver);
    const [drag, setColt] = useState(dragOverslector);
  

  useEffect(() => {
    if(props.cols){
       setColt(props.cols)
    }
  }, [props]);


   
   DataTd=DataTd.map(item=>item={row:item.row,name:item.name,quantitiy:item.quantitiy});
 
    return(
        <>
           {DataTd.map(state=>
            <tr>
              {Object.entries(state).map(([k, v], idx) =>(
                 <td key={v} >{state[drag[idx]]}</td>
                ))}
                <td className="Img"><ImgBtn  data={state.row}/></td>
            </tr>
          )}
        </>
    )

}