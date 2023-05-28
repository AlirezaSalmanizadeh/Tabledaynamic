import React,{useEffect,useRef,useState} from "react";
import './delete.css'
import { useDispatch } from "react-redux";
import {deletetdtable,deletetable} from './../../store/slices/slices'


export function DeleteRowTable({date}){


    const ref = useRef()
  
    useEffect(() => {
      const checkClickOutside = e => {
      
        if (ref.current && !ref.current.contains(e.target)) {
            dispatch(deletetable(date[0].id))
        }
      }
  
      document.addEventListener("mousedown", checkClickOutside)
  
      return () => {
       
        document.removeEventListener("mousedown", checkClickOutside)
      }
    }, [])











    const dispatch=useDispatch();


    const deletetexthandlerclose=(item)=>{
        dispatch(deletetable(item))
    }
    const deletetexthandler=(item)=>{
      console.log(item)
        
        dispatch(deletetdtable(item))
    }



    return(
        <div className="Form" id="Form" >
            <div className="DivForm" ref={ref}>
                <h1>Delete Column {date[0].id} of Table </h1>
                <p className="text">Are You Sure???</p>
                <button type="submit" className="BtnSubmit" onClick={()=>deletetexthandler(date[0].id) } >Yes</button>
                <button type="submit" className="BtnSubmitClose" onClick={()=>deletetexthandlerclose(date[0].id) } >No</button>
                </div>
        </div>
    )

}