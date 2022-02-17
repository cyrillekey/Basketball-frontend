import { useDispatch, useSelector } from "react-redux";
import { changeQty, chooseShipping, deleteItem, savePackaging } from "../../actions";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";

const Cart = (props) => {
  const shipping = useSelector((state) => state.packaging);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const changeValue = (e) => {
    let value = parseInt(e.target.value);
    dispatch(changeQty({ id: e.target.id, qty: value }));
  };
  const deleteProduct = (e) => {
    dispatch(deleteItem({ id: e.target.parentNode.id }));
  };
  const total = () => {
    var total = 0;
    items.forEach((element) => {
      total += element.price * element.qty;
    });
    return total * 1.0;
  };
  const handleShipping = (e) => {
    if (e.target.id == "free-shipping") {
      dispatch(savePackaging({ packaging: 0 }));
    } else if (e.target.id == "standard-shipping") {
      dispatch(savePackaging({ packaging: 100 }));
    } else if (e.target.id == "express-shipping") {
      dispatch(savePackaging({ packaging: 200 }));
    }
  };
  return (
    <div className="page-wrapper">
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url(assets/images/page-header-bg.jpg)" }}
        >
          <div className="container">
            <h1 className="page-title">
              Shopping Cart<span>Shop</span>
            </h1>
          </div>
        </div>

        <div className="page-content">
          <div className="cart">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <table className="table table-cart table-mobile">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>

                      {
                      items.length>0?
                      items.map((item) => (
                        <tr
                          data-index="{{product.id}}"
                          id="sepic"
                          key={item.id}
                        >
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <Link to={"/product/" + item.id}>
                                  <img src={item.url} alt="Produc" />
                                </Link>
                              </figure>

                              <h3 className="product-title">
                                <Link to={"/product/" + item.id}>
                                  {item.name}
                                </Link>
                              </h3>
                            </div>
                          </td>
                          <td>{item.size}</td>
                          <td className="price-col">KES {item.price}</td>
                          <td className="quantity-col">
                            <div className="cart-product-quantity">
                              <input
                                type="number"
                                className="form-control"
                                id={item.id}
                                value={item.qty}
                                min="1"
                                step="1"
                                data-decimals="0"
                                onChange={(e) => changeValue(e)}
                                required
                              />
                            </div>
                          </td>
                          <td className="total-col">{item.price * item.qty}</td>
                          <td className="remove-col">
                            <button className="btn-remove" id={item.id}>
                              <i id={item.id}
                                className="close"
                                
                              >
                                 <Close id={item.id} onClick={(e)=>deleteProduct(e)}/> 
                              </i>
                            </button>
                          </td>
                        </tr>
                      )):<div className="section__content">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-12 col-md-12 u-s-m-b-30">
                                  <div className="empty">
                                      <div className="empty__wrap">
  
                                          <span className="empty__big-text">EMPTY</span>
  
                                          <span className="empty__text-1">No items found on your cart.</span>
  
                                          <Link className="empty__redirect-link btn--e-brand btn btn-outline continue" to="/products">CONTINUE SHOPPING</Link></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>}
                    </tbody>
                  </table>

                  <div className="cart-bottom">
                    <div className="cart-discount">
                      <form action="#">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="coupon code"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-primary-2"
                              type="submit"
                            >
                              <i className="icon-long-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <aside
                  className="col-lg-5"
                  onChange={(e) => {
                    handleShipping(e);
                  }}
                >
                  <div className="summary summary-cart">
                    <h3 className="summary-title">Cart Total</h3>

                    <table className="table table-summary">
                      <tbody>
                        <tr className="summary-subtotal">
                          <td>Subtotal:</td>
                          <td>
                            KES &nbsp;
                            {total()}
                          </td>
                        </tr>
                        <tr className="summary-shipping">
                          <td>Packaging:</td>
                          <td>&nbsp;</td>
                        </tr>

                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="free-shipping"
                                name="shipping"
                                className="custom-control-input"
                                defaultChecked={shipping === 0 ? true : false}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="free-shipping"
                              >
                                Normal
                              </label>
                            </div>
                          </td>
                          <td>Free</td>
                        </tr>

                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="standard-shipping"
                                name="shipping"
                                className="custom-control-input"
                                defaultChecked={shipping === 100 ? true : false}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="standard-shipping"
                              >
                                Standart:
                              </label>
                            </div>
                          </td>
                          <td>KES 100</td>
                        </tr>

                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="express-shipping"
                                name="shipping"
                                className="custom-control-input"
                                defaultChecked={shipping === 200 ? true : false}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="express-shipping"
                              >
                                Express:
                              </label>
                            </div>
                          </td>
                          <td>KES 200</td>
                        </tr>

                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>KES {total() + Number(shipping)}</td>
                        </tr>
                      </tbody>
                    </table>

                    <Link
                      to="/shipping"
                      className="btn btn-outline-primary-2 btn-order btn-block"
                      aria-disabled
                    >
                      PROCEED TO SHIPPING
                    </Link>
                  </div>

                  <Link
                    to="/products"
                    className="btn btn-outline-dark-2 btn-block mb-3 continue"
                  >
                    <span>CONTINUE SHOPPING</span>
                    <i className="icon-refresh"></i>
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Cart;
