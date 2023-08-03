"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-sky-800 text-slate-100 sticky top-0">
      <ul>
        <li>
          <Link href={`/hello`}>Hello Page</Link>
        </li>
      </ul>
    </nav>
  );
}
