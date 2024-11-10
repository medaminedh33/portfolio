import { BsFacebook, BsInstagram, BsYoutube, BsTwitterX } from "react-icons/bs";

import Heropic from "../assets/dma.jpeg"


const hero = () => {
    return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-slate 300">Im</p>
                <h1 className="text-6xl">Med-Amine DH</h1>
                <hr />
                <p className="mt-10 text-xl text-slate-300 font-sans"> I am a passionate
                    software developer with a journey that began as a
                    child fascinated by technology.
                    Growing up, I was always intrigued by how computers worked,
                    and my curiosity only deepened when I wrote my first line of code.
                    .
                </p>
            </div>
            <div className="w-1/3  items-center ssm:w-fit">
                <img src={Heropic} alt="" width={250} height={250} className="rounded-full w-full border-8 border-white" />
            </div>
            <div className="w-1/3 ssm:w-fit">
                <p className="text-4xl mb-4">About me </p>
                <p className="text-slate-300">its time to coding here we go again </p>
                <div className="space-x-4 ">
                    <div className="flex mt-5 space-x-4 cursor-pointer"> 
                    <BsFacebook size={40} className="border-4 horver:border-indigo-800 rounded-full" />
                    
                    <BsInstagram size={40} className="border-4 horver:border-indigo-800 rounded-full"/>
                    
                    <BsYoutube size={40} className="border-4 horver:border-indigo-800 rounded-full"/>
                    
                    <BsTwitterX size={40} className="border-4 horver:border-indigo-800 rounded-full" />
                </div>
                </div>
            </div>

        </section>

    )
}

export default hero