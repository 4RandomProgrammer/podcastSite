
const Navbar = () => {
    return (
        <div className="bg-yellow-400 w-full flex justify-between p-4 font-inter">
            <div className="text-black font-semibold h-13"><img src="./src/assets/Logo.png" alt="" className="h-14" /></div>
            <ul className="flex flex-row space-x-8 text-xl justify-end items-center">
                <li className="border-r-4 border-r-black hover:text-white transition-all">
                    <a className="p-7" href="#">Home</a>   
                </li>
                <li className="border-r-4 border-r-black">
                    <a className="pr-8 hover:text-white" href="#">Episódios</a>      
                </li>
                <li>
                    <a className="pr-5 hover:text-white" href="#">Vídeos</a>    
                </li>
            </ul>
        </div>
    )
}

export default Navbar;