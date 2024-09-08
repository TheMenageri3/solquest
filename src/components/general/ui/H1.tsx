export const H1:React.FC<{children:React.ReactNode}> = ({children}) =>{
    return(
        <h1 className="text-center text-4xl font-bold my-10">
            {children}
        </h1>
    )
}