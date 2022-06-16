import React, { useEffect, useState } from "react";
import { alter } from "./ArrayValues";
import './App.css'
import { updateOnes } from "./axiosConnect";

export const Update01=(change)=>
{

    //const[pos]=useState(change.who)

    const[sign,setsign]=useState(
        {
            "matId":change.mention.matId,
            "matUname":change.mention.matUname,
            "matFname":change.mention.matFname,
            "matGen":change.mention.matGen,
            "matQname":change.mention.matQname,
            "matAgeLtd":change.mention.matAgeLtd,
            "matCno":change.mention.matCno,
            "matMail":change.mention.matMail,
            "matLan":change.mention.matLan
        })
        useEffect (()=>{
            let wind=""
            sign.matLan.map((content)=>{
                wind+=content+","
            })
            sign.matLan=wind
        },[])

        const reg=async()=>
        {
            sign.matLan=sign.matLan.split(",")
            const t=await updateOnes(sign)
            alert(t.data)

            // alter(pos,sign)
            // alert( "update successfully")
            // alert("Enrolled Successfully "+JSON.stringify(sign))
            //create(sign)
        }
        const can=()=>
        {
            alert("Better luck next time")
        }

    const tracky=(maddy)=>
        {
            //extraction
            const{name,value}=maddy.target
            setsign(
                (old)=>{
                return{
                    ...old,
                    [name]:value
                    }
                }
            )

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
                        <img src="Images/tamil-matrimony-logo.png" className="card-img " style={Imgsrc} alt="u hapiee we hapiee" />
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
                            <textarea className="form-control"
                                   name="matGen"
                                   value={sign.matGen}
                                   onChange={tracky}>
                        </textarea>
 
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
                            <textarea className="form-control"
                                   name="matLan"
                                   value={sign.matLan}
                                   onChange={tracky}>
                        </textarea>
                            </div>
                        <div className="row justify-content-around mt-4">
                            <button onClick={reg} className="btn btn-outline-success col-4">Update</button>
                            <button onClick={can} className="btn btn-outline-danger col-4">Cancel</button>
                        </div>  
                    </div>
                </div>
            </div>
            </div>
            </>
        )    
    }