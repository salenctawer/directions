import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FormAuth from "./FormAuth/FormAuth";
import FormReg from "./FormReg/FormReg";


const Form = (props) =>{

    return(
        <Routes>
            <Route path='/reg' element={<FormReg handleClose={props.handleClose}/>}/>
            <Route path='/auth' element={<FormAuth handleClose={props.handleClose}/>}/>
            <Route path="/" element={<Navigate to="/auth" />} />
        </Routes>
    )
}

export default Form