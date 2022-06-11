import React from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

const Form = () =>{
    const {register, handleSubmit, setValue, formState: {errors}} = useForm()

    return(<div>
        123123
    </div>)
}

export default Form