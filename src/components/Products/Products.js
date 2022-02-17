import React,{useState} from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
const Products = (props) => {
  const products=useSelector(state=>state.products)
  const [pagination,setPagination]=useState({
    currentPage:0,
    itemsCount:products.length,
    itemsPerPage:8,
    pages:Math.floor(products.length/8),
    currentstart:0,
  });
  const handleCLick=(e)=>{
    e.preventDefault()
    if(e.target.id=="next"){
    setPagination({...pagination,currentPage:pagination.currentPage+1,currentstart:pagination.currentstart+Number(pagination.itemsPerPage)})
    }else if(e.target.id=="prev"){
      setPagination({...pagination,currentPage:pagination.currentPage-1,currentstart:pagination.currentstart-Number(pagination.itemsPerPage)})
    }
    
  }
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
                products.slice(pagination.currentstart,pagination.currentstart+pagination.itemsPerPage).map(product=>(
                  <ProductCard key={product.product_id} player={product.playerName} name={product.productName} pid={product.product_id} price={product.productPrice} category={product.category} url={product.imageUrl}/>
                ))
              }
            </div>
            <div className="col-md-12" style={{ marginTop: "20px" }}>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  {
                    pagination.currentPage>0?
                  <li className="page-item ">
                    <a 
                    id="prev"
                      className="page-link"
                      href="/"
                      onClick={(e)=>handleCLick(e)}
                    >
                      Previous
                    </a>
                  </li>:<li></li>
                  }
                  {
                    
                   pagination.currentPage<pagination.pages? <li className="page-item">
                   <a id="next" className="page-link" href="/" onClick={(e)=>handleCLick(e)}>
                     Next
                   </a>
                 </li>:<li></li>
                  }                 
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
