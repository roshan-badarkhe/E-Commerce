import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import stylz from "../assets/stylz-high-resolution-logo-black-transparent.png";
import { Link } from "react-router-dom";

const Nav = () => {
  // bg-gradient-to-r from-blue-300 via-gray-200 to-pink-300
  return (
    <>
      <div className="flex justify-center bg-black">
        <span className="h-8 text-xl align-middle">
          <span className="text-light sm:text-sm font-sans text-white">
            Get free delivery on orders over $100
          </span>
        </span>
      </div>
      <nav className="h-14 flex justify-between text-2xl bg-gray-200 items-center">
        <Link to="/" className="h-3/5">
          <img src={stylz} className="inlinew-1/10  h-full pl-10" />
        </Link>
        <div className="flex text-gray-600  font-medium gap-24">
          <span className="hover:text-black cursor-default">
            <Link to="/women">Women</Link>
          </span>
          <span className="hover:text-black cursor-default">
            <Link to="/men">Men</Link>
          </span>
          <span className="hover:text-black cursor-default">
            <Link to="/kids">Kids</Link>
          </span>
        </div>
        <div className="ml-4 flow-root lg:ml-6">
          <a href="#" className="group mr-2 flex items-center p-2">
            <ShoppingBagIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              0
            </span>
            <span className="sr-only">items in cart, view bag</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
