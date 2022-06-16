import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
//import { del, fetchExact01, list } from "./ArrayValues";
import { MatDetails } from "./MatrimonyForm";
import {  Padi01 } from "./Read";
import {   Update01 } from "./Update";
import {  erase, gathers } from "./axiosConnect";
//import { del } from "./ArrayValues";

export const Main=()=>
{
    const[tmpArray,settmpArray]=useState([])
    const[tempArray,settempArray]=useState(false)
    const[readview,setreadview]=useState(false)
    const[updateview,setupdateview]=useState(false)
    const[pos,setPos]=useState(0)
    const[obj,setObj]=useState({

    })
    const hello=async()=>{
        const t=await gathers();
        settmpArray(t.data)
    }

    const toErase=async(value)=>{
        const hey=await erase(value)
        alert(hey.data)
        window.location.assign("/")
    }

    useEffect(()=>
    {
        hello()
    },[])

    return(
        <>                                                                   
            {(tempArray)?
                <>  
                    <MatDetails/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            settempArray(false)
                            window.location.assign("/")
                        }
                    }>
                        <i class="bi bi-skip-backward-btn-fill"></i>Back
                    </button>
                </>
                :
                (updateview)?
                <>
                    <Update01 mention={obj}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setupdateview(false)
                            window.location.assign("/")

                        }
                    }>
                        <i className="bi bi-skip-backward-btn-fill"></i> Back
                    </button>
                </>
                :
                (readview)?
                <>
                <Padi01 who={pos}/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setreadview(false)
                        }
                    }>
                         Back
                    </button>
                </>
                :
                <>
                    <button className="btn btn-outline-success mb-3 mt-5 float-start"
                        onClick={()=>{
                            settempArray(true)
                        }}>
                        <i class="bi bi-cloud-plus"></i>New Customer
                    </button>
                    <button className="btn btn-outline-success mb-3 mt-5 ms-5 ">Login</button>
                    
                    <h1 className="text-dark text-center bg-info">MATRIMONY NEW SUBCRIBER</h1>   
        

        <div className="row justify-content-center bg-light text-light">
                        <div className="table-responsive-md">
                            <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-3 shadow rounded">
                                <thead>
                                    <tr className="text-dark">
                                        <th>USERNAME</th>
                                        <th>FIRSTNAME</th>
                                        <th>GENDER</th>
                                        <th>QUALIFICATION</th>
                                        <th>AGE LIMIT</th>
                                        <th>CONTACT NO</th>
                                        <th>MAIL-ID</th>
                                        <th>LANGUAGE</th>
                                        <th>ACTIONS</th>
                                   </tr>
                                </thead>
                                <tbody>
                                    {tmpArray.map((elems,index)=>(
                                        <tr>
                                             <td>
                                                <button class="btn btn-outline-info" onClick={()=>{
                                                    setreadview(true)
                                                    setPos(elems.matId) 
                                                    }}>
                                                   READ 
                                                </button>
                                                {elems.matUname}
                                            </td>
                                            <td className="text-center"> {elems.matFname}</td>
                                            <td className="text-center"> {elems.matGen}</td>
                                            <td className="text-center"> {elems.matQname}</td>
                                            <td className="text-center"> {elems.matAgeLtd}</td>
                                            <td className="text-center"> {elems.matCno}</td>
                                            <td className="text-center"> {elems.matMail}</td>
                                            <td className="text-center"> {elems.matLan}</td>
                                            
                                            <td>
                                                <button className="btn btn-outline-warning rounded-circle"
                                                onClick={()=>{
                                                    setupdateview(true)
                                                    //setPos(index)
                                                    //const y=fetchExact01(elems.matUname)
                                                    setObj(elems)
                                                }}>
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-outline-danger "
                                                onClick={()=>{
                                                     toErase(elems.matId)
                                                       // settmpArray(del(index))
                                                    }}>
                                                    Delete 
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </>
                    }
        </>
    )
}