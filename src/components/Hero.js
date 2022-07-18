import React from "react";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";
import imagenes from "../src/assets/imagenes";

const Hero = () => {
  return (
    <>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={imagenes[2]} alt="Album" />
        </figure>

        <div class="card-body ">
          <h2 class="card-title">New album is released!</h2>
          <p class=" text-lg">
            <br />
            Now, after gaining a good knowledge about the React ecosystem,
            having played with some of the most popular libraries, such as
            Redux, React Query, Framer and having improved my UI skills I am
            ready to start looking for my first job opportunity as a frontend
            developer.. <br />
            <br />
            After some time learning, I had a solid foundation, so I decided it
            was time to take the leap and learn a javascript framework, I chose
            React. In the meantime, I started working as a Freelancer, building
            websites, landing pages, and doing some mailings.
          </p>

          <div class="card-actions justify-end">
            {" "}
            <section class=" " id="Skills"></section>
            
            <a class="btn btn-primary px-3 py-0" href="./docu.pdf"> Download Cv</a>
          </div>
        </div>
      </div>
      <div class="text-10xl font-bold flex  place-content-center bg-gradient-to-r from-black via-sky-900 to-rose-800">
        <br />
      </div>

      <h2 class=" text-center avatar-group text-4xl font-bold flex space-x-20 pt-20 justify-center  bg-gradient-to-r from-black via-sky-900 to-rose-800 ">
        Skills{" "}
      </h2>
      <div class=" flex flex-wrap space-x-10 pt-20 justify-center  bg-gradient-to-r from-black via-sky-900 to-rose-800">
        <div>
          <div></div>
          <svg class=" w-15 h-20 " viewBox="01 01 24 20 ">
            <DiReact />
          </svg>
        </div>
        <div>
          <svg class=" w-15 h-20  " viewBox="01 01 24 20 ">
            <SiJavascript />
          </svg>
        </div>
        <div>
          <svg class=" w-15 h-20  " viewBox="01 01 24 20 ">
            <SiHtml5 />
          </svg>
        </div>
        <div>
          <svg class="w-15 h-20  " viewBox="01 01 24 20 ">
            <FaCss3 />
          </svg>
        </div>
        <div>
          <svg class="w-15 h-20" viewBox="01 01 24 20 ">
            <SiTailwindcss />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
