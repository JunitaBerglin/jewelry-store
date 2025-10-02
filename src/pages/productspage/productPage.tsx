import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/footer";
import { Product } from "../../models/Product";
import { products } from "../../models/productList";
import useCart from "../../context/useCart";
import "../../scss/products.scss";

const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setSortDropdownOpen(false);
      setFilterDropdownOpen(false);
    };

    if (sortDropdownOpen || filterDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sortDropdownOpen, filterDropdownOpen]);

  // Filter functions
  const handleFilterAll = (e: React.MouseEvent) => {
    e.preventDefault();
    setFilteredProducts(products);
    setFilterDropdownOpen(false);
  };

  const handleFilterByType = (type: string, e: React.MouseEvent) => {
    e.preventDefault();
    const filtered = products.filter((product) => product.type === type);
    setFilteredProducts(filtered);
    setFilterDropdownOpen(false);
  };

  // Sort functions
  const handleSortReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setFilteredProducts([...products]);
    setSortDropdownOpen(false);
  };

  const handleSortAZ = (e: React.MouseEvent) => {
    e.preventDefault();
    const sorted = [...filteredProducts].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setFilteredProducts(sorted);
    setSortDropdownOpen(false);
  };

  const handleSortZA = (e: React.MouseEvent) => {
    e.preventDefault();
    const sorted = [...filteredProducts].sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
    setFilteredProducts(sorted);
    setSortDropdownOpen(false);
  };

  const handleSortPriceHighToLow = (e: React.MouseEvent) => {
    e.preventDefault();
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
    setSortDropdownOpen(false);
  };

  const handleSortPriceLowToHigh = (e: React.MouseEvent) => {
    e.preventDefault();
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
    setSortDropdownOpen(false);
  };

  const handleProductClick = (productId: string) => {
    navigate(`/productdetails/${productId}`);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <>
      <Header />
      <main className="productscontainer pt-5">
        <div className="row selections mb-3">
          <div className="btn-group dropdown sort">
            <button
              className="sort__btn btn btn-outline-dark dropdown-toggle"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSortDropdownOpen(!sortDropdownOpen);
              }}
              aria-expanded={sortDropdownOpen}
            >
              Sort
            </button>
            <ul
              className={`dropdown-menu sort__options ${
                sortDropdownOpen ? "show" : ""
              }`}
            >
              <li>
                <a
                  href="#"
                  className="dropdown-item sort__reset"
                  onClick={(e) => handleSortReset(e)}
                >
                  Reset
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item sort__az"
                  onClick={(e) => handleSortAZ(e)}
                >
                  Name A-Z
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item sort__za"
                  onClick={(e) => handleSortZA(e)}
                >
                  Name Z-A
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item sort__pricehtol"
                  onClick={(e) => handleSortPriceHighToLow(e)}
                >
                  Price high to low
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item sort__priceltoh"
                  onClick={(e) => handleSortPriceLowToHigh(e)}
                >
                  Price low to high
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group dropdown filter">
            <button
              className="filter__btn btn btn-outline-dark dropdown-toggle"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFilterDropdownOpen(!filterDropdownOpen);
              }}
              aria-expanded={filterDropdownOpen}
            >
              Filter
            </button>
            <ul
              className={`dropdown-menu filter__options ${
                filterDropdownOpen ? "show" : ""
              }`}
            >
              <li>
                <a
                  href="#"
                  className="dropdown-item filter__all"
                  onClick={(e) => handleFilterAll(e)}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item filter__rings"
                  onClick={(e) => handleFilterByType("Ring", e)}
                >
                  Rings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item filter__necklaces"
                  onClick={(e) => handleFilterByType("Necklace", e)}
                >
                  Necklaces
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item filter__bracelets"
                  onClick={(e) => handleFilterByType("Bracelet", e)}
                >
                  Bracelets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item filter__earrings"
                  onClick={(e) => handleFilterByType("Earring", e)}
                >
                  Earrings
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="allProductsContainer">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <div
                className="productimgcontainer"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product__img"
                  onMouseEnter={(e) => {
                    if (product.secondImage) {
                      (e.target as HTMLImageElement).src = product.secondImage;
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).src = product.image;
                  }}
                />
                <button
                  className="btn btn-dark product__btn"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  <i className="bi bi-cart-plus-fill"></i>
                </button>
              </div>
              <p className="product__type">{product.type}</p>
              <p className="product__name">{product.name}</p>
              <p className="product__price">{product.price} kr</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export { ProductsPage };
