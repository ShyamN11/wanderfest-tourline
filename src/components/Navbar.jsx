import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>WANDERFEST TOURLINE</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
