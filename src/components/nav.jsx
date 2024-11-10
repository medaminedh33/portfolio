import { CgNametag } from "react-icons/cg";


const nav = () => {

  
    
    return (
       

            <div className="flex items-center justify-between p-10 lg:flex-row ">
                <div>
                    <a href="#" className="text-white font-mono text-3x1 tracking-wider 
        flex items-center"><CgNametag />DMA33</a>
                </div>
                <div className="space-x-4">
                    <div className="ssm:hidden lg:block space-x-2">
                        <a href="#" className="text-white
                       hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
                        <a href="#" className="text-white hover:bg-indigo-800 
                       rounded-full  px-5 py-2 text-xl">Projects</a>
                        <a href="#" className="text-white
                        hover:bg-indigo-800 
                    rounded-full  px-5 py-2 text-xl">Testimonial</a>
                    </div>
                 </div>  

            </div>
 )}



       

   


export default nav



