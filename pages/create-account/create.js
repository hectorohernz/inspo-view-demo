import NavBar from "../../components/utils/Logo";
import { useInput } from "../../components/utilsComp/UseInput";

export default function create() {
  return (
    <>
      <NavBar />
      <section className="container">
        <div className="welcome-msg">
            <h2>Sign Up</h2>
        </div>
        
      </section>
    </>
  );
}
