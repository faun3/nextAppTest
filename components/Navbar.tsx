"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-sky-900 text-slate-100 sticky top-0 py-5 px-5 rounded-bl-xl rounded-br-xl">
      <div className="flex flex-row justify-between">
        <div>
          <Link href={"/"} className="text-white text-2xl font-bold font-sans">
            Logo
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link href={`/hello`}>Hello Page</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
