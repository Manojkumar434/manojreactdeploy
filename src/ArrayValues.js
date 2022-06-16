let MatValues=[
    {
            "matUname":"Maddy@434",
            "matFname":"Manojkumar",
            "matGen":"Male",
            "matQname":"Bachelor of computer applications",
            "matAgeLtd":"21",
            "matCno":"9789355980",
            "matMail":"manojgeetha12.10@gmail.com",
            "matLan":["Malayalam,Tamil"]
    },
     {
            "matUname":"Pavi@449",
            "matFname":"Pavithra M",
            "matGen":"female",
            "matQname":"Bachelor of Maths",
            "matLtd":"23",
            "matCno":"9500655980",
            "matMail":"Pavimano.10@gmail.com",
            "matLan":["Malayalam,Tamil,telgu"]
    },
    {
        "matUname":"Aarthi@1057",
        "matFname":"Aarthi Ayyanar",
        "matGen":"female",
        "matQname":"Bachelor of dental",
        "matAgeLtd":"25",
        "matCno":"8903647393",
        "matMail":"Aarthi046@gmail.com",
        "matLan":["Malayalam,Tamil"]
},
{
    "matUname":"Uma@474",
    "matFname":"Umadevi",
    "matGen":"Female",
    "matQname":"Bachelor of Engineering(CSE)",
    "matAgeLtd":"22",
    "matCno":"7089335980",
    "matMail":"uma1210@gmail.com",
    "matLan":["telugu,Tamil"]
}]

export const create=(ele)=>{
    MatValues.push(ele)
}
export const list=()=>{
    return MatValues
}
export const read1=(index)=>
{
    return MatValues[index]
}

export const fetchExact01=(name)=>{
    const tmp=MatValues.filter((element)=>{
        return element.matUname===name
    })
    return tmp[0]
}

export const alter=(place,data)=>{
    MatValues[place]=data
}



export const del=(index)=>
{
    MatValues=MatValues.filter((data,subcriber)=>
    {
        return subcriber!==index 
    })
    return list()
   
}