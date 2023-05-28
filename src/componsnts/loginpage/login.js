import React from "react";
import "./login.css"
import image1 from "./../../aset/image/lock-alt-svgrepo-com.svg"
import image2 from "./../../aset/image/user-10-svgrepo-com.svg"
import image3 from "./../../aset/image/user-svgrepo-com.svg"
import { loginpage } from "../../store/slices/slices";
import { useDispatch,useSelector } from "react-redux";





export function LoginPage(){

    const dispacch=useDispatch();
    let errors=useSelector(state=>state.Table.errors);    
        


    
    const sublogin=(item)=>{
        item.preventDefault()
       
        dispacch(loginpage([ item.target.username.value,item.target.password.value]))
        item.target.username.value="";
        item.target.password.value=""
       
    }



    return(
        <div className="Form">
            <form className="FormSection"  onSubmit={(item)=>sublogin(item)} autoComplete="off">
                <div className="UserLogin">
                    <img src={image3} alt="Not Load" />
                </div>
                <div className="Login">
                    <div className="Username">
                        <label form="username"><img className="Img , ImgUser" src={image2} alt="Not Load"/></label>
                        <input type="text" name="username" required placeholder="Username" />
                    </div>
                    <div className="Password">
                        <label form="Password"><img className="Img ,ImgPas" src={image1} alt="Not Load"/></label>
                        <input type="text" name="password" required placeholder="Password" />
                        <small className="Errors">{errors}</small>
                    </div>

                  

                    <button type="submit" className="BtnLogin" >Login</button>

                </div>
            </form>

        </div>


    )


}