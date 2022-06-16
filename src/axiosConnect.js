import axios from "axios";

const links="http://localhost:10038/MatrimonyRegistrationForm";

export const joins=async(obj)=>{
    const hai=await axios.post(`${links}/new`,obj)
    return hai;
}

export const gathers=async()=>{
    const yets = await axios.get(`${links}/home`)
    return yets;
}

export const updateOnes=async(obj)=>{
    const hai=await axios.put(`${links}/update`,obj)
    return hai;
}

export const reachone=async(obj)=>{
    const write=await axios.get(`${links}/getting/${obj}`)
    return write;
}

export const erase=async(pk)=>{
    const t = await axios.delete(`${links}/del/${pk}`)
    return t;
}