import { FC } from "react"

interface props{
    text?: string,
    type?: 1|2,
    clickEvent?: () => void
}

export function Button({text = "Button", type = 1, clickEvent}: props){
    return(
        <button onClick={clickEvent} className={`px-4 py-1 ${type == 1? "bg-secondary text-white hover:bg-white hover:text-secondary active:bg-secondary active:text-white" : "bg-white text-primary hover:bg-slate-600 hover:text-white"} rounded-md transition-all`}>{text}</button>
    )
}

export const CloseButton:FC<{handleClick?: () => void}> = ({handleClick}) => {
    return(
        <button onClick={handleClick} title="close" className="wallet-adapter-modal-button-close"><svg width="14" height="14"><path d="M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"></path></svg></button>
    )
}