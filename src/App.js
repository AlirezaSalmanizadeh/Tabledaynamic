import React from 'react';
import './App.css'
import {Table} from './componsnts/table/table'
import {useSelector } from "react-redux";
import {EditTableText} from './componsnts/edite/edit'
import {AddTableText } from './componsnts/add/add';
import {DeleteRowTable} from './componsnts/delete/delete'
import {LoginPage} from "./componsnts/loginpage/login"

 
function App() {

    let value=useSelector(state=>{return state.Table.list});
    value=value.flat();
    const vlidationedit=value.filter((item)=>item.done==true)
    const vlidationadd=value.filter((item)=>item.add==true )
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
            {vlidationadd.length>0
                ?<AddTableText date={vlidationadd}/> 
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