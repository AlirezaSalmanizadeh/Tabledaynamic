import React , {useState,useEffect,math} from "react";
import './table.css'
import { TdTable } from "../tdtable/tdtable";
import { ThTable } from "../thtable/thtable";
import { Pageination } from "../pageination/pageination";
import image3 from './../../aset/image/add-svgrepo-com.svg'
import { useDispatch} from "react-redux";
import {addtdtable } from "../../store/slices/slices";




export function Table(){
  
  const dispatch=useDispatch();
  const [data,setdata]=useState();
  let dataTh=(item)=>{
    setdata(item);
  }

  const addtdhandler=(item)=>{
    dispatch( addtdtable(item))
}

return(

    <div className="DivTable">
      <div className="T1">
      <h1 className='TitleH1'> Table Data</h1>
      </div>
      
            
      <table className="Table">
        <thead className="TheadTable">
          <ThTable call={dataTh}/>
        </thead>
        <tbody className="TbodyTable">
            <TdTable cols={data} />
          </tbody>
      </table>
      <Pageination/>
      <div className="Imgparent">
        <img src={image3} alt="Add" className="ImgAdd" onClick={()=>addtdhandler()} />
      </div>
      
        
    </div>

)


}