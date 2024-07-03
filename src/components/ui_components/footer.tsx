export default function Footer(){
    const date = new Date()
    return(
        <nav className="bg-white w-full h-12 flex justify-center items-center px-4">
            <p>CopyRight {date.getFullYear()}</p>
        </nav>
    )
}