import { useState } from "react";

import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

import NewJobPage from "./pages/NewJob";
import AuthPage from "./pages/AuthPage";
import AllJobsPage from "./pages/AllJobsPage";
import NavBar from "./components/navbar/NavBar";
import AboutPage from "./pages/about/AboutPage";
import { getUser } from "./utilities/users-service";

import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            x
            {/* <Route path='/jobs/new' element={ <NewJobPage user={user} setUser={setUser}/> }/> */}
            <Route
              path="/jobs"
              element={<AllJobsPage user={user} setUser={setUser} />}
            />
            {/* <Route path="/*" element={<Navigate to="/jobs/new" />} /> */}
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route>
              <Route path="/" element={<AboutPage />} />
            </Route>
          </Routes>
          <AuthPage setUser={setUser} />
        </>
      )}
    </main>
  );
}

export default App;
