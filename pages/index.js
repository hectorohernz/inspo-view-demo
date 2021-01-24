import Head from "next/head";
import Link from "next/link";
import LoginForm from "../components/home/Login";
export default function Home() {
  return (
    <>
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
      <LoginForm/>
    </>
  );
}
