import React, { useContext, useState } from "react";
import meesho from "../img/meesho.png";
import search from "../img/search.png";
import mobile from "../img/mobile.png";
import user from "../img/user.png";
import { Badge } from "@mui/material";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../Context/Context";

const Header = () => {




  const [playstore, setPlaystore] = useState(false);
  const [profile, setProfile] = useState(false);
  const Globalstate = useContext(CartContext);
  const navigate = useNavigate();

  const localData = JSON.parse(localStorage.getItem("user") || null);

  function store() {
    setPlaystore(!playstore);
  }

  function openLoginbtn() {
    setProfile(!profile);
  }



  function handleuser() {
    if (localData === null) {
      localStorage.removeItem("user");
      navigate("/signup")

    }
    else if (localData !== null) {

      localStorage.removeItem("user");
      setProfile(false)

    }

  }

  return (
    <div name="home" className="pos">
      <header className="headder">
        <div className="headerLeft">
          <div className="logoContainer">
            <img src={meesho} onClick={() => navigate("/")} alt="" />
          </div>
          <div className="searchInputContainer">
            <div className="searchIcon">
              <img src={search} />
            </div>
            <form action="">

              <input type="search"
                placeholder="Try Saree, Kurti or Search by Product Code"
                className="inputSearch" />


            </form>
            <div className="inputCloseSearch">
            </div>
          </div>
        </div>

        <div className="headerRight">
          <div className="downloadContainer">
            <div className="mobileIcon">
              <img src={mobile} />
            </div>
            <p onClick={store}>
              Download App
            </p>

            {playstore && (
              <div style={{ display: "block" }}>
                <div className="downloadHoverBtnContainer">
                  <h3>Download From</h3>
                  <a href="" className="downloadBtn">
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" />
                  </a>
                  <a href="" className="downloadBtn">
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="becomeSupplierContainer">
            <p>Become a Supplier</p>
          </div>

          <div className="profileAndCart">
            <div className="profileContainer">
              <div className="profileIcon">
                <img src={user} onClick={openLoginbtn} />
              </div>
              <p onClick={openLoginbtn}>Profile</p>

              {profile && (
                <div style={{ display: "block" }}>
                  <div className="profileHoverBtnContainer">
                    <h3>Hello {localData === null ? 'User' : localData.name}</h3>
                    <h5> {localData !== null ? 'Welcome to Meesho' : 'Access your account'}</h5>
                    <button
                      onClick={handleuser}
                      className="login_btn"
                    >
                      Sign {localData !== null ? "out" : "up"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="CartContainer" onClick={() =>
              localData ?
                navigate("/cart") : navigate('/signup')}
            >
              <div className="CartIcon">
                <Badge
                  color="secondary"
                  badgeContent={Globalstate.state.length}
                >
                  <GiShoppingCart size={28} />
                </Badge>
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </header>
      <div>
        <nav className="hide-on-small">
          <ul>
            <Link to="/productlist">Women Ethnics</Link>
            <Link to="/productlist">Women Western</Link>
            <Link to="/productlist">Men</Link>
            <Link to="/productlist">Kids</Link>
            <Link to="/productlist">Home & Kitchen</Link>
            <Link to="/productlist">Beauty & Health</Link>
            <Link to="/productlist">Jewellery & Accessories</Link>
            <Link to="/productlist">Bags & Footwear</Link>
            <Link to="/productlist">Electronics</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
