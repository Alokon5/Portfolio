import { Link } from "react-router-dom";

function Home(){
    return(
    <div>
        <div className=" flex justify-evenly items-center w-[100vw] bg-stone-950 h-[90vh] pb-10 transition-all    ">
        <div className="flex flex-col gap-6  text-left ">
           <p className=" text-yellow-300">Hello!</p>
           <h1 className=" text-6xl">I'm <span className=" text-yellow-300 font-bold">Alok Rathore</span></h1>
           <div>
           <p className=" text-xl md:text-red-700  sm:text-green-700  text-yellow-300">An Engineer</p>
           <p className=" text-xl">A Frontend Developer</p>
           </div>
          
        <Link to="/resume"><button className="px-4 py-2 bg-yellow-300 rounded-full text-black font-bold text-center">Resume</button></Link> 
        </div>
        <div className=" relative">
        <div className=" transition-all duration-300 relative top-28 ">
            <img src="back.png" alt="yp" width={269} className="  transition-all duration-300" />
           
        </div>
        <div className=" transition-all duration-300  -top-12 left-15 absolute z-10  ">
            <img src="my.png" alt="yp" width={269} className=" rounded-r-full rounded-l  transition-all duration-300" />
           
        </div>
       
        </div>
    </div>

    <div className=" text-black pt-10 h-auto ">
        <h1 className=" text-4xl font-bold font-mono">Projects</h1>
        <div className=" md:grid md:grid-flow-col md:grid-rows-2 gap-5 mt-10 md:justify-center flex flex-col w-auto mx-5">
           
        <div className=" hover:shadow-md "><Link to="/projects"><img src="studynotion.jpg" alt="loading" width={500} className=" hover:shadow-2xl hover:w-[550px] transition-all duration-300  rounded-lg loading" /></Link></div>
       
        <div className=" hover:shadow-md"><Link to="/projects"><img src="travel.jpg" alt="loading" width={500} className=" hover:shadow-2xl hover:w-[550px] transition-all duration-300  rounded-lg loading" /></Link></div>
        <div className=" hover:shadow-md "><Link to="/projects"><img src="studynotion.jpg" alt="loading" width={500} className=" hover:shadow-2xl hover:w-[550px] transition-all duration-300  rounded-lg loading" /></Link>  </div>
        <div className=" hover:shadow-md "><Link to="/projects"><img src="tic.jpg" alt="loading" width={500} className=" hover:w-[550px] transition-all duration-300 rounded-lg loading-lazy" /></Link></div>

        </div>
    </div>
   
    </div>
    )
}
export default Home;
