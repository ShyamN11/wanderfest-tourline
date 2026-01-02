import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>WANDERFEST TOURLINE</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link>
      </div>
    </nav>
  );
}

export default Navbar;
