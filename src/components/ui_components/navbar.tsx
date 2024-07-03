export default function Navbar(){
    return(
        <nav className="bg-white w-full h-12 flex justify-between items-center px-12">
            <p>Home</p>
            <div className="flex gap-x-4">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">More</a>
            </div>
        </nav>
    )
}