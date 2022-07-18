import React from "react";
import imagenes from "../src/assets/imagenes";
import { DiGithubBadge } from "react-icons/di";
import {
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <body class="md-container mx-auto text-center">
        <section class="" id="Proyect">
          <span className="text-center avatar-group text-4xl font-bold flex space-x-20 pt-20 place-content-center bg-gradient-to-r from-black via-sky-900 to-rose-800">
            Project
          </span>

          <div className=" h-creen flex flex-wrap justify-center items-center bg-gradient-to-r from-black via-sky-900 to-rose-800">
            <div class="card w-96 bg-base-100 hover:bg-base-200  p-5 m-10 shadow-xl">
              <figure class="px-10 pt-10 opacity-81">
                <img src={imagenes[0]} alt="Chat App" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Chat App</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <a
                    href="https://transcendent-cassata-60dafe.netlify.app/"
                    class="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div class="card w-96 bg-base-100 hover:bg-base-200 p-4 m-10 shadow-xl">
              <figure class="px-10 pt-10">
                <img src={imagenes[1]} alt="react " class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <a
                    href="https://soft-sundae-26fd33.netlify.app"
                    class="btn btn-primary"
                  >
                    Live emo
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
      <section class="" id="Contact"></section>
      <footer class="footer footer-center p-5  bg-base-200 text-base-content rounded">
        <div class="">
          <div class="mb-6 text-3xl font-medium text-center  ">
            <div>
              <span class="footer-title  ">Let's talk</span>
              <div class="form-control w-80  space-y-5">
                <label class="label ">
                  <div>
                    <span class="label-text">Enter your email address</span>
                  </div>
                </label>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    class="input input-bordered w-full pr-16"
                  />
                  <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="grid grid-flow-col gap-9 ">
            <a href="https://www.facebook.com/luis.michinaux/">
              <svg
                class="w-10 h-14 cursor-pointer transition ease-in-out delay-150 bg-base-200 hover:-translate-y-1 hover:scale-110 hover:bg-base-200duration-300  "
                viewBox="02 01 5 20 "
              >
                <AiFillFacebook />
              </svg>
            </a>
            <button>
              <svg
                class="w-10 h-14 cursor-pointer transition ease-in-out delay-150 bg-base-200 hover:-translate-y-1 hover:scale-110 hover:bg-base-200duration-300"
                viewBox="02 01 5 20 "
              >
                <AiOutlineTwitter />
              </svg>
            </button>
            <a href="https://github.com/luisomogollon">
              <svg
                class="w-10 h-14 cursor-pointer transition ease-in-out delay-150 bg-base-200 hover:-translate-y-1 hover:scale-110 hover:bg-base-200duration-300"
                viewBox="02 01 5 20 "
              >
                <DiGithubBadge />
              </svg>
            </a>
            <a href="www.linkedin.com/in/luis-antonio-michinaux-mogollon-66319823a">
              <svg
                class="w-10 h-14 cursor-pointer transition ease-in-out delay-150 bg-base-200 hover:-translate-y-1 hover:scale-110 hover:bg-base-200duration-300 "
                viewBox="02 01 5 20 "
              >
                <AiOutlineLinkedin />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
