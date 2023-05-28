import React,{useRef,useEffect} from "react";
import "./message.css"
import { useDispatch,useSelector } from "react-redux";
import {loadset} from './../../store/slices/slices'
import image1 from "./../../aset/image/close-circle-1-svgrepo-com.svg"



export function Message(props){
    const dispatch=useDispatch();
    let dataselectio=useSelector(state=>state.Table.dataselect)

    const ref = useRef()
  
    useEffect(() => {
      const checkClickOutside = e => {
      
        if (ref.current && !ref.current.contains(e.target)) {
            dispatch(loadset());
        }
      }
  
      document.addEventListener("mousedown", checkClickOutside)
  
      return () => {
       
        document.removeEventListener("mousedown", checkClickOutside)
      }
    }, [])

    const closemessage=()=>{
      dispatch(loadset());
    }



    if(dataselectio==1){
      return(

        <div className="Message">

            <div className="TextMessage" ref={ref}>
              <div className="Title">
                <h2>Not Load Data</h2>
                <img src={image1} className="Img" alt="Close" onClick={()=>closemessage()}/>
              </div>
              
              <hr/>
              <p>Please check conection or get data link.</p>
              
            </div>
        </div>

      )
}

if(dataselectio==2){
  return(

    <div className="Message">

        <div className="TextMessage" ref={ref}>
          <div className="Title">
            <h2>Not Save Data</h2>
            <img src={image1} className="Img" alt="Close" onClick={()=>closemessage()}/>
          </div>
          
          <hr/>
          <p>Please check conection or get data link.</p>
          
        </div>
    </div>

  )
}

if(dataselectio==3){
  return(

    <div className="Message">

        <div className="TextMessages" ref={ref}>
          <div className="Title">
            <h2>Save Data sucssesfull</h2>
            <img src={image1} className="Img" alt="Close" onClick={()=>closemessage()}/>
          </div>
          
        </div>
    </div>

  )
}
  

    


}