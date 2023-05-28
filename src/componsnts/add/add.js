import React,{useRef,useEffect,useState} from "react";
import './add.css'
import { useDispatch } from "react-redux";
import {addtexttd,addtdtable} from './../../store/slices/slices'


export function AddTableText(){

    const ref = useRef()
  
    useEffect(() => {
      const checkClickOutside = e => {
      
        if (ref.current && !ref.current.contains(e.target)) {
            dispatch(addtdtable())
        }
      }
  
      document.addEventListener("mousedown", checkClickOutside)
  
      return () => {
       
        document.removeEventListener("mousedown", checkClickOutside)
      }
    }, [])








    const [state,setstate]=useState({row:0,name:'',quantitiy:'',done:false,delete:false});
    const dispatch=useDispatch();

    const addtexthandler=(item)=>{
        
        dispatch(addtexttd(item))
    }

    const textchang=(item)=>{
       
        setstate({...state,name:item.target.value})
      
    }
    const textchang2=(item)=>{
       
        setstate({...state,quantitiy:item.target.value})
      
    }

    const addtexthandlerclose=(item)=>{
            dispatch(addtdtable(item))
    }

    return(
        <div className="Form">
            <div className="DivForm" ref={ref}>
                <h1>Add Element To Table</h1>
            <div className="Name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={(item)=>textchang(item)} required />
            </div>
            <div className="Quantitiy">
                <label htmlFor="quantitiy">Quantitiy</label>
                <input type="number" name="quantitiy" onChange={(item)=>textchang2(item)} required />
                </div>
                <button type="submit" className="BtnSubmit" onClick={()=>addtexthandler(state) } >Add</button>
                <button type="submit" className="BtnSubmitClose" onClick={()=>addtexthandlerclose() } >Close</button>
                </div>
        </div>
    )

}