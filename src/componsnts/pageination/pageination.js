import React,{useEffect, useState} from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { getsavedata,getdata,loadset}from './../../store/slices/slices'
import {Message} from "./../message/message"

import "./pageination.css"



export function Pageination(props){


    // تعریف متغیرها
    const dispach=useDispatch();
    const [dataination,setdataination]=useState([]) ;
    const [curentpage,setcurentpage]=useState(1) ;
    let datalist=useSelector(state=>state.Table.list2);
    datalist=datalist.flat();
    // console.log(datalist)
    let eror=useSelector(state=>state.Table.load);
    let list=[];
    let finalIndexes=[];
    let tableRowsPage=20;
    let totalData=datalist.length;
    const pagenumber=[];
    const btnactive='Active';


    // گرفتن داده ها به کمک eventhandler
    const savedata= ()=>{
        if(datalist.length>0){
        axios.put('https://table3-ef050-default-rtdb.asia-southeast1.firebasedatabase.app/list.json',datalist)
        .then (re=>dispach(loadset(3)))
        .catch(er=> dispach(loadset(2)))
      }
      else{
        dispach(loadset(2))
      }
  }
  
  const loaddata= ()=>{

    axios.get('https://table3-ef050-default-rtdb.asia-southeast1.firebasedatabase.app/list.json')
      .then(result=>( Object.entries(result.data).map(([key,val])=>{return getValue(val)})))
      .catch ((er)=>{
        dispach(loadset(1))
      })
  }
   
  const getValue= async (val)=>{
   list=[...list,val];
    setdataination(list)
  }
  

//   ایجاد شماره پیج ها

for (let i = 1; i <= Math.ceil(totalData / tableRowsPage); i++) {
  pagenumber[i]={i};
}
  
//   برای نشان دادن داده های صفحه اول به صورت خودکار
  useEffect(()=>{
    
    dispach(getsavedata(dataination))
    dispach(getdata(dataination.slice(0,20)))
   
  },[dataination])



//   eventhandler یرای نشان دادن داده ها
    const getdatapage=(item)=>{
        let to=0
        let from=0
            setcurentpage(item)
            to=item * tableRowsPage - tableRowsPage;
            from = item * tableRowsPage;
            console.log(datalist)
         dispach(getdata(datalist.slice(to,from)))
    
  }



  //برای حالت های خاص پیج اینیشن

  const screen=()=>{
    switch(curentpage){
    case 1:
        if (curentpage === 1 ) {
            
            finalIndexes = pagenumber.slice(curentpage-1 , curentpage + 3);
            finalIndexes.push(pagenumber[pagenumber.length-1]); 
            finalIndexes.splice(finalIndexes.length - 1, 0, "...");
            return finalIndexes.map(item=>{return <li className={`Page ${curentpage==item.i ?btnactive :null}`}  onClick={()=>item.i!==undefined ?getdatapage(item.i) :getdatapage(curentpage)}>{item.i==undefined ?"..." :item.i}</li>})
       
          }
        break
    case pagenumber[pagenumber.length - 1].i:
        if (curentpage === pagenumber[pagenumber.length - 1].i) {

            finalIndexes = pagenumber.slice(curentpage - 4, curentpage + 1);
            finalIndexes.unshift(pagenumber[1]);
            finalIndexes.splice(1, 0, "...");
            return finalIndexes.map(item=>{return <li className={`Page ${curentpage==item.i ?btnactive :null}`}  onClick={()=>item.i!==undefined ?getdatapage(item.i) :getdatapage(curentpage)}>{item.i==undefined ?"..." :item.i}</li>})
       
          }  
        break
    case pagenumber[2].i:
        if (curentpage === pagenumber[2].i) {
           
            finalIndexes = pagenumber.slice(0, curentpage + 2);
            finalIndexes.push(pagenumber[pagenumber.length-1]);
            finalIndexes.splice(finalIndexes.length - 1, 0, "...");
            return finalIndexes.map(item=>{return <li className={`Page ${curentpage==item.i ?btnactive :null}`}  onClick={()=>item.i!==undefined ?getdatapage(item.i) :getdatapage(curentpage)}>{item.i==undefined ?"..." :item.i}</li>})
       
          }
        break
    case pagenumber[pagenumber.length - 2].i:    
        if (curentpage ===pagenumber[pagenumber.length - 2].i) {
            
          finalIndexes = pagenumber.slice(curentpage - 3, curentpage + 2);
            finalIndexes.unshift(pagenumber[1]);
            finalIndexes.splice(1, 0, "...");
            return finalIndexes.map(item=>{return <li className={`Page ${curentpage==item.i ?btnactive :null}`}  onClick={()=>item.i!==undefined ?getdatapage(item.i) :getdatapage(curentpage)}>{item.i==undefined ?"..." :item.i}</li>})
       
          } 
        break
      default:
      
        finalIndexes = pagenumber.slice(curentpage - 1, curentpage + 2);
        finalIndexes.unshift(pagenumber[1]);
        finalIndexes.push(pagenumber[pagenumber.length-1]);
        finalIndexes.splice(finalIndexes.length - 1, 0, "...");
        finalIndexes.splice(1, 0, "...");
        return finalIndexes.map(item=>{return <li className={`Page ${curentpage==item.i ?btnactive :null}`}  onClick={()=>item.i!==undefined ?getdatapage(item.i) :getdatapage(curentpage)}>{item.i==undefined ?"..." :item.i}</li>})
    
      }


  }


    return(
      <>
        {eror==false
          ?(<section className="FooterTable">
              
          <div className="Pageination">
                
            <ul className="ParentLink">
                        
              {pagenumber<=5
                ?pagenumber.map(item=>{return <li className={`Page ${curentpage==item.i ?btnactive :null}`}  onClick={()=>item.i!==undefined ?getdatapage(item.i) :getdatapage(curentpage)}>{item.i}</li>})
                :screen() 
              } 
            </ul>
                
          </div>

          <div className="SaveLoad" >
            
            <button className='BtnDataSave' onClick={()=>savedata()} >Save Data</button>
            <button className='BtnDataLoad' onClick={()=>loaddata()}>load Data</button>

          </div>

          </section>)
          :<Message/> 
        }
      </>
)

}