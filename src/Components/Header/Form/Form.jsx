import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FormAuth from "./FormAuth/FormAuth";
import FormReg from "./FormReg/FormReg";


const Form = () =>{

    return(
        <Routes>
            <Route path='/reg' element={<FormReg />}/>
            <Route path='/auth' element={<FormAuth />}/>
            <Route path="/" element={<Navigate to="/auth" />} />
        </Routes>
    )
}

export default Form