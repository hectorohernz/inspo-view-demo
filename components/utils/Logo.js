import Head from "next/head";
import Link from "next/link";
export default function Logo(){
    return(
        <header>
        <div className="logo">
          <h1>
            <Link href="/">
              <a>
                <span>I</span>n<span>s</span>p<span>o</span>
              </a>
            </Link>
          </h1>
        </div>
      </header>
    )
}