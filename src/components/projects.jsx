import Project1Img from "../assets/cars.jpeg"
import Project2Img from "../assets/art.jpeg"
import Project3Img from "../assets/dev.jpeg"
import Project4Img from "../assets/gane.jpeg"

export default function Projects() {
    return (
        <>
<h1 className="text-3xl text-white mt-10 text-center"> Project</h1>

<div className="flex items-center space-x-4 p-4 bg-blue-100">
      
      <div className="w-1/3">
        <img src={Project1Img} alt="Project1" className="w-full h-auto rounded-lg" />
      </div>

      
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-2">Automotive Services, Dealership</h2>
        <p className="text-gray-700">
          Med-Amine DH Cars offers a range of automotive services, specializing in high-quality cars with exceptional customer service. Established in 2024.
        </p>

       </div>
<div>
<div className="flex items-center space-x-4 p-4 bg-blue-100">
      
      <div className="w-1/3">
        <img src={Project2Img} alt="Project2" className="w-full h-auto rounded-lg" />
      </div>

      
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-2">Drawing Designer, Artits</h2>
        <p className="text-gray-700">
        My journey as an artist is one of constant learning and experimentation, and I embrace the challenges and discoveries that come with every new project. Art, for me, is not just a form of expression; it’s a way of communicating the unspoken and sharing my perspective with the world. Every piece I create is a step in my ongoing exploration of color, , pushing the boundaries of my imagination.
        </p>
</div>
      </div>
    </div>
</div>
///////////////////////////////////////<div className="flex items-center space-x-4 p-4 bg-blue-100">
      
      <div className="w-1/3">
        <img src={Project3Img} alt="Project3" className="w-full h-auto rounded-lg" />
      </div>

      
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-2">Devlooer Softwar,Programing</h2>
        <p className="text-gray-700">
        My journey as a software developer has been a blend of curiosity, problem-solving, and creativity. From a young age, I found myself drawn to technology, always wondering how things worked beneath the surface. As I grew older, that curiosity naturally led me into the world of coding and development.
        </p>

       </div>
<div>
<div className="flex items-center space-x-4 p-4 bg-blue-100">
      
      <div className="w-1/3">
        <img src={Project4Img} alt="Project4" className="w-full h-auto rounded-lg" />
      </div>

      
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-2">Gaming</h2>
        <p className="text-gray-700">
        From the moment I picked up my first controller, I knew gaming would be more than just a hobby—it would become a passion. As a gamer, I’ve experienced countless adventures, explored different worlds, and taken on challenges that tested my reflexes, strategy, and creativity.
        </p>
</div>
      </div>
    </div>
</div>
    




   






























        </>
    )

}


