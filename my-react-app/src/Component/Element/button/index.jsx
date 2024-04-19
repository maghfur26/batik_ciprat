const Button = ({bg, children="....", type}) => {
    return (
        <>
            <button className={`${bg} px-2 py-1 rounded-lg font-poppins transition duration-300 ease-in-out text-sm`} type={type}>{children}</button>
        </>
    )
}

export default Button;