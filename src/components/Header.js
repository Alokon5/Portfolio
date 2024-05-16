const { Link, NavLink } = require("react-router-dom");

function Header(){
    return(<div className=" w-[100vw] bg-stone-950 flex justify-center sticky top-0  z-50">
         <div className="flex justify-between  w-[80%] bg-stone-950 text-white  pb-9  h-10  ">
             <div className=" pt-2 ">
                <img src="https://seeklogo.com/images/A/alok-kumar-logo-35F521BD77-seeklogo.com.png" alt="logo loading" width={30} className=" overflow-visible" />
             </div>
            <ul className=" flex  gap-3  ">
                <li className=" cursor-pointer px-2 py-2 group hover:text-yellow-300"><NavLink to='/'>Home</NavLink> 
                <div className=" transition-all duration-300 bg-stone-950  group-hover:bg-yellow-300 rounded h-0.5 w-full"></div></li>
                <li className=" cursor-wait px-2 py-2 group hover:text-yellow-300"><NavLink to='/about'>About</NavLink>  
                <div className="transition-all duration-300 bg-stone-950  group-hover:bg-yellow-300 rounded h-0.5 w-full "></div></li>
                <li className=" cursor-pointer px-2 py-2 group hover:text-yellow-300"><NavLink to='/resume'>Resume</NavLink>  
                <div className="transition-all duration-300 bg-stone-950  group-hover:bg-yellow-300 rounded h-0.5 w-full "></div></li>
                <li className=" cursor-pointer px-2 py-2 group hover:text-yellow-300"><NavLink to='/projects'>Projects</NavLink>  
                <div className="transition-all duration-300 bg-stone-950  group-hover:bg-yellow-300 rounded h-0.5 w-full "></div></li>
                <li className=" cursor-pointer px-2 py-2 group hover:text-yellow-300"><NavLink to='/contact'>Contact</NavLink>  
                <div className="transition-all duration-300 bg-stone-950  group-hover:bg-yellow-300 rounded h-0.5 w-full "></div></li>
            </ul>
        </div>
    
    </div>
    )
}
export default Header;