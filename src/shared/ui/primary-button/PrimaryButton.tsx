import s from './PrimaryButton.module.css'

import React from "react"

type Props = {
    title: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    type: "submit" | "reset" | "button",
}

const PrimaryButton = ({title, onClick, type}: Props) => {
    return (
        <button className={s.button} onClick={onClick} type={type}>{title}</button>
    )
}

export default PrimaryButton