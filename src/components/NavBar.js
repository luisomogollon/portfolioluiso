import React from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <button class="btn btn-ghost normal-case text-xl">LuisoUI</button>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <Link
              class="btn btn-ghost normal-case text-xl"
              to="Skills"
              smooth={true}
              duration={1000}
            >
              {" "}
              Skills
            </Link>
            <Link
              class="btn btn-ghost normal-case text-xl"
              to="Proyect"
              smooth={true}
              duration={1000}
            >
              {" "}
              Proyect
            </Link>
            <Link
              class="btn btn-ghost normal-case text-xl"
              to="Contact"
              smooth={true}
              duration={1000}
            >
              {" "}
              Contact
            </Link>
          </ul>
        </div>
      </div>

      <div class="hero min-h-screen bg-gradient-to-r from-black via-sky-900 to-rose-800">
        <div class="hero-content text-center">
          <div class="max-w-md">
            Luis Michinaux
            <h2 class="text-6xl font-bold ">Frontend Developer </h2>
            <p class="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et buttonid nisi.
            </p>
            <button class="btn btn-primary animate-bounce">Contact Me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
