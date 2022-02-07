import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setadded("added");
    dispatch(
      addToCart({ id: e.target.id, url: "", price: "", qty: 1, name: "",size:props.sizeName,sizeId:props.sizeId })
    );
    setTimeout(function () {
      setadded(" ");
    }, 2500);
  };
  const [added, setadded] = useState("");
  
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-product">
        <div className="product-image">
          <img
            src={props.url}
            style={{ height: "300px", objectFit: "fill" }}
            alt=""
          />
          <div className="button">
            {/* <a id={props.pid} onClick={handleSubmit} className="btn add-cart">
                        <i className="lni lni-cart"></i> Add to Cart
                      </a> */}
            <button
              id={props.pid}
              className={"add-to-cart " + added}
              onClick={handleSubmit}
            >
              <div className="default" id={props.pid}>
                Add to cart
              </div>
              <div className="success" id={props.pid}>
                Added
              </div>
              <div className="cart" id={props.pid}>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="product-info">
          <span className="category">{props.category}</span>
          <h4 className="title">
            <Link to={"/product/" + props.pid}>{props.name}</Link>
          </h4>
          <ul className="review">
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <span>5.0 Review(s)</span>
            </li>
          </ul>
          <div className="price">
            <span>KES {props.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
