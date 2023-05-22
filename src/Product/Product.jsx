
import "../Product/Product.css";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";



const Product = (props) => {

  const { item } = props;
  var qty = "quantity";
  var val = 1;
  item[qty] = val;



  return (
    <div>

      <div className="productMain-box">
        <Link style={{ textDecoration: 'none' }} to={`/productpage/${item.id}`}>
          <div className="product-box">
            <div className="product-img-box">
              <img src={item.image} alt="" />
            </div>
            <div className="product-content">
              <div className="product-content-one">
                <span className="product-span">
                  <p className="product-title">{item.title}</p>
                  <div className="span-div">
                    <h5 className="pro-price">
                      ₹{item.price}
                      <span className="onwards">Onwards</span>
                    </h5>
                  </div>
                </span>
              </div>
              <div className="delivery">
                <div className="delivery-box">
                  <span className="delivery-text">
                    free Delivery
                  </span>
                </div>
              </div>
              <div className="rating-box">
                <div className="rating-content">
                  <span className="rating" style={{ backgroundColor: item.rating.rate >= 3.5 ? " #23bb75" : "rgb(244, 182, 25) " }}>{item.rating.rate} <FaRegStar className="star" size={15} /></span>
                  <span className="review">62000 Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

    </div >
  );
};

export default Product;


