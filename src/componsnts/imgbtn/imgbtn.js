import React from "react";
import 'react-confirm-alert/src/react-confirm-alert.css';
import image2 from './../../aset/image/edit-svgrepo-com.svg'
import image1 from './../../aset/image/trash-full-svgrepo-com.svg'

import './imgbtn.css'
import { useDispatch} from "react-redux";
import { deletetable,edittable, addtdtable } from "../../store/slices/slices";



export function ImgBtn({data}){

    const dispatch=useDispatch();
    
    const delethandler=(item)=>{
            console.log(item)
        dispatch(deletetable(item))
    }

    const edithandler=(item)=>{
        dispatch(edittable(item))
    }

    

    return(

        < >
            <img src={image1} alt="Delete" className="ImgDelete" onClick={()=>delethandler(data)} />
            <img src={image2} alt="Edit" className="ImgEdit" onClick={()=>edithandler(data)} />
        </>
    )
}