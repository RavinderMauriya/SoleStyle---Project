import React, { useState, useContext} from "react";
import { ShoppingCart, User, Heart, Search, Sun, Menu, X, VectorSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { productDataContext } from "../Context/productDataContext";

const Navbar = ({ setFormOpen }) => {

  const navigate = useNavigate();
  const { products, totalQuantity } = useContext(productDataContext);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const suggestions =
    query === ""
      ? []
      : products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">

      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-16 py-4">

        {/* Logo */}
        <div className="text-xl sm:text-2xl font-extrabold">
          <Link className="flex items-center gap-2" to="/">
            <VectorSquare className="text-green-400" />
            SoleStyle
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-bold text-gray-800">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop/men">Men</Link></li>
          <li><Link to="/shop/women">Women</Link></li>
          <li><Link to="/shop/kids">Kids</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Search */}
          <div className="relative flex items-center bg-gray-100 rounded-full px-3 py-1 w-28 sm:w-40 md:w-56 border border-transparent hover:border-green-400 focus-within:border-green-400 transition">

            <Search size={16} className="text-gray-500 mr-2" />

            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none text-sm w-full"
            />

            {query && (
              <div className="absolute top-11 left-0 w-full bg-white border rounded-md shadow-lg z-50">

                {suggestions.slice(0, 5).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      navigate(`/productdetail/${item.id}`);
                      setQuery("");
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {item.name}
                  </div>
                ))}

                {suggestions.length === 0 && (
                  <div className="px-4 py-2 text-gray-500 text-sm">
                    No results
                  </div>
                )}

              </div>
            )}

          </div>

          {/* Desktop Icons */}
          <Sun className="cursor-pointer hidden md:block" />
          <Heart className="cursor-pointer hidden md:block" />

          {/* for cart dot symbol */}
          <div className="p-1 relative">
            <ShoppingCart
              className="cursor-pointer"
              onClick={() => navigate("/cart")}/>

            {totalQuantity > 0 && <div className="absolute bottom-6 left-5 text-xs bg-green-400 rounded-full px-1">
              {totalQuantity}
              </div>}
          </div>

          <User
            className="cursor-pointer hidden sm:block"
            onClick={() => setFormOpen(true)}
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-6 pb-4 border-t bg-white">

          <ul className="flex flex-col gap-4 font-semibold text-gray-800 pt-4">

            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop/men" onClick={() => setOpen(false)}>
                Men
              </Link>
            </li>

            <li>
              <Link to="/shop/women" onClick={() => setOpen(false)}>
                Women
              </Link>
            </li>

            <li>
              <Link to="/shop/kids" onClick={() => setOpen(false)}>
                Kids
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>

            <li
              className="cursor-pointer"
              onClick={() => {
                setFormOpen(true);
                setOpen(false);
              }}
            >
              Login
            </li>

            <li>
              <Link to="/wishlist" onClick={() => setOpen(false)}>
                Wishlist
              </Link>
            </li>

          </ul>

        </div>
      )}

    </div>
  );
};

export default Navbar;