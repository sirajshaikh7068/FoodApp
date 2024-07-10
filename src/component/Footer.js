import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-black pt-2 pb-2 dark:bg-black dark:text-white ">
      <div className="flex-1 flex items-center justify-center lg:justify-end  p-10 m-10">
        <div className="flex items-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.swiggy.android"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt="Play Store"
              className="h-9 "
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/swiggy/id989540920"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt="App Store"
              className="h-9"
            />
          </a>
        </div>
      </div>
      <div className="container  flex flex-row  justify-between p-10 m-10">
        <div className="flex-1">
<<<<<<< HEAD
          <h3 className="text-2xl font-bold mb-4">Bhukkad</h3>
=======
          <h3 className="text-2xl font-bold mb-4">Swiggy</h3>
>>>>>>> 619e2c9d4daca29319026a4a0a8cfefe230d24ec
          <p className="text-sm mb-2">About Us</p>
          <p className="text-sm mb-2">Team</p>
          <p className="text-sm mb-2">Careers</p>
          <p className="text-sm">Blog</p>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="text-sm mb-2">Help & Support</p>
          <p className="text-sm mb-2">Partner with us</p>
          <p className="text-sm mb-2">Ride with us</p>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Legal</h3>
          <p className="text-sm mb-2">Terms & Conditions</p>
          <p className="text-sm mb-2">Refund & Cancellation</p>
          <p className="text-sm mb-2">Privacy Policy</p>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Connect with us</h3>
          <p className="text-sm mb-2">Facebook</p>
          <p className="text-sm mb-2">Twitter</p>
          <p className="text-sm mb-2">Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
