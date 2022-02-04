import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
const Products = (props) => {
  const products=useSelector(state=>state.products)
  return (
    <div className="product-view">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-14">
            <div className="row">
              <div className="col-md-12">
                <div className="product-view-top">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="product-search">
                        <form action="{% url 'mainpage:search' %}">
                          <input
                            type="Text"
                            placeholder="Search"
                            name="searchword"
                            autoComplete="OFF"
                          />
                          <button>
                            <i className="fa fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-short">
                        <div className="dropdown">
                          <div
                            className="dropdown-toggle one"
                            data-toggle="dropdown"
                          >
                            Product short by
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              href="{%url 'mainpage:product_filter' filtername=category.id%}"
                              className="dropdown-item"
                            >
                              category.category_name
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-price-range">
                        <div className="dropdown">
                          <div
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Product price range
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              href="{%url 'mainpage:product_filter' filtername='lowest' %}"
                              className="dropdown-item"
                            >
                              Lowest Price-Highest
                            </a>
                            <a
                              href="{% url 'mainpage:product_filter' filtername='highest' %}"
                              className="dropdown-item"
                            >
                              Highest Price-Lowest
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {
                products.map(product=>(
                  <ProductCard key={product.product_id} name={product.productName} pid={product.product_id} price={product.productPrice} category={product.category} url={product.imageUrl}/>
                ))
              }
            </div>
            <div className="col-md-12" style={{ marginTop: "20px" }}>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item ">
                    <a
                      className="page-link"
                      href="?page={{products.previous_page_number}}"
                      tabIndex="-1"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    
                  </li>
                  <li className="page-item disabled">
                    <a className="page-link" href="">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
