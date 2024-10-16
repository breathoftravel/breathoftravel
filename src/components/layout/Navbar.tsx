import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import Link from "next/link";
import React from "react";
import FacebookOutlineIcon from "@/components/icons/FacebookOutline";
import XOutlineIcon from "@/components/icons/XOutline";
import InstagramOutlineIcon from "@/components/icons/InstagramOutline";
import TiktokOutlineIcon from "@/components/icons/TiktokOutline";

export const Navbar = () => {
    return (
        <div className="navbar shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label={`show menu`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primary text-primary-content rounded-box z-[1tes] font-semibold mt-3 w-52 p-2 shadow">
                        <li><Link href={`/search`}>Search product</Link></li>
                        <li><Link href={`/blog`}>Blog</Link></li>
                        <li>
                            <details>
                                <summary>About Breath of travel</summary>
                                <ul className="p-2">
                                    <li><Link href={`/about-us`}>About us</Link></li>
                                    <li><Link href={`/contact-us`}>Contact us</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Breath of travel</a>
            </div>
            <div className="navbar-center hidden lg:flex font-semibold ">
                <div className="grid grid-cols-1 justify-center items-center">
                    <ul className="menu menu-horizontal p-1 border-b-2">
                        <li><Link href={`/search`}>Explore</Link></li>
                        <li><Link href={`/blog`}>Blog</Link></li>
                        <li>
                            <details>
                                <summary>About Breath of travel</summary>
                                <ul className="p-2">
                                    <li><Link href={`/about-us`}>About us</Link></li>
                                    <li><Link href={`/contact-us`}>Contact us</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>

                    {/* Social Media Icons at the Bottom */}
                    <div className="flex space-x-2 pt-1 justify-center">
                        <a href="#"><FacebookOutlineIcon className="w-4 h-4"/></a>
                        <a href="#"><XOutlineIcon className="w-4 h-4"/></a>
                        <a href="#"><InstagramOutlineIcon className="w-4 h-4"/></a>
                        <a href="#"><TiktokOutlineIcon className="w-4 h-4"/></a>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <ThemeSwitcher/>
            </div>
        </div>
    )
}
