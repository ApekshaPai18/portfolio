import React from "react";

// import calculator1 from "../assets/portfolio/calculator1.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
// import calculator2 from "../assets/portfolio/calculator2.jpg";
import zomato from "../assets/portfolio/zomato.jpg";
import todo from "../assets/portfolio/todo.jpg";
import grow from "../assets/portfolio/grow.jpg";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: grow,
      desc:"WeGrow WebApp"
      
    },
    {
      id: 2,
      src: calculator,
      desc:"Calculator"
    },
    {
      id: 3,
      src: zomato,
      desc:"Zomato Page"
    },
    {
      id: 4,
      src: todo,
      desc:"TO-DO-List"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-slate-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
           {portfolios.map(({id,src,desc})=>
            (
               
                <div key={id} className="shadow shadow-gray-600 rounded-lg">
                  <img
                    width={500} height={500}
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105" 
                  />
                  <div className="flex items-center justify-center h-10  px-6 py-3 m-4 duration-200 hover:scale-105 ">
                    {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button> */}
                   {desc}
                  </div>

                </div>
             

            ))
        }
     </div>
      </div>
    </div>
  );
}

export default Portfolio;
