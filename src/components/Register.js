import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {hashSync} from 'bcryptjs'
function Register() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    let navigate = useNavigate();
    function registerSubmit(newUser){
        let hashedPassword = hashSync(newUser.pwd,5);
        newUser.pwd = hashedPassword;
        fetch('http://localhost:4000/users',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(newUser)
        })
        .then(res=>{
            if(res.status===201){
                navigate('/login')
            }
        })
        .catch(err=>console.log("Registration Error: ",err))
    }
    return (
        <div>
            <h1 className="text-center text-danger display-3">USER REGISTRATION</h1>
            <form className="w-50 mx-auto mt-5 bg-light p-4" action="" onSubmit={handleSubmit(registerSubmit)} >
                <div className="mb-3">
                    <label htmlFor="uname" className="form-label">Username</label>
                    <input type="text" className="form-control mb-4" id="uname" {...register("uname",{required:true})}/>
                    {errors.uname?.type==="required" &&
                    <p className="text-danger">Required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password</label>
                    <input type="password" className="form-control mb-4" id="pwd" {...register("pwd",{required:true})}/>
                    {errors.pwd?.type==="required" &&
                    (<p className="text-danger">Required</p>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control mb-4" id="email" {...register("email",{required:true})}/>
                    {errors.email?.type==="required" &&
                    (<p className="text-danger">Required</p>)}
                </div>
                <button className="btn btn-success btn-danger text-dark d-block mx-auto fs-5">Register</button>
            </form>
            <p className="lead text-center">Already Registered?
            <Link to="/login" className="fs-4 ps-3">Login</Link>
            </p>

        </div>
    )
}

export default Register
