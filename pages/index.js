import Head from "next/head";
import Link from "next/link";
import LoginForm from "../components/home/Login";
import Logo from "../components/utils/Logo";
export default function Index() {
  return (
    <>
      <Logo />
      <div className="flex-column">
        <LoginForm />
        <div className="d-flex justify-content-center">
          <Link href="/create-account/create" className="btn btn-primary btn-lg active">
            Create An Account
          </Link>
        </div>
      </div>
    </>
  );
}
