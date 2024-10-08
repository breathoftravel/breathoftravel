import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
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
        <ul className="menu menu-horizontal px-1">
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
      <div className="navbar-end">
        <ThemeSwitcher />
      </div>
    </div>
  )
}
