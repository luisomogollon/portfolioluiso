import React from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <button className="btn btn-ghost normal-case text-xl">LuisoUI</button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <Link
              className="btn btn-ghost normal-case text-xl"
              to="Skills"
              smooth={true}
              duration={1000}
            >
              {" "}
              Skills
            </Link>
            <Link
              className="btn btn-ghost normal-case text-xl"
              to="Proyect"
              smooth={true}
              duration={1000}
            >
              {" "}
              Proyect
            </Link>
            <Link
              className="btn btn-ghost normal-case text-xl"
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

      <div className="hero min-h-screen bg-gradient-to-r from-black via-sky-900 to-rose-800">
        <div className="hero-content text-center">
          <div className="max-w-md">
            Luis Michinaux
            <h2 className="text-6xl font-bold ">Frontend Developer </h2>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et buttonid nisi.
            </p>
            <button className="btn btn-primary animate-bounce">Contact Me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
