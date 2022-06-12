import React from "react";
import FormAuth from "./FormAuth/FormAuth";
import FormReg from "./FormReg/FormReg";


const Form = () =>{

    const temp = 'reg'


    const checkForm = () =>{
        if(temp==='reg'){
            return <FormReg />
        }
        else{
            return <FormAuth />
        }
    }

    return(<div>
        {checkForm()}
    </div>)
}

export default Form