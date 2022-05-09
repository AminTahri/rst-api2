import axios from "axios"
import { ADD, DELETE, EDIT, GET } from "./actionTypes"




export const getUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/get")
        dispatch({
            type:GET,
            payload:res.data
        })
    } catch (error) {
        console.log(error)
    }
};
export const deleteUser=(_id)=>async(dispatch)=>{
    try {
        const res=await axios.delete(`/delete/${_id}`);
        dispatch({
            type:DELETE,
            payload:res.data
        })
    } catch (error) {
        alert ("delete Error")
    }
};
export const addNewUser=(newUser)=>async(dispatch)=>{
    try {
        const res=await axios.post("/post",newUser)
        dispatch ({
            type:ADD,payload:res.data,
        })
    } catch (error) {
        alert("add error")
    }
}
export const editUser=(editedUser)=>async(dispatch)=>{
    try {
        const res=await axios.put(`/edit/${editedUser._id}`,editedUser)
        dispatch({
            type:EDIT,payload:res.data
        })
    } catch (error) {
        alert("Edit Error")
    }
}