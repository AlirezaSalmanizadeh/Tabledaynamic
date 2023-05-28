import { createSlice } from "@reduxjs/toolkit";
import { Pageination } from "../../componsnts/pageination/pageination";

const  initialState={ 
    list:[
        
     ],
     dragOver:['row','name','quantitiy'],
     list2:[],
     list3:[
        {username:"admin",password:"admin"}
     ],
     login:false,
     errors:"",
     load:false,
     dataselect:0,
     add:false
}


const Slice=createSlice({
    name:'table',
    initialState,
    reducers:{

        

        deletetable:(state , actions)=>{
            state.list=state.list.map(state=>state.map((item)=>{
                return item.row===actions.payload
                ?{...item,delete:!item.delete}
                :{...item}
            }))
          
        
        },

        deletetdtable:(state,actions)=>{
            state.list2=state.list2.map(state=>state.filter((item)=>item.row !== actions.payload));
            state.list2.map((item)=>item.map(state=>{
                return actions.payload>state.row
                ?{...state}
                :state.row=state.row-1
            }))           
              state.list2.map(item=>console.log(item))
           
                state.list=state.list.map(state=>state.filter((item)=>item.row !== actions.payload))
              
                 state.list.map((item)=>item.map(state=>{
                     return actions.payload>state.row
                     ?{...state}
                     :state.row=state.row-1
                 }))           
                
        },

        edittable:(state,actions)=>{
        state.list=state.list.map(state=>state.map((item)=>{
            return item.row===actions.payload
            ?{...item,done:!item.done}
            :{...item}
        }))
        },
        edittext:(state,actions)=>{
            state.list2=state.list2.map(state=>state.map((item)=>{
                return item.row === actions.payload.row
                ?{
                    ...item,
                    row:actions.payload.row,
                    name:actions.payload.name,
                    quantitiy:actions.payload.quantitiy,
                    done:false,
                    
                }
                :{...item}

        }));
            
        state.list=state.list.map(state=>state.map((item)=>{
            return item.row === actions.payload.row
            ?{
                ...item,
                row:actions.payload.row,
                name:actions.payload.name,
                quantitiy:actions.payload.quantitiy,
                done:false,
                
            }
            :{...item}
        }));
        },

        addtexttd:(state,actions)=>{
        //     state.list2=state.list2.map(state=>state.map((item)=>{
        //         return item.row >= actions.payload.row
        //         ?{
        //             ...item,
        //             row:item.row+1
        //         }   
        //         :{...item,add:false}
        //     }));
            
        //     const count2=actions.payload.row;
        //     actions.payload.row=actions.payload.row+1;
            
        //    state.list2.map(item=>item.splice(count2,0,actions.payload))
        //      state.list2.map(item=>console.log(item))

        //    actions.payload.row=actions.payload.row-1;
        //     state.list=state.list.map(state=>state.map((item)=>{
        //         return item.row > actions.payload.row
        //         ?{
        //             ...item,
        //             row:item.row+1
        //         }   
        //         :{...item,add:false}
        //     }));
            
        //     const count=actions.payload.row;

        //     actions.payload.row=actions.payload.row+1;
            
        //    state.list.map(item=>item.splice(count,0,actions.payload))

        //     state.list2.map((item)=>console.log(item));
            state.list2[0].unshift(actions.payload)
            state.list[0].unshift(actions.payload)
            
            state.list2=state.list2.map(state=>state.map((item)=>{
                return {...item,row:item.row+1}
            }));
            state.list=state.list.map(state=>state.map((item)=>{
                return {...item,row:item.row+1}
            }));
            state.add=!state.add
        },
        addtdtable:(state)=>{
            
            state.add=!state.add
         
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
            // console.log(actions.payload[0])
                state.list3.map(item=>
                    item.username===actions.payload[0] && item.password===actions.payload[1]
                        ?state.login=true
                        :state.errors="Username or Password incurect"
                    )
        },
        loadset:(state,actions)=>{
            state.load=!state.load;
            state.dataselect=actions.payload
        }

    }
});


export const{deletetable,edittable,edittext, addtdtable , addtexttd, setdragover,deletetdtable, getdata,getsavedata,loginpage,loadset}=Slice.actions;

export default Slice.reducer;