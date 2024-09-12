export const H1:React.FC<{children:React.ReactNode, margin?: "sm"|"lg"}> = 
({children, margin="lg"}) => {
    return(
        <h1 className={`text-center text-4xl font-bold ${margin == "lg" ? "my-10" : "my-3"}`}>
            {children}
        </h1>
    )
}