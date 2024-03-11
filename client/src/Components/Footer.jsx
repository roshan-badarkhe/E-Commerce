// import React from "react";

const Footer = () => {
  return (
    <>
      <div id="footer" className="flex justify-center h-fit text-white">
        <div className="container bg-gray-900 h-full flex flex-wrap justify-around py-16">
          <div className=" font-extrabold text-7xl font-culpa">Stylz</div>
          <div className="flex flex-wrap gap-44 p-4">
            <ul className="flex flex-col gap-3 text-lg">
              <li className="text-3xl font-bold font-serif">About</li>
              <div>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Styl Stories</li>
                <li>Press</li>
                <li>Corporate Information</li>
              </div>
            </ul>
            <ul className="flex flex-col gap-3 text-lg">
              <li className="text-3xl font-bold font-serif">Help</li>
              <div>
                <li>Payments</li>
                <li> Shipping</li>
                <li> Cancellation & Returns</li>
                <li> FAQ </li>
                <li>Report Infringement</li>
              </div>
            </ul>
            <ul className="flex flex-col gap-3 text-lg">
              <li className="text-3xl font-bold font-serif">Consumer Policy</li>
              <div>
                <li>Cancellation & Returns</li>
                <li>Terms Of Use</li>
                <li>Security </li>
                <li>Privacy</li>
                <li>Sitemap</li>
                <li>Grievance</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
