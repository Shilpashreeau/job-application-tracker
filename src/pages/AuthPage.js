import { useState } from "react";
 import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LogInForm";
import AboutPage from "./AboutPage";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {/* <Link to="/" onClick={<AboutPage/>}>
        About
      </Link> */}

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up" : "Sign in"}
      </button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
