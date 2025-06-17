import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-base-300 text-neutral-content p-4 fixed bottom-0 w-full">
      <aside className="flex items-center gap-2">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811..."></path>
        </svg>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>

      <ul className="flex gap-4 ml-auto text-sm">
        <li>
          <Link to="/contactus" className="hover:underline">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/privacypolicy" className="hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/termsofservice" className="hover:underline">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/refundpolicy" className="hover:underline">
            Refund Policy
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
