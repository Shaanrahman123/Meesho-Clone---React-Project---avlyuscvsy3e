import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { CartContext } from "../Context/Context";
import "./productDetails.css"

import PacmanLoader from "react-spinners/PacmanLoader";

const Productpage = () => {

  const Globalstate = useContext(CartContext);

  const dispatch = Globalstate.dispatch;
  const params = useParams();
  const [details, setDetails] = useState({});
  const [loader, setLoader] = useState(false);


  const [addedToCart, setAddedToCart] = useState(false);


  var qty = "quantity";
  var val = 1;
  details[qty] = val;


  function addtoCart() {
    dispatch({ type: 'ADD', payload: details })
    setAddedToCart(true);

  }
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${params.id}`
        );
        const data = await response.json();

        setTimeout(() => {
          setDetails(data);
          setLoader(true);

        }, 2000)
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  if (!loader) {
    return (
      <PacmanLoader

        color="rgb(244, 51, 151)"
        cssOverride={{
          left: '42%',
          position: 'absolute',
          textAlign: 'center',
          top: '42%'
        }}
        size={45}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    );
  }

  return (
    <>
      <Header />

      <main id="single-product">
        <div class="pro-details-container margin-top">
          <div class="left-column">
            <img src={details.image} alt="${title}" />
          </div>
          <div class="right-column">
            <div class="product-description">
              <span>{details.category}</span>
              <div class="pro-rating">
                <span>{details.rating.rate}</span>
              </div>
              <h1>{details.title}</h1>
              <h3></h3>

            </div>
            <div class="product-configuration">
              {details.description}
            </div>
            <div id="single-product-price">
              <h2> <span class="price">₹ {details.price}</span></h2>
              <h2><span class="disscount-single"></span></h2>
            </div>

            <div class="product-price">
              <span></span>
              <div>

                {/* <button className="btn" onClick={addtoCart}>Add to Cart</button> */}

                <button className="btn" onClick={addtoCart} disabled={addedToCart}>
                  {addedToCart ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>

      </main>

    </>
  );
};

export default Productpage;
