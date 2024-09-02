
interface props{
    text?: string,
    type?: number,
    clickEvent?: () => void
}

export default function Button({text = "Button", type, clickEvent}: props){
    return(
        <button onClick={clickEvent} className="px-4 py-1 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary active:bg-secondary active:text-white">{text}</button>
    )
}