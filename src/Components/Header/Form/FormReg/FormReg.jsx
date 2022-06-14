import React from "react";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import s from './FormReg.module.scss'

const FormReg = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch
  } = useForm();

  let redirect = useNavigate()

  const onSubmit = (data) =>{
    console.log(data)
    redirect('/')
    props.handleClose() 
  }

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit((data)=>onSubmit(data))}>
        <DialogTitle>Регистрация</DialogTitle>
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
          <TextField
            name="confirmPassword"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Это поле обязательно",
              },
              validate: (value) => {
                if (watch("newPassword") != value) {
                  return "Пароли не совпадают";
                }
              }
            })}
            autoFocus
            margin="dense"
            id="confirmPassword"
            label="Повторите пароль"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <Link to='/auth' className={s.form__link}>
            Авторизация
          </Link>
          <Button 
            variant="contained"
            type='submit'
            sx={{
              marginTop: 2
            }}
          >
              Готово
          </Button>
      </form>
    </div>
  );
};

export default FormReg;
