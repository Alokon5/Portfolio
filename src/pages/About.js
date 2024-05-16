const About = ()=>{
    return <div className=" pb-10 pt-10 flex w-[100vw] justify-center gap-8 bg-stone-950 items-center ">
            <div className=" flex flex-col gap-3 text-left w-[30vw] ">
            <div className=" justify-evenly items-center flex flex-row gap-5">
            <div className=""><img src="my.png" alt="image"  width={150} className="  rounded-full bg-yellow-300" /></div>
            <div className=" flex flex-col gap-5 animation">
               <p>Name: Alok Rathore</p> 
               <p>Job Role: Frontend Developer</p>
               <p>Experience: 0</p>
               <p>Address: Chhattisgarh, India</p>
            </div>
            </div>
            <div className=" flex flex-col gap-3">
                <p>Skills</p>
                
                <p>HTML</p>
                <div className=" h-2 w-full rounded-sm bg-yellow-300"></div>
                
                <p>CSS</p>
                <div className=" h-2 w-full rounded-sm bg-yellow-300"></div>
                <p>Javascript</p>
                <div className="flex flex-row ">
                <div className=" h-2 w-[50%] rounded-sm bg-yellow-300"></div>
                <div className=" h-2 w-[50%] rounded-sm bg-black"></div>
                </div>
                
                <p>React</p>
                <div className="flex flex-row">
                <div className=" h-2 w-[60%] rounded-sm bg-yellow-300"></div>
                <div className=" h-2 w-[40%] rounded-sm bg-black"></div>
                </div>
                <p>Node.js</p>
                <div className=" flex flex-row">
                <div className=" h-2 w-[10%] rounded-sm bg-yellow-300"></div>
                <div className=" h-2 w-[90%] rounded-sm bg-black"></div>
                </div>
           </div>        
        </div>
        <div className=" flex-col   w-[40vw] ">
            <div className=" text-left text-5xl select-none text-white font-bold ">About</div>
             <div className=" text-justify pt-3  z-20">
             Hii, Everyone my name is Alok Rathore a B.Tech undergraduate student. 


             </div>
        </div>
    </div>
}
export default About;
  