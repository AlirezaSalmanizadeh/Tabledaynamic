import React from 'react';
import './App.css'
import {Table} from './componsnts/table/table'
import {useSelector } from "react-redux";
import {EditTableText} from './componsnts/edite/edit'
import {AddTableText } from './componsnts/add/add';
import {DeleteRowTable} from './componsnts/delete/delete'
import {LoginPage} from "./componsnts/loginpage/login"

 
function App() {
    let add= useSelector(state=>{return state.Table.add});
    let value=useSelector(state=>{return state.Table.list});
    value=value.flat();
    const vlidationedit=value.filter((item)=>item.done==true)
    const vlidationdelete=value.filter((item)=>item.delete==true )
    let login=useSelector(state=>state.Table.login);


    return ( 
        <>
            {login==false
                ?<LoginPage/>
                : <Table/>
            
            }
           
            {vlidationedit.length>0
                ?<EditTableText date={vlidationedit}/> 
                :null  
            }
            {add==true
                ?<AddTableText date={value[0]}/> 
                :null  
            }
             {vlidationdelete.length>0
                ?<DeleteRowTable date={vlidationdelete}/> 
                :null  
            }
</>
      
    );
}

export default App;