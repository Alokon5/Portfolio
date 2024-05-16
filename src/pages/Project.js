import { Link } from "react-router-dom";
const Projects = ()=>{
    return    <div className="flex justify-evenly items-center h-auto w-full bg-stone-950  pb-10  m">
    <div className=" text-black pt-10 h-auto mx-auto  ">
        <h1 className=" text-4xl font-bold font-mono text-yellow-300">Projects</h1>
        <div className=" flex flex-row flex-wrap-reverse justify-center items-center mx-5 gap-5 mt-10">
           
        <div className=" "><Link to="https://github.com/Alokon5/studynotion"><img src="studynotion.jpg" alt="loading" width={500} className=" rounded-sm cursor-pointer" /></Link></div>
        <div><Link to="https://github.com/Alokon5/parallex-website"><img src="studynotion.jpg" alt="loading" width={500} className=" rounded-sm cursor-pointer" /></Link>  </div>
        <div><Link to="https://github.com/Alokon5/travel"><img src="travel.jpg" alt="loading" width={500} className=" rounded-sm cursor-pointer" /></Link></div>
        
        <div><Link to="https://github.com/Alokon5/TIc-Toc-Toe-Game"><img src="tic.jpg" alt="loading" width={500} className=" rounded-sm cursor-pointer" /></Link></div>

        </div>
</div>
</div>
}
export default Projects;