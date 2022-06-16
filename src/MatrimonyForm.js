import React, { useState } from "react";
import { joins } from "./axiosConnect";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
// import { create } from "./ArrayValues";

export const MatDetails=()=>{
    const[sign,setsign]=useState({
            "matUname":"",
            "matFname":"",
            "matGen":"",
            "matQname":"",
            "matAgeLtd":0,
            "matCno":0,
            "matMail":"",
            "matLan":new Array()
        })
        const euro=(hey)=>{
            const{value}=hey.target
            sign.matLan.push(value)
        }
        const tracky=(maddy)=>
        {
            //extraction
            const{name,value}=maddy.target
            setsign(
                (old)=>{
                return{
                    ...old,
                    [name]:value,
                    }
                })
        }

    const reg=async()=>{
        //   alert("Start a new life-Check the details your click to back button" )
        //  create(sign) 
        const holi=await joins(sign)
        alert(holi.data)
        
    }
    const can=()=>{
        alert("Better luck next time")
    }
    const Imgsrc=
    {
        width:'200px',
        height:'240px',
        backgroundImage:'Images/Matrimony images.jpg'
    }
    const ff={
        fontFamily:'Viner Hand ITC'
    }
    const shape1={
        textTransform:'uppercase',
        fontSize:'20px',
        fontFamily:'Cookie',
        width:'250px',
        height:'10px',
    }
    const shape={
        fontFamily:'Terminal'
    }
    return(
        <>
        <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-10 col-sm-12 p-4 mt-4 text-light card " >
                    <h1 style={ff} className="card-title text-center"> TAMIL MATRIMONY</h1>
                    <div className="card-body">
                    <img src="Images/tamil-matrimony-logo.png" className="card-img " style={Imgsrc} ></img>
                    <p className=" float-end" style={shape1}><span className="fw-bold text-dark" style={shape}>MARRIAGE</span><hr/><br/>Infinite blessings,<br/>Thousands of people,<br/>Three knots,Two hearts<br/>Becomes ONE SOUL</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center"  >
                <div className="col-lg-9 col-md-10 col-sm-12 p-4 mt-1 mb-4shadow bg-light">
                    <div className="form-group mt-2 ">
                        <label>Username</label>
                        <input type="text" 
                        onChange={tracky}
                        value={sign.matUname}
                        name="matUname" 
                        placeholder="Enter the username" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Fullname</label>
                        <input type="text" 
                        onChange={tracky}
                        value={sign.matFname}
                        name="matFname"
                        placeholder="Enter the Fullname" 
                        className="form-control"/>
                    </div>
                    <div>
                        <label className="mt-2">Gender</label>
                        <input type="radio" name="matGen" onChange={tracky} value="male" className="ms-3"/>Male
                        <input type="radio" name="matGen" onChange={tracky} value="female" className="ms-3"/>Female
                        <input type="radio" name="matGen" onChange={tracky} value="other" className="ms-3"/>others
                    </div>
                    <div className="form-group mt-2">
                        <label>Qualification</label>
                        <input type="text"
                        onChange={tracky}
                        value={sign.matQname}
                         name="matQname"
                         placeholder="Enter Your qualification" 
                         className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Looking for selected age</label>
                        <input type="number"
                        onChange={tracky} 
                        value={sign.matAgeLtd}
                        name="matAgeLtd"
                        placeholder="Enter the your Expected Age" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Contact no</label>
                        <input type="tel"
                        onChange={tracky} 
                        value={sign.matCno}
                        name="matCno"
                        placeholder="Enter the number" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Mail-id</label>
                        <input type="email" 
                        onChange={tracky}
                        value={sign.matMail}
                        name="matMail"
                        placeholder="Enter your email-id" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Languages</label>
                        <input type="checkbox" name="tamil"  value="Tamil" onChange={euro} className="form-input-check ms-5"/>Tamil
                        <input type="checkbox" name="telugu" value="Telugu" onChange={euro} className="form-input-check ms-5"/>Telugu
                        <input type="checkbox" name="kannada" value="Kannada" onChange={euro}  className="form-input-check ms-5"/>Kannada
                        <input type="checkbox" name="malayalam" value="Malayalam" onChange={euro} className="form-input-check ms-5"/>Malayalam
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button onClick={reg} className="btn btn-outline-success col-4">Register</button>
                        <button onClick={can} className="btn btn-outline-danger col-4">Cancel</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        </>
    )    
}