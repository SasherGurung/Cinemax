import { HamburgerIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Input } from "../input";
import { Field } from "../field";

function Navbar() {
  return (
    <header className="shadow-md sticky top-0">
      <nav>
        <ul className="flex items-center justify-between gap-5 mx-7">
          <li>
            <Image
              src="/images/cinemax.png"
              alt="Logo"
              height={350}
              width={350}
              className="overflow-hidden"
            />
          </li>
          <li>
            <Field orientation="horizontal">
              <Input type="search" placeholder="Search..." className="placeholder:text-xs" />
            </Field>
          </li>
          <li>
            <HamburgerIcon className="h-7 w-7"/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
