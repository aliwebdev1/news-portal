import React from "react";
import Header from "../Header/Header";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const navItems = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "Categories",
    path: "/categories/news?category=technology",
    // path: '/categories/news?category=technology'
  },
  {
    route: "About",
    path: "/about",
  },
  {
    route: "Contact",
    path: "/contact",
  },
  {
    route: "Pages",
    path: "/pages",
  },
];

const Navbar = () => {
  return (
    <div>
      <Header></Header>

      <div className="navbar bg-black shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="bg-white btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link href={item.path}>{item.route}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <Image
              className="mx-auto"
              src={logo}
              width={100}
              height={70}
              alt="dragon news,best news website,new portal,latest news"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, i) => (
              <li className="text-white font-semibold" key={i}>
                <Link href={item.path}>{item.route}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end md:mr-3">
          <Link href="https://www.facebook.com/shorif4321" target="_blank">
            {" "}
            <FontAwesomeIcon
              className="text-white w-6"
              icon={faFacebook}
            />{" "}
          </Link>
          <Link href="/" target="_blank">
            {" "}
            <FontAwesomeIcon
              className="ms-3 text-white w-6"
              icon={faYoutube}
            />{" "}
          </Link>
          <Link href="/" target="_blank">
            {" "}
            <FontAwesomeIcon
              className="ms-3 text-white w-6"
              icon={faTwitter}
            />{" "}
          </Link>
          <Link href="/" target="_blank">
            {" "}
            <FontAwesomeIcon
              className="ms-3 text-white w-6"
              icon={faWhatsapp}
            />{" "}
          </Link>
          <Link href="/" target="_blank">
            {" "}
            <FontAwesomeIcon
              className="ms-3 text-white w-6"
              icon={faLinkedin}
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
