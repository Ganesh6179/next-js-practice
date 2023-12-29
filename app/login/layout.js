"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <div>
      {pathName == "/login/loginadmin" ? (
        <li>
            <Link href="/login/loginadmin">Loginadmin</Link>
        </li>
      ) : (
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/login/loginuser">Loginuser</Link>
          </li>
        </ul>
      )}
      {children}
    </div>
  );
};

export default layout;
