import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header container">
      <a href="/">
        <Image
          layout="intrinsic"
          width="100%"
          height="auto"
          src="/images/header.jpg"
          alt="Big Dog Surf Camp - banner"
        />
      </a>
      <ul id="nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/what-to-bring">What To Bring</Link>
        </li>
        <li>
          <Link href="/about">About The Big Dog</Link>
        </li>
        <li>
          <a href="https://vimeo.com/bigdogsurfcamp" target="_blank">
            Videos
          </a>
        </li>
        <li>
          <Link href="/sign-up">SIGN UP</Link>
        </li>
      </ul>
    </header>
  );
}
