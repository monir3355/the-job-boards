import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white py-16">
      <div className="container mx-auto grid gap-8 md:grid-cols-5 md:px-0 px-4">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">theJobBoard</h3>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <p>
            <Link>
              <img
                className="h-6"
                src="/images/Icons/Group 9969.png"
                alt=""
              />
            </Link>
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Company</h4>
          <Link>About Us</Link><br />
          <Link>Work</Link><br />
          <Link>Latest News</Link><br />
          <Link>Careers</Link><br />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Product</h4>
          <Link>Prototype</Link><br />
          <Link>Plans & Pricing</Link><br />
          <Link>Customers</Link><br />
          <Link>Integrations</Link><br />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Support</h4>
          <Link>Help Desk</Link><br />
          <Link>Sales</Link><br />
          <Link>Become a Partner</Link><br />
          <Link>Developers</Link><br />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <p>
            524 Broadway , NYC <br /> +1 777 - 978 - 5570
          </p>
        </div>
      </div>
      <hr className="container mx-auto mt-4"/>
      <div className="md:flex justify-between container mx-auto my-4 md:px-0 px-4">
        <p>@2023 theJobBoard. All Rights Reserved</p>
        <p>Powered by theJobBoard</p>
      </div>
    </footer>
  );
};

export default Footer;
