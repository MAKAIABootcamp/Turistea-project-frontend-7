import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-4 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="inline font-body text-sm text-gray-input sm:text-center ">
            © 2024{" "}
            <Link to={`/`} className="hover:underline mr-2 md:mr-4">
              Turistea, Inc
            </Link>
            <p className="inline font-bold  mr-1 md:mr-2">.</p>
            <Link className="hover:underline mr-2  md:mr-4">Privacy</Link>
            <p className="inline font-bold  mr-1 md:mr-2">.</p>
            <Link className="hover:underline mr-2 md:mr-4">About us</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
