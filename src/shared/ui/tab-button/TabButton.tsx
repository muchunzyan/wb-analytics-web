import s from './TabButton.module.css'

import React from "react"

type Props = {
    title: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    type: "submit" | "reset" | "button",
    active: boolean
}

const TabButton = ({title, onClick, type, active}: Props) => {

    return (
        <button
            className={`${s.button} ${active ? s.active : ''}`}
            onClick={onClick}
            type={type}
        >
            {title}
        </button>
    )
}

export default TabButton