import React , {useState,useEffect,math} from "react";
import './table.css'
import { TdTable } from "../tdtable/tdtable";
import { ThTable } from "../thtable/thtable";
import { Pageination } from "../pageination/pageination";




export function Table(){
  
  const [data,setdata]=useState();
  let dataTh=(item)=>{
    setdata(item);
  }

return(

    <div className="DivTable">
       <h1 className='Title'> Table Data</h1>
            
      <table className="Table">
        <thead className="TheadTable">
          <ThTable call={dataTh}/>
        </thead>
        <tbody className="TbodyTable">
            <TdTable cols={data} />
          </tbody>
      </table>
      
      <Pageination/>
      
        
    </div>

)


}