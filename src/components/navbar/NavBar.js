import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";
import styles from './NavBar.module.css';
function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav className={styles.NavBar}>
     JOB APPLICATION TRACKER
      <Link style={{ textDecoration: 'none',color:'black' }} to="/jobs">List of Jobs</Link>
      {/* &nbsp; | &nbsp; */}
      {/* <Link to="/jobs/new">New Job</Link> */}<span>Welcome, {user.name}</span>{" "} 
      <Link style={{ textDecoration: 'none',color:'black'}}to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
