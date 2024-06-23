import { compareSync } from 'bcryptjs';
import React from 'react'
import {useForm} from 'react-hook-form'
import {Link,useNavigate} from 'react-router-dom'
function Login() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let navigate = useNavigate();
    function verifyUser(user){
        fetch(`http://localhost:4000/users?uname=${user.uname}`,{
            method:"GET"
        })
        .then(res=>res.json())
        .then(userArr=>{
            if(userArr.length===0){
                alert("Invalid Username")
            }
            else{
                let result = compareSync(user.pwd,userArr[0].pwd)
                if(result===true){
                    navigate(`/dashboard/${user.uname}`,{state:userArr[0]})
                }
                else{
                    alert("Invalid Password")
                }
            }
        })
    }
    return (
        <div>
            <h1 className="text-center display-3 text-danger">USER LOGIN</h1>
            <form className="w-50 mx-auto mt-5 bg-light p-4" action="" onSubmit={handleSubmit(verifyUser)}>
            <div className="mb-3">
                    <label htmlFor="uname" className="form-label">Username</label>
                    <input type="text" className="form-control mb-4" id="uname" {...register("uname",{required:true})}/>
                    {errors.uname?.type==="required" && (<p className="text-danger">Required</p>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password</label>
                    <input type="password" className="form-control mb-4" id="pwd" {...register("pwd",{required:true})}/>
                    {errors.uname?.type==="required" && (<p className="text-danger">Required</p>)}
                </div>
                
                <button className="btn btn-success btn-danger text-dark mx-auto d-block fs-5">Login</button>
            </form>
            <p className="lead text-center">New User?
            <Link to="/register" className="fs-4 px-3">Register</Link>
            here
            </p>
        </div>
    )
}

export default Login
