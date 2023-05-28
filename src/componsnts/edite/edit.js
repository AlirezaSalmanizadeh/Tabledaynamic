import React,{ useState,useRef,useEffect} from "react";
import './edit.css'
import { useDispatch } from "react-redux";
import {edittext,edittable} from './../../store/slices/slices'


export function EditTableText({date}){




    
    const ref = useRef()
  
    useEffect(() => {
      const checkClickOutside = e => {
      
        if (ref.current && !ref.current.contains(e.target)) {
            dispatch(edittable(date[0].row))
        }
      }
  
      document.addEventListener("mousedown", checkClickOutside)
  
      return () => {
       
        document.removeEventListener("mousedown", checkClickOutside)
      }
    }, [])



    

    const [state,setstate]=useState({row:date[0].row,name:date[0].name,quantitiy:date[0].quantitiy,done:false,delete:false});

    const dispatch=useDispatch();


    const edittexthandlerclose=(item)=>{
        dispatch(edittable(item))
    }
    const edittexthandler=(item)=>{
        dispatch(edittext(item))
    }

    const textchang=(item)=>{
        setstate({...state,name:item.target.value})
    }
    const textchang2=(item)=>{
        setstate({...state,quantitiy:item.target.value})
    }

    return(
        <div className="Form" id="Form" >
            <div className="DivForm" ref={ref} >
                <h1>Edit Column {date[0].row} at Table </h1>
            <div className="Name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={(item)=>textchang(item)}  value={state.name} required />
            </div>
            <div className="Quantitiy">
                <label htmlFor="quantitiy">Quantitiy</label>
                <input type="number" name="quantitiy" onChange={(item)=>textchang2(item)} value={state.quantitiy}  required/>
                </div>
                <button type="submit" className="BtnSubmit" onClick={()=>edittexthandler(state) } >Edit</button>
                <button type="submit" className="BtnSubmitClose" onClick={()=>edittexthandlerclose(date[0].row) } >Close</button>
                </div>
        </div>
    )

}


