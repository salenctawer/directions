import React from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

const FormAuth = () =>{
    const {register, handleSubmit, setValue, formState: {errors}} = useForm()

    return(<div>
        <form>
          <DialogTitle>Авторизация</DialogTitle>
          <DialogContent>
            <TextField
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Это поле обязательно",
                },
              })}
              autoFocus
              margin="dense"
              id="email"
              label="Почта"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Это поле обязательно",
                },
              })}
              autoFocus
              margin="dense"
              id="password"
              label="Пароль"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
        </form>
      </div>)
}

export default FormAuth