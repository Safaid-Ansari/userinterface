import "../styles/Header.css";

import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="header">
      {/* <Link to="/"> */}
      <Link to="/order-list" title="home page">
        <img
          className="header__icon"
          src="http://assets.limetray.com/assets/loyalty/production/1648037756_1647263712VooshLogo1.png"
          alt="wasserstoff logo"
        />
      </Link>

      {/* </Link> */}
      <div className="innerSpan">
        <span>
          <Link to="/signup" title="sign-up">
            SignUp{" "}
          </Link>
        </span>
        <span>
          <Link to="/login" title="sign-in">
            Login{" "}
          </Link>
        </span>

        {localStorage.getItem("user") ? (
          <span onClick={logout}>Logout</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
