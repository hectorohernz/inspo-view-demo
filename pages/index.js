import Head from "next/head";
import Link from "next/link";
import LoginForm from "../components/home/Login";
import Logo from "../components/utils/Logo";
export default function Index() {
  return (
    <>
      <Logo/>
      <LoginForm/>
      <button>Create An Account</button>
    </>
  );
}
