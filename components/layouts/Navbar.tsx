"use client"

import Image from "next/image";
import { Input } from "../ui/input";
import { Field } from "../ui/field";
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar() {
  return (
    <header className="shadow-sm shadow-white sticky top-0 z-50 sm:fixed sm:top-0 sm:z-50">
      <nav>
        <ul className="flex items-center justify-between gap-5 mx-7">
          <li>
            <Image
              src="/images/cinemax.png"
              alt="Logo"
              height={350}
              width={350}
              className="invert "
            />
          </li>
          <li>
            <Field orientation="horizontal">
              <Input type="search" placeholder="Search..." className="placeholder:text-xs" />
            </Field>
          </li>
          <li>
            <RxHamburgerMenu  className="h-7 w-7 text-white"/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
