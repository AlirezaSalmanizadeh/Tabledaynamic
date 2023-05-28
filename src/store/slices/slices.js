import { createSlice } from "@reduxjs/toolkit";
import { Pageination } from "../../componsnts/pageination/pageination";

const  initialState={ 
    list:[
        
     ],
     dragOver:['id','name','quantitiy'],
     list2:[],
     list3:[
        {username:"admin",password:"admin"}
     ],
     login:false
}


const Slice=createSlice({
    name:'table',
    initialState,
    reducers:{

        

        deletetable:(state , actions)=>{
            state.list=state.list.map(state=>state.map((item)=>{
                return item.id===actions.payload
                ?{...item,delete:!item.delete}
                :{...item}
            }))
          
        
        },

        deletetdtable:(state,actions)=>{
            state.list2=state.list2.map(state=>state.filter((item)=>item.id !== actions.payload));
            state.list2.map((item)=>item.map(state=>{
                return actions.payload>state.id
                ?{...state}
                :state.id=state.id-1
            }))           
              state.list2.map(item=>console.log(item))
           
                state.list=state.list.map(state=>state.filter((item)=>item.id !== actions.payload))
              
                 state.list.map((item)=>item.map(state=>{
                     return actions.payload>state.id
                     ?{...state}
                     :state.id=state.id-1
                 }))           
                
        },

        edittable:(state,actions)=>{
        state.list=state.list.map(state=>state.map((item)=>{
            return item.id===actions.payload
            ?{...item,done:!item.done}
            :{...item}
        }))
        },
        edittext:(state,actions)=>{
            state.list2=state.list2.map(state=>state.map((item)=>{
                return item.id === actions.payload.id
                ?{
                    ...item,
                    id:actions.payload.id,
                    name:actions.payload.name,
                    quantitiy:actions.payload.quantitiy,
                    done:false,
                    
                }
                :{...item}

        }));
            
        state.list=state.list.map(state=>state.map((item)=>{
            return item.id === actions.payload.id
            ?{
                ...item,
                id:actions.payload.id,
                name:actions.payload.name,
                quantitiy:actions.payload.quantitiy,
                done:false,
                
            }
            :{...item}
        }));
        },

        addtexttd:(state,actions)=>{
            state.list2=state.list2.map(state=>state.map((item)=>{
                return item.id >= actions.payload.id
                ?{
                    ...item,
                    id:item.id+1
                }   
                :{...item,add:false}
            }));
            
            const count2=actions.payload.id;
            actions.payload.id=actions.payload.id+1;
            
           state.list2.map(item=>item.splice(count2,0,actions.payload))
             state.list2.map(item=>console.log(item))

           actions.payload.id=actions.payload.id-1;
            state.list=state.list.map(state=>state.map((item)=>{
                return item.id > actions.payload.id
                ?{
                    ...item,
                    id:item.id+1
                }   
                :{...item,add:false}
            }));
            
            const count=actions.payload.id;

            actions.payload.id=actions.payload.id+1;
            
           state.list.map(item=>item.splice(count,0,actions.payload))

            state.list2.map((item)=>console.log(item));

        },
        addtdtable:(state,actions)=>{
            state.list=state.list.map(state=>state.map((item)=>{
                return item.id===actions.payload
                ?{...item,add:!item.add}
                :{...item}
            }))

            
        
         
        },
        getdata:(state,actions)=>{
            state.list=[
                

            ]
            state.list=[
                actions.payload

            ]
        },
        getsavedata:(state,actions)=>{
                    state.list2=[
                        actions.payload
                    ]
        },

        loginpage:(state,actions)=>{
            console.log(actions.payload[0])
                state.list3.map(item=>
                    item.username===actions.payload[0] && item.password===actions.payload[1]
                        ?state.login=true
                        :null
                    )
        }

    }
});


export const{deletetable,edittable,edittext, addtdtable , addtexttd, setdragover,deletetdtable, getdata,getsavedata,loginpage}=Slice.actions;

export default Slice.reducer;