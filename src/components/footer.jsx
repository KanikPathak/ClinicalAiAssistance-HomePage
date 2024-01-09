import React from "react";

function Footer() {
  return (
    <footer className="border-t-2 rounded-md shadow-md absolute bottom-50 w-full text-white py-3 text-center blue-shade">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* First Row */}
        <div>
          {/* Company Info */}
          <div>
            <h3 className="text-white mb-2">Clinical AI Assistance Pvt. Ltd.</h3>
            <p className="text-white">All Rights Reserved @2023</p>
            <a href="/terms" className="text-blue-400 hover:text-blue-600">
              <>Terms & Policy</>
            </a>
          </div>

          {/* Subscription Form */}
          <div className="flex flex-col items-center">
            <h3 className="mb-2 text-white">Subscribe to get important updates</h3>
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 rounded-md w-full text-white outline-none"
            />
            <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white w-full">
              Subscribe
            </button>
          </div>

          {/* Careers and Follow Us */}
          <div>
            <h3 className="font-bold mb-2 text-white">Careers</h3>
            {/* Add links for careers */}
            <h3 className="font-bold mb-2 mt-4 text-white">Follow Us</h3>
            <div className="flex gap-3 justify-center">
              <img src="./media/fb.png" alt="" className="text-2xl hover:text-blue-500 cursor-pointer w-10 h-10" />
              <img src="./media/linkedin.svg" alt="" className="text-2xl hover:text-blue-500 cursor-pointer w-10 h-10" />
              <img src="./media/twitter.svg" alt="" className="text-2xl hover:text-blue-500 cursor-pointer w-10 h-10" />
              <img src="./media/insta.svg" alt="" className="text-2xl hover:text-blue-500 cursor-pointer w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div>
          {/* Contact Info */}
          <div>
            <h3 className="mb-2 text-white">Contact Us</h3>
            <div className="flex flex-col">
              <small className="text-white">Clinical AI Assistance Pvt. Ltd.</small>
              <small className="text-white">FIST, IIT Patna, Block 9, R-503</small>
              <small className="text-white">Patna, Bihar, 801106 India</small>
              <small className="text-white">Email: info@clinicalaiassistance.com</small>
              <small className="text-white">Mob: +91 9123979259</small>
            </div>
          </div>

          {/* Supported By */}
          <div className="text-center">
            <h3 className="text-white mb-2">Supported By</h3>
            {/* Add supporter logos or names here */}
            <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
              <img
                src="https://clinicalaiassistance.com/img/Microsoft.jpeg"
                className="rounded-lg"
                width={150}
                height={150}
                alt="microsoft"
              />
              <img
                src="https://clinicalaiassistance.com/img/fist2.png"
                className="rounded-lg"
                width={150}
                height={100}
                alt="fist"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
