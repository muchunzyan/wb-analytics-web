import s from './TertiaryButton.module.css'

import React from "react"

type Props = {
    title: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    type: "submit" | "reset" | "button",
}

const TertiaryButton = ({title, onClick, type}: Props) => {
    return (
        <button className={s.button} onClick={onClick} type={type}>{title}</button>
    )
}

export default TertiaryButton