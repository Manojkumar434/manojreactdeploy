import { useEffect, useState } from "react"
//import { read1 } from "./ArrayValues"
import { reachone } from "./axiosConnect"


export const Padi01=(manoj)=>{

        const[signed,setsigned]=useState(
        {
            "matUname":"",
            "matFname":"",
            "matGen":"",
            "matQname":"",
            "matAgeLtd":0,
            "Cno":0,
            "matMail":"",
            "matLan":new Array(),
            "matId":0
        })

        useEffect(()=>
        {
            jackReading()
        })

        const jackReading=async()=>{
            const t=await reachone(manoj.who)
            setsigned(t.data)
        }

        return(
            <>
            <h2 className="text-center">Subcriber Details</h2>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <ul className="card-body col-2">
                                    <p className="text-center fw-bold"> USERNAME -<span className="text-warning">{signed.matUname}</span></p>
                                    <p className="text-center fw-bold"> FIRSTNAME -<span className="text-warning">{signed.matFname}</span></p>
                                    <p className="text-center fw-bold"> GENDER -<span className="text-warning">{signed.matGen}</span></p>
                                    <p className="text-center fw-bold"> QUALIFICATION -<span className="text-warning">{signed.matQname}</span></p>
                                    <p className="text-center fw-bold"> AGE LIMIT -<span className="text-warning">{signed.matAgeLtd}</span></p>
                                    <p className="text-center fw-bold"> CONTACT NUMBER -<span className="text-warning">{signed.matCno}</span></p>
                                    <p className="text-center fw-bold"> MAIL ID -<span className="text-warning">{signed.matMail}</span></p>
                                    <p className="text-center fw-bold"> LANGUAGE  -<span className="text-warning">{signed.matLan}</span></p>
                                </ul>
                                <button className="btn btn-success float-end">Subcriber Asset details</button>
                            </div>
                        </div>
            </>
        )
    }