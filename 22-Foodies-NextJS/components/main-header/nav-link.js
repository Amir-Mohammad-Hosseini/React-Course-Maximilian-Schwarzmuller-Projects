"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cssClasses from "./nav-link.module.css"

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? `${cssClasses.active} ${cssClasses.link} ` : `${cssClasses.link}`}>
      {children}
    </Link>
  );
};

export default NavLink;
