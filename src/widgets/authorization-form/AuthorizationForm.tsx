import s from './AuthorizationForm.module.css'

import PrimaryButton from "@/shared/ui/primary-button"
import React from 'react';
import TertiaryButton from "@/shared/ui/tertiary-button"

const AuthorizationForm = () => {
    const login = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        alert("login")
    }

    const resetPassword = () => {
        alert("reset password")
    }

    return (
        <form className={s.form}>
            <div className={s.inputsContainer}>
                <label htmlFor="email" className={s.inputLabel}>E-mail</label>
                <input id="email" name="email" type="email" className={s.inputField}/>

                <label htmlFor="password" className={s.inputLabel}>Пароль</label>
                <input id="password" name="passrord" type="password" className={s.inputField}/>
            </div>
            <div className={s.loginBtnContainer}>
                <PrimaryButton title="Войти" onClick={login} type="submit"/>
            </div>
            <TertiaryButton title="Восстановить пароль" type="button" onClick={resetPassword}/>
        </form>
    )
}

export default AuthorizationForm